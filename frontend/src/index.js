const DATA_URL = 'https://mmothello-data.s3.eu-central-1.amazonaws.com/px8x8';

const root = document.querySelector('#root');
const status = document.querySelector('#status');
/** @type {HTMLDivElement} */
const timer = document.querySelector('#timer');

function setStatus(stat) {
  status.innerText = `Status: ${stat}`;
}

const sessionLengthMs = 1000 * 60; // * 5;

async function init() {
  /** @type {WebSocket} */
  let socket;
  let connected = false;

  setInterval(() => {
    if (socket && socket.bufferedAmount > 0) {
      console.log('Buffered:', socket.bufferedAmount);
    }
  }, 100);

  const reconnect = () => {
    if (socket) {
      socket.close();
    }

    setStatus('Connecting');
    connected = false;
    socket = new WebSocket("wss://qnrk3f4ghb.execute-api.eu-central-1.amazonaws.com/Prod?agent=foo");
    const localSocket = socket;
    socket.onopen = function (event) {
      setStatus('Connected');
      connected = true;
    };

    socket.onmessage = (event) => {
      // refresh(event.data);
      if (socket === localSocket) {
        const parsed = JSON.parse(event.data);
        if (parsed.target === 'client') {
          console.log('onmessage:', parsed);
        }
      }
    }

    socket.onerror = err => {
      if (socket === localSocket) {
        console.log('onerror', err);
        console.warn('err', err);
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
  const transitionSession = () => {
    // TODO only autoConnect if you made any moves last game
    const now = Date.now();
    const sessionId = now - (now % sessionLengthMs);
    if (sessionId !== lastSessionId) {
      reconnect();
    }
    lastSessionId = sessionId;
  };

  transitionSession();
  setInterval(transitionSession, 1000);

  /** @type {HTMLButtonElement} */
  const pingButton = document.querySelector('#ping');
  pingButton.onclick = () => {
    if (connected) {
      const salt = `${Math.random()}`;
      console.log(new Date(), 'Sending', salt);
      socket.send(JSON.stringify({
        action: 'sendmessage',
        target: 'server',
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
setInterval(updateTimer, 1000);
