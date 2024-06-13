import * as fs from "node:fs";
import * as fsPromises from "node:fs/promises";
import { join } from "node:path";

export async function fetchFirstFileSizePromises(path, callback) {

  fsPromises
    .readdir(path)
    .then((files) => {
      if (files.length === 0) {
        callback(null, null);
        return;
      }

      fsPromises
        .stat(join(path, files[0]))
        .then((stats) => callback(null, stats.size))
        .catch((err) => callback(err));
    })
    .catch((err) => callback(err));
}

export async function fetchSumOfFileSizesPromises(path, callback) {
  fsPromises
    .readdir(path)
    .catch((err) => callback(err))
    .then((files) => {
      let total = 0;
      const rest = [...files];

      function iter() {
        if (rest.length === 0) {
          callback(null, total);
          return;
        }

        const next = rest.pop();
      
        fsPromises
          .stat(join(path, next))
          .catch((err) => {
            callback(err);
            return;
          })
          .then((stats) => {
            total += stats.size;
            iter();
          });
      }
      iter();
    });
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