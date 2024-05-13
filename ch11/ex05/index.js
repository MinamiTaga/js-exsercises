export function detectFileType(buffer) {

  const view = new DataView(buffer);
  // マジックバイトとファイル拡張子の対応のマップ
  const magicBytes = new Map([
    [[0x25, 0x50, 0x44, 0x46, 0x2d], "PDF"],
    [[0x50, 0x4b], "ZIP"],
    [[0x47, 0x49, 0x46, 0x38, 0x37, 0x61], "GIF"],
    [[0x47, 0x49, 0x46, 0x38, 0x39, 0x61], "GIF"],
    [[0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a], "PNG"],
  ]);

  for (const [bytes, fileType] of magicBytes) {
    let matched = true;
    for (let i = 0; i < bytes.length; i++) {
      if (view.getUint8(i) !== bytes[i]) {
        matched = false;
        break;
      }
    }
    if (matched) {
      return fileType;
    }
  }

  return "UNKNOWN";
}