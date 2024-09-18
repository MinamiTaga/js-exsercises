// gemma2:2bは起動できますが、結果として、エラーが発生しました。
document.addEventListener("DOMContentLoaded", () => {
  const chatContainer = document.querySelector("#chat-container");
  const inputBox = document.querySelector("#input-box");
  const sendButton = document.querySelector("#send-button");

  sendButton.addEventListener("click", async () => {
    const userMessage = inputBox.value.trim();
    if (userMessage === "") return;

    // ユーザーメッセージを表示
    displayMessage(userMessage, "user");

    // API リクエストを送信
    const response = await getResponse(userMessage);
    displayMessage(response, "ai");

    // 入力ボックスをクリア
    inputBox.value = "";
    chatContainer.scrollTop = chatContainer.scrollHeight; // スクロールを一番下にする
  });

  async function getResponse(message) {
    try {
      const response = await fetch("http://localhost:11434/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gemma2:2b",
          mode: "cors",
          messages: [{ role: "user", content: message }],
        }),
      });

      if (!response.ok) {
        console.error(response);
        return e;
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let result = "";
      let done = false;

      while (!done) {
        const { done: readerDone, value } = await reader.read();
        done = readerDone;

        if (value) {
          const { done: decodeDone, message } = JSON.parse(
            decoder.decode(value)
          );
          if (decodeDone) {
            break;
          }
          result += message?.content;
        }
      }
      return result;
    } catch (e) {
      console.error(e.status);
      return e;
    }
  }

  function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}-message`;
    messageElement.textContent = message;
    chatContainer.appendChild(messageElement);
  }
});
