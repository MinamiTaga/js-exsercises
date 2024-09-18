const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const DB_NAME = "db";
const STORE_NAME = "storeName";
let beforeTaskId = "";

// indexedDB
function withDB(callback) {
  const request = indexedDB.open(DB_NAME, 1); // データベースの v1 をリクエスト
  request.onerror = console.error; // エラーログ
  request.onsuccess = () => {
    const db = request.result;
    callback(db);
  }; // 成功したら実行

  // データベースがまだ存在していなかったら初期化
  request.onupgradeneeded = () => {
    const store = request.result.createObjectStore(STORE_NAME, {
      keyPath: "id",
      autoIncrement: true,
    });
    store.createIndex("name", "status");
  };
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // 両端からホワイトスペースを取り除いた文字列を取得する
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  // new-todo の中身は空にする
  input.value = "";
  const id = !beforeTaskId ? 1 : beforeTaskId + 1;
  beforeTaskId++;
  const task = {
    id,
    name: todo,
    status: "active",
  };

  withDB((db) => {
    const transaction = db.transaction(STORE_NAME, "readwrite");
    const store = transaction.objectStore(STORE_NAME);
    store.add(task);
    // transaction.oncomplete = () => {
    //   appendTask(task);
    // };
  });

  appendTask(task);
});

function nextTaskID() {
  const transaction = db.transaction(STORE_NAME, "readwrite");
  const store = transaction.objectStore(STORE_NAME);
  store.getItem();
  if (!window.localStorage?.getItem("id")) {
    window.localStorage.setItem("id", "1");
    return 1;
  }
  const id = parseInt(window.localStorage.getItem("id")) + 1;
  window.localStorage.setItem("id", id);
  console.log(window.localStorage.getItem("id"));
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
    window.localStorage?.setItem(updateTask.id, JSON.stringify(updateTask));
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に elem を削除しなさい
  destroy.textContent = "❌";

  destroy.addEventListener("click", () => {
    withDB((db) => {
      const transaction = db.transaction(STORE_NAME, "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      store.delete(id);
    });
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(div);
  list.prepend(elem);
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
}

// ToDo を indexedDB から読み込む
function load(callback) {
  withDB((db) => {
    const transaction = db.transaction(DB_NAME, "readonly");
    const store = transaction.objectStore(DB_NAME);
    const request = store.getAll();
    request.onsuccess = () => {
      callback(request.result);
    };
  });
}

function loadAndRender() {
  load((tasks) => {
    list.innerHTML = "";
    tasks.forEach(appendTask(task));
  });
}
loadAndRender();
