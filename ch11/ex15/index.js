export function modifyUrl({base, addQuery = [], path}) {

  if (typeof base !== "string" || !base.startsWith("https://")) {
    throw new Error("Invalid base URL format");
  }

  const url = new URL(base);

  // pathがあれば追加
  if(path) {
    url.pathname = path;
  }

  // クエリを追加
  for (const [key, value] of addQuery) {
    url.searchParams.append(key, value);
  }

  return url.toString();
}