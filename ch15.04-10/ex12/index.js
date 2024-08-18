const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");
const template = document.querySelector("#todo-template");

// { content: "...", completed: true or false } の配列
const todos = [];

function renderTodos(todos) {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const clone = template.content.cloneNode(true);
    const li = clone.querySelector("li");
    const toggle = clone.querySelector("input");
    const label = clone.querySelector("label");
    const destroy = clone.querySelector("button");

    li.classList.toggle("completed", todo.completed);
    toggle.addEventListener("change", () => {
      todo.completed = toggle.checked;
      renderTodos(todos);
    });
    label.textContent = todo.content;
    toggle.checked = todo.completed;
    destroy.addEventListener("click", () => {
      todos.splice(index, 1);
      renderTodos(todos);
    });

    list.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() === "") {
    return;
  }
  const todo = input.value.trim();
  input.value = "";

  todos.push({ content: todo, completed: false });
  renderTodos(todos);
});

document.querySelector("#all").addEventListener("click", (e) => {
  e.preventDefault();
  window.history.pushState(null, "", "/ch15.04-10/ex12/all");
  renderTodos(todos);
});

document.querySelector("#active").addEventListener("click", (e) => {
  e.preventDefault();
  window.history.pushState(null, "", "/ch15.04-10/ex12/active");
  renderTodos(todos.filter((todo) => !todo.completed));
});

document.querySelector("#completed").addEventListener("click", (e) => {
  e.preventDefault();
  window.history.pushState(null, "", "/ch15.04-10/ex12/completed");
  renderTodos(todos.filter((todo) => todo.completed));
});

// Active や Completed を選択後にブラウザのリロードを行うとどうなるだろうか。hashchange と pushState それぞれの実装について調べなさい (ヒント: 開発者ツールでどのような通信が発生しているか調べてみなさい)。
// hashchange → 追加したリストが空になる （http://localhost:3000/ch15.04-10/ex11/　へのGETリクエストが行われている）
// pushState → 404になる（http://localhost:3000/ch15.04-10/ex12/completed　へのGETリクエストが行われている）

// ここまでの例は serve コマンドで HTML や JS といったファイル配信するサーバーを立ち上げてきた。 サーバー側がどのような挙動をすれば pushState を使った実装が期待通り動作するか考えて答えなさい。
//　ch15.04−10/ 以下のどこにいたとしても ch15.04−10/index.html にリクエストを送るようにする。
