import { app } from "./index.js";

export function listening() {
  app.listen(8000, () => {
    console.log("Listening on port", 8000);
  });
}

// listenを分離することでテストがちゃんと動くようになった
// https://stackoverflow.com/questions/53935108/jest-did-not-exit-one-second-after-the-test-run-has-completed-using-express
