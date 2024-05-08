export function withResource(resouce, callback) {
  try {
    callback(resouce);
  } finally {
    resouce.close();
  }
}
