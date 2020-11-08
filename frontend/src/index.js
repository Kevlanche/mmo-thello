const { Client } = require('./Client');


const root = document.querySelector('#root');
const status = document.querySelector('#status');
/** @type {HTMLDivElement} */
const timer = document.querySelector('#timer');

function setStatus(stat) {
  status.innerText = `Status: ${stat}`;
}

async function updateLeaderboard() {
  /** @type {HTMLDivElement} */
  const leaderboard = document.querySelector('#leaderboard');

  const res = await fetch('https://mmothello-data.s3.eu-central-1.amazonaws.com/leaderboard', { method: 'GET' })
  if (res.status != 200 ) {
    console.warn('Could not find leaderboard data', res.status);
    leaderboard.innerHTML = 'Leaderboard data not available';
  }

  leaderboard.innerHTML = '';
  leaderboard.innerHTML = 'Leaderboard (reset daily):';

  const data = await res.json();
  const { winners } = data;
  [...Object.keys(winners)]
    .sort((a, b) => winners[b] - winners[a])
    .forEach((player, pos) => {

      const node = document.createElement('div');
      node.innerText = `${player}, ${winners[player]} win${winners[player] > 1 ? 's' : ''}${pos === 0 ? ' 👑': ''}`
      leaderboard.appendChild(node);
    });
}

const sessionLengthMs = 1000 * 60 * 5;
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
  let playerIdToColors = {};

  // setInterval(() => {
  //   if (socket && socket.bufferedAmount > 0) {
  //     console.log('Buffered:', socket.bufferedAmount);
  //   }
  // }, 100);

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
    playerIdToColors = {};
    socket = new WebSocket("wss://qnrk3f4ghb.execute-api.eu-central-1.amazonaws.com/Prod?agent=foo");
    // socket.binaryType = 'arraybuffer';

    const incomingMessages = [];
    const localSocket = socket;

    const getLocalId = () => {
      const mapped = playerIdToColors[playerId];
      if (!mapped) {
        return null;
      }
      return mapped;
    };
    socket.onopen = function (event) {
      updateLeaderboard().catch(console.warn);
      if (socket === localSocket) {
        setStatus('Connected');
        connected = true;

        let lastClicked = {};
        const popup = document.createElement('div');

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
            cell.onmouseenter = () => {
              const player = cell.getAttribute('data-player');
              if (player) {
                const owner = Object.keys(playerIdToColors).find(pid => playerIdToColors[pid] == player);
                if (owner) {
                  popup.style.display = 'flex';
                  popup.innerText = `Owned by ${owner}`
                }
              }

            }
            cell.onmouseleave = () => {
              popup.style.display = 'none';
            }
            root.appendChild(cell);
          }
        }

        popup.className = 'popup';
        root.appendChild(popup);


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
            const hit = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
            const local = getLocalId();
            if (color === local) {
              // Block for 5 seconds
              const timeouter = document.querySelector('#timeouter');
              timeouter.classList.add('instant');
              timeouter.style.backgroundColor = 'red';
              timeouter.style.height = '100%';

              setTimeout(() => {
                timeouter.classList.remove('instant');
                timeouter.style.height = '0%';
                timeouter.style.backgroundColor = 'green';
              }, 2000)
            }
            if (hit) {
              hit.style.backgroundColor = playerColors[Math.abs(color) % playerColors.length];
              hit.setAttribute('data-player', color);
            }
          },
          setLegality: (x, y, isLegal) => {
            const hit = document.querySelector(`.cell[data-x="${x}"][data-y="${y}"]`);
            if (hit) {
              if (isLegal) {
                hit.classList.add('legal');
              } else {
                hit.classList.remove('legal');
              }
            }
          },
          getLocalId,
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
        const decoded = new TextEncoder().encode(parsed.payload);
        incomingMessages.push(decoded);

        if (client) {
          client.call();
        }
      } else if (parsed.type === 'meta') {
        const { playerColor, playerName } = parsed;
        if (playerColor !== undefined && playerName !== undefined) {
          playerIdToColors[playerName] = playerColor;
        }
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
