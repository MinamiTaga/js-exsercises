document.querySelector("#button").addEventListener("click", async () => {
  const token = document.querySelector("#accessTokenArea").value;
  const file = document.querySelector("#fileUploadArea").files[0];
  console.log(token + file);

  // どちらかがなかったらエラー
  if (!token || !file) {
    alert("必要項目の入力をしてください");
  }

  const url = `https://graph.microsoft.com/v1.0/me/drive/root:/document/${file.name}:/content`;
  const options = {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain",
    },
    body: file,
  };
  const response = await fetch(url, options);

  if (await !response.ok) {
    new Error("アップロード失敗");
  }

  return await response.json();
});
