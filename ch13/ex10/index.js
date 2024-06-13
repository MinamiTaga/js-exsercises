import * as fsPromises from 'node:fs/promises'
import { join } from "node:path";

export async function fetchSumOfFileSizesPA(path, callback) {
  let sizes = [];
  try {
    const files = await fsPromises.readdir(path)
    const rest = [...files];

    sizes = await Promise.all(
      rest.map((file) => {
        return fsPromises.stat(join(path, file)).size;
      })
    )

  } catch (e) {
    callback(e);
    return;
  }

  const total = sizes.reduce((acc, size) => acc + size, 0);

  callback(null, total);
}
