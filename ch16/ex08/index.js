const GITHUB_REPOS_API_URL =
  "https://api.github.com/repos/MinamiTaga/js-exsercises";
// token作成手順
// https://qiita.com/Glaceon_SNR11/items/0a556951bc8ad7554ea5
const TOKEN = process.env.GITHUB_TOKEN;
const headers = {
  Authorization: `Bearer ${TOKEN}`,
  "Content-Type": "application/json",
  Accept: "application/vnd.github.v3+json",
};

// Issue を作成できる
// https://docs.github.com/ja/rest/issues/issues?apiVersion=2022-11-28#create-an-issue
async function createIssue(title, body) {
  try {
    const response = await fetch(`${GITHUB_REPOS_API_URL}/issues`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        title,
        body,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.log(title, body);
      console.log(response);
      throw new Error(data.message);
    }

    console.log("Success to create issue", data.html_url);
  } catch (e) {
    console.log(e.message);
  }
}

// 指定した Issue をクローズできる
// https://docs.github.com/ja/rest/issues/issues?apiVersion=2022-11-28#update-an-issue
async function closeIssue(number) {
  try {
    const response = await fetch(`${GITHUB_REPOS_API_URL}/issues/${number}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        state: "closed",
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    console.log("Success to close issue", data.html_url);
  } catch (e) {
    console.log(e.message);
  }
}

// オープンな Issue の Id と Title の一覧を表示できる
async function getOpenIssues() {
  try {
    const response = await fetch(`${GITHUB_REPOS_API_URL}/issues?state=open`, {
      method: "GET",
      headers,
    });

    const data = await response.json();
    if (!response.ok) {
      console.log(response);
      throw new Error(data.message);
    }

    data.forEach((issue) => {
      console.log(`#${issue.id}: ${issue.title}`);
    });
  } catch (e) {
    console.log(e.message);
  }
}

// 入力はコマンドライン引数から受け取る
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "create":
    createIssue(args[1], args[2]);
    break;
  case "close":
    closeIssue(args[1]);
    break;
  case "list":
    getOpenIssues();
    break;
  case "-h":
  case "--help":
    console.log(`Usage: node index.js [options] [arguments]

      optionis:

        create  issueを作成します。
                arguments: [title] [body]

        close   issueをクローズします。 
                arguments: [issue number]

        list    オープンな Issue の Id と Title の一覧を表示します。
      `);
  default:
    console.log("使い方は -h からヘルプを確認してください");
}

// -vまたは--verboseオプションで HTTP ログを出力する
// ↑これまだ対応できてない
