// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
// 1セルのサイズ
const RESOLUTION = 10;

const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

canvas.width = ROWS * RESOLUTION;
canvas.height = COLS * RESOLUTION;

// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame が返す ID
let animationId = null;

// NOTE: download from https://soundeffect-lab.info/sound/button/mp3/decision1.mp3
const sound = new Audio("/ch15.04-10/ex10/decision1.mp3");

// ライフゲームのセル (true or false) をランダムに初期化する
let grid = new Array(ROWS)
  .fill(null)
  .map(() =>
    new Array(COLS).fill(null).map(() => !!Math.floor(Math.random() * 2))
  );

const socket = new WebSocket("ws://localhost:3003/");

function sendRequest(request) {
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(request);
  } else {
    socket.addEventListener("open", () => {
      socket.send(request);
    });
  }
}

//  メッセージ受信
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === "update") {
    renderGrid(data.grid);
  } else if (data.type === "start") {
    startButton.setAttribute("disable", true);
    pauseButton.removeAttribute("disable");
  } else if (data.type === "pause") {
    pauseButton.setAttribute("disable", true);
    startButton.removeAttribute("disable");
  }
};

//  切断
socket.onclose = () => {
  console.log("websocketの切断");
};

// grid を canvas に描画する
function renderGrid(grid) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}

// canvas がクリックされたときの処理 (セルの値を反転する)
canvas.addEventListener("click", function (evt) {
  const rect = canvas.getBoundingClientRect();
  const pos = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };

  const row = Math.floor(pos.y / RESOLUTION);
  const col = Math.floor(pos.x / RESOLUTION);
  grid[row][col] = !grid[row][col];
  sound.cloneNode().play();
  sendRequest(JSON.stringify({ type: "toggle", row, col }));
});

// requestAnimationFrame によって一定間隔で更新・描画を行う
// NOTE: リフレッシュレートの高い画面では速く実行される (これを防ぐ場合は下記の例を参照)
// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame
function update() {
  grid = updateGrid(grid);
  renderGrid(grid);
  animationId = requestAnimationFrame(update);
}

startButton.addEventListener("click", () => {
  // 既にアニメーションが動いている場合は何もしない
  // if (animationId) {
  //   return;
  // }
  sendRequest(JSON.stringify({ type: "start" }));
});

pauseButton.addEventListener("click", () => {
  sendRequest(JSON.stringify({ type: "pause" }));
});

renderGrid(grid);
