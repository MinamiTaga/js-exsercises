import fs from "fs";

fs.truncate("./ch16/ex06/hello.txt", 10, () => {});

// VScodeからは０では無く小さなNULが追加されているように見えた
// HexEditorで開くと00が追加されているのが見えた
