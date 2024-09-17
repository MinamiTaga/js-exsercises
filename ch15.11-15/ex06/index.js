const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

// localstrageにデータがあれば表示する
const keys = window.sessionStorage ? Object.keys(window.sessionStorage) : [];
const tasks = keys.map((key) => window.sessionStorage.getItem(key));
tasks.forEach((task) => appendTask(JSON.parse(task)));

form.addEventListener("submit", (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  // formの送信操作をするとリロードで画面が真っ白になってしまう
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  // new-todo の中身は空にする
  input.value = "";
  const id = nextTaskID();
  const task = {
    id,
    name: todo,
    status: "active",
  };
  console.log(id);
  window.sessionStorage.setItem(id, JSON.stringify(task));
  appendTask(task);
});

function nextTaskID() {
  if (!window.sessionStorage?.getItem("id")) {
    window.sessionStorage.setItem("id", "1");
    return 1;
  }
  const id = parseInt(window.sessionStorage.getItem("id")) + 1;
  window.sessionStorage.setItem("id", id);
  console.log(window.sessionStorage.getItem("id"));
  // console.log(num);

  return id;
}

// ここアロー関数にするとinitialize前に読み込めないみたいなエラーが出た
function appendTask(task) {
  // idのカラムはスキップ
  if (!task.name) {
    return;
  }
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const div = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine =
    task.status === "completed" ? "line-through" : "none";

  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に label.style.textDecorationLine を変更しなさい
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";
  toggle.addEventListener("change", () => {
    const updateTask = { ...task };
    updateTask.status = toggle.checked ? "completed" : "active";
    window.sessionStorage?.setItem(updateTask.id, JSON.stringify(updateTask));
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に elem を削除しなさい
  destroy.textContent = "❌";

  destroy.addEventListener("click", () => {
    window.sessionStorage?.removeItem(task.id);
    list.removeChild(elem);
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(div);
  list.prepend(elem);
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
}
