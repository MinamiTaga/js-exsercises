async function sendRequest(message) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket("ws://localhost:3003/");

    const id = 1;
    setTimeout(() => {
      reject(new Error("タイムアウト"));
    }, 3000);

    socket.send(JSON.stringify({ id, body: message }));

    // 受信
    socket.onmessage = (event) => {
      try {
        const response = JSON.parse(event.data.body);
        if ((response.id = id)) {
          resolve(response);
        }
      } catch (e) {
        reject(e);
      }
    };

    socket.onclose = () => {
      reject(new Error("WebSocketの切断"));
    };
  });
}

function receiveRequest() {
  const socket = new WebSocket("ws://localhost:3003/");
  socket.onmessage = (event) => {
    const response = JSON.parse(event.data.body);

    socket.send(
      JSON.stringify({
        id: response.id,
        message: `Hello, ${res.message}`,
      })
    );
  };
}

document.querySelector("#button1").addEventListener("click", async () => {
  const request = document.querySelector("#textBox1").value;
  const responseZone = document.querySelector(`#response1`);
  try {
    const response = await sendRequest(request);
    responseZone.textContent = response;
  } catch (e) {
    responseZone.textContent = e.message;
  }
});

document.querySelector("#button2").addEventListener("click", async () => {
  const request = document.querySelector("#textBox2").value;
  const responseZone = document.querySelector(`#response2`);
  try {
    const response = await sendRequest(request);
    responseZone.textContent = response;
  } catch (e) {
    responseZone.textContent = e.message;
  }
});

receiveRequest();
