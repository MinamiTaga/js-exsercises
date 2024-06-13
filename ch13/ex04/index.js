import * as fs from "node:fs";
import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

export async function fetchFirstFileSizePromises(path, callback) {

    try {
      const files = await fsPromises.readFile(path);
      if (files.length === 0) {
        callback(null, null);
      };
      const stat = await fsPromises.stat(join(path, files))
      return stat.size;
    } catch (e) {
      callback(e);
    }
}

export async function fetchSumOfFileSizesPromises(path, callback) {
  let total = 0;
  let files;
  let rest = [];

  try {
    files = await fsPromises.readdir(path)
    rest = [...files];
  } catch (e) {
    callback(e);
  }

  async function iter() {
    if (rest.length === 0) {
      callback(null, total);
      return;
    }
    const next = rest.pop();

    try {
      const stats = await fsPromises.stat(join(path, next));

      total += stats.size;
      iter();
    } catch(e) {
      callback(e)
    }
  }
  iter()
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