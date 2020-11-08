/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const DATA_URL = 'https://mmothello-data.s3.eu-central-1.amazonaws.com/px8x8';\n\nconst root = document.querySelector('#root');\nconst status = document.querySelector('#status');\n/** @type {HTMLDivElement} */\nconst timer = document.querySelector('#timer');\n\nfunction setStatus(stat) {\n  status.innerText = `Status: ${stat}`;\n}\n\nconst sessionLengthMs = 1000 * 60; // * 5;\n\nasync function init() {\n  /** @type {WebSocket} */\n  let socket;\n  let connected = false;\n\n  setInterval(() => {\n    if (socket && socket.bufferedAmount > 0) {\n      console.log('Buffered:', socket.bufferedAmount);\n    }\n  }, 100);\n\n  const reconnect = () => {\n    if (socket) {\n      socket.close();\n    }\n\n    setStatus('Connecting');\n    connected = false;\n    socket = new WebSocket(\"wss://qnrk3f4ghb.execute-api.eu-central-1.amazonaws.com/Prod?agent=foo\");\n    const localSocket = socket;\n    socket.onopen = function (event) {\n      setStatus('Connected');\n      connected = true;\n    };\n\n    socket.onmessage = (event) => {\n      // refresh(event.data);\n      if (socket === localSocket) {\n        const parsed = JSON.parse(event.data);\n        if (parsed.target === 'client') {\n          console.log('onmessage:', parsed);\n        }\n      }\n    }\n\n    socket.onerror = err => {\n      if (socket === localSocket) {\n        console.log('onerror', err);\n        console.warn('err', err);\n      }\n    }\n\n    socket.onclose = err => {\n      if (socket === localSocket) {\n        console.log('onclose', err);\n        setStatus('Disconnected');\n      }\n    }\n  };\n\n  let lastSessionId = null;\n  const transitionSession = () => {\n    // TODO only autoConnect if you made any moves last game\n    const now = Date.now();\n    const sessionId = now - (now % sessionLengthMs);\n    if (sessionId !== lastSessionId) {\n      reconnect();\n    }\n    lastSessionId = sessionId;\n  };\n\n  transitionSession();\n  setInterval(transitionSession, 1000);\n\n  /** @type {HTMLButtonElement} */\n  const pingButton = document.querySelector('#ping');\n  pingButton.onclick = () => {\n    if (connected) {\n      const salt = `${Math.random()}`;\n      console.log(new Date(), 'Sending', salt);\n      socket.send(JSON.stringify({\n        action: 'sendmessage',\n        target: 'server',\n        salt\n      }));\n\n    }\n  };\n}\n\ninit()\n  .catch(err => console.warn('Failed to init', err));\n\n\nconst timerBg = document.createElement('div');\ntimerBg.className = 'timerBg';\ntimer.appendChild(timerBg);\n\nconst timerLabel = document.createElement('p');\ntimer.appendChild(timerLabel);\n\nconst updateTimer = () => {\n  const now = Date.now();\n  const sessionId = now - (now % sessionLengthMs);\n  timerLabel.innerText = `Session ${sessionId}`;\n\n  const progress = (now % sessionLengthMs) * 100 / sessionLengthMs;\n  if (progress >= 90) {\n    timerBg.style.backgroundColor = 'red';\n  } else {\n    timerBg.style.backgroundColor = 'green';\n\n  }\n  timerBg.style.width = `${progress}%`;\n};\n\nupdateTimer();\nsetInterval(updateTimer, 1000);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });