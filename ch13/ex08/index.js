import * as fs from "node:fs";
import { join } from "node:path";

export async function fetchFirstFileSize2(path) {
  try {
    const files = await fs.readdir(path);
    if (files.length === 0) {
      return null;
    }
    const stats = await fs.stat(join(path, files[0]));
    return stats.size;
  } catch (e) {
    console.log(e);
  }
}


export function fetchFirstFileSize(path, callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }
    if (files.length === 0) {
      callback(null, null);
      return;
    }

    fs.stat(join(path, files[0]), (err, stats) => {
      if (err) {
        callback(err);
        return;
      }
      callback(null, stats.size);
    });
  });
}
export async function fetchSumOfFileSizes2(path, callback) {
  let total = 0;
  let rest = [];

  try {
    const files = await fs.readdir(path);
    rest = [...files]
    iter();
  } catch (e) {
    console.log(e);
  }

  async function iter() {
    if (rest.length === 0) {
      callback(null, total);
      return;
    }

    const next = rest.pop();
    try {
      const stats = await fs.stat(join(path, next))
      total += stats.size;
      iter();
    } catch (e) {
      callback(e);
    }
  }
}


export function fetchSumOfFileSizes(path, callback) {
  fs.readdir(path, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    let total = 0;
    const rest = [...files];

    function iter() {
      if (rest.length === 0) {
        callback(null, total);
        return;
      }

      const next = rest.pop();
      fs.stat(join(path, next), (err, stats) => {
        if (err) {
          callback(err);
          return;
        }
        total += stats.size;
        iter();
      });
    }
    iter();
  });
}