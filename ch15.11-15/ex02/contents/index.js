const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

async function retryWithExponentialBackoff(url, options) {
  let retryCount = 0;
  const maxRetry = 3;

  async function retry() {
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return response;
      } else if (retryCount < maxRetry) {
        retryCount++;
        setTimeout(retry, Math.pow(2, retryCount) * 1000);
      } else {
        // リトライ上限超え
        throw new Error(response);
      }
    } catch (e) {
      alert(e);
    }
  }

  retry();
}

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
});

form.addEventListener("submit", async (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault();
  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  try {
    const response = await retryWithExponentialBackoff("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ name: todo }),
    });
    const task = await response.json();
    appendToDoItem(task);
  } catch (e) {
    alert(e);
  }
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.addEventListener("change", async () => {
    try {
      const response = await retryWithExponentialBackoff(
        `/api/tasks/${task.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            status: toggle.checked ? "completed" : "active",
          }),
        }
      );
      const updatedTask = await response.json();
      label.style.textDecorationLine =
        updatedTask.status === "completed" ? "line-through" : "none";
    } catch (e) {
      toggle.checked = !toggle.checked;
      alert(e);
    }
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい
  destroy.addEventListener("click", async () => {
    try {
      await retryWithExponentialBackoff(`/api/tasks/${task.id}`, {
        method: "DELETE",
      });
      list.removeChild(elem);
    } catch (e) {
      alert(e);
    }
  });
  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}
