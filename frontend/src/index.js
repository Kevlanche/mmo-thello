const { Client } = require('./Client');

const DATA_URL = 'https://mmothello-data.s3.eu-central-1.amazonaws.com/px8x8';

const root = document.querySelector('#root');
const status = document.querySelector('#status');
/** @type {HTMLDivElement} */
const timer = document.querySelector('#timer');

function setStatus(stat) {
  status.innerText = `Status: ${stat}`;
}

const sessionLengthMs = 1000 * 60; // * 5;
let bgBackgroundTimer;

const playerId = window.location.hash.slice(1);
if (!playerId) {
  document.body.innerHTML = 'Missing playerId, add playerId with theurl.com#id_here';
  window.onhashchange = () => window.location.reload();
  throw new Error('Abort');
}

async function init() {
  /** @type {WebSocket} */
  let socket;
  let connected = false;
  /** @type {{ call: () => void }} */
  let client;
  let clientAutoRunner;
  let inactivityCounter = 0;

  setInterval(() => {
    if (socket && socket.bufferedAmount > 0) {
      console.log('Buffered:', socket.bufferedAmount);
    }
  }, 100);

  const playerColors = [
    'red','blue','green','black','cyan','magenta','pink','purple','orange'
  ];

  const reconnect = () => {
    if (socket) {
      socket.close();
      client = null;
      clearInterval(clientAutoRunner);
    }

    root.innerHTML = '';

    setStatus('Connecting');
    connected = false;
    socket = new WebSocket("wss://qnrk3f4ghb.execute-api.eu-central-1.amazonaws.com/Prod?agent=foo");
    // socket.binaryType = 'arraybuffer';

    const incomingMessages = [];
    const localSocket = socket;
    socket.onopen = function (event) {
      if (socket === localSocket) {
        setStatus('Connected');
        connected = true;

        let lastClicked = {};

        for (let y = 0; y < 16; y++) {
          for (let x = 0; x < 16; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.setAttribute('data-x', x);
            cell.setAttribute('data-y', y);
            if (x >= 4 && x <= 11 && y >= 4 && y <= 11) {
              cell.classList.add('inner');
            }
            cell.style.setProperty('--data-color', 'cyan');
            // TODO onlclick
            cell.onclick = () => {
              inactivityCounter = 0;
              lastClicked.x = x;
              lastClicked.y = y;

              if (client) {
                client.call();
              }
            };
            root.appendChild(cell);
          }
        }

        client = Client({
          getIncomingMessage: () => incomingMessages.shift() || null,
          getClick: () => {
            const { x, y } = lastClicked;
            if (x === undefined || y === undefined) {
              return null;
            }
            lastClicked.x = undefined;
            lastClicked.y = undefined;
            return { x, y };
          },
          postToServer: msg => {
            const outgoing = JSON.stringify({
              action: 'sendmessage',
              target: 'server',
              type: 'kl',
              pid: playerId,
              payload: new TextDecoder().decode(msg),
            });
            socket.send(outgoing);
          },
          setBoard: (x, y, color) => {
            console.log('setBoard:', x, y, color);
            const hit = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
            if (hit) {
              // const newBg = `#${`${Math.abs(color).toString(16)}`.padStart(6, '0')}`;
              // console.log(newBg);
              hit.style.backgroundColor = playerColors[Math.abs(color) % playerColors.length];
            }
            // cell';
            // cell.setAttribute('data-x', x);cw
            // cell.setAttribute('data-y', y);
            // cell.style.setProp
          },
          // foo:
        });
        clientAutoRunner = setInterval(() => {
          client && client.call();
        }, 100);

      }
    };

    socket.onmessage = (event) => {
      if (socket !== localSocket) {
        return;
      }
      const parsed = JSON.parse(event.data);
      if (parsed.target !== 'client') {
        return;
      }

      if (parsed.type === 'kl') {
        console.log('decoded incoming payload ENCODED:', parsed.payload);
        const decoded = new TextEncoder().encode(parsed.payload);
        console.log('decoded incoming payload DECODED:', decoded);
        incomingMessages.push(decoded);

        if (client) {
          client.call();
        }
      } else if (parsed.type === 'meta') {
        console.log('onMetaMessage:', parsed);
      }
    }

    socket.onerror = err => {
      if (socket === localSocket) {
        console.log('onerror', err);
      }
    }

    socket.onclose = err => {
      if (socket === localSocket) {
        console.log('onclose', err);
        setStatus('Disconnected');
      }
    }
  };

  let lastSessionId = null;
  let transitionSessionTimer;
  const transitionSession = () => {
    // TODO only autoConnect if you made any moves last game
    const now = Date.now();
    const sessionId = now - (now % sessionLengthMs);
    if (sessionId !== lastSessionId) {

      ++inactivityCounter;
      if (inactivityCounter >= 3) {
        setStatus('Disconnected due to inactivity, reload page to rejoin')
        clearInterval(transitionSessionTimer);
        clearInterval(bgBackgroundTimer);
        if (socket) {
          socket.close();
        }
        socket = null;
      } else {
        reconnect();
      }
    }
    lastSessionId = sessionId;
  };

  transitionSession();
  transitionSessionTimer = setInterval(transitionSession, 1000);

  /** @type {HTMLButtonElement} */
  const pingButton = document.querySelector('#ping');
  pingButton.onclick = () => {
    if (connected) {
      const salt = `${Math.random()}`;
      console.log(new Date(), 'Sending', salt);
      socket.send(JSON.stringify({
        action: 'sendmessage',
        target: 'server',
        type: 'meta',
        salt
      }));
    }
  };
}

init()
  .catch(err => console.warn('Failed to init', err));


const timerBg = document.createElement('div');
timerBg.className = 'timerBg';
timer.appendChild(timerBg);

const timerLabel = document.createElement('p');
timer.appendChild(timerLabel);

const updateTimer = () => {
  const now = Date.now();
  const sessionId = now - (now % sessionLengthMs);
  timerLabel.innerText = `Session ${sessionId}`;

  const progress = (now % sessionLengthMs) * 100 / sessionLengthMs;
  if (progress >= 90) {
    timerBg.style.backgroundColor = 'red';
  } else {
    timerBg.style.backgroundColor = 'green';

  }
  timerBg.style.width = `${progress}%`;
};

updateTimer();
bgBackgroundTimer = setInterval(updateTimer, 1000);
