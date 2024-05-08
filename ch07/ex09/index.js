const yoshi = "𠮷野家";
const fam = "👨‍👨‍👧‍👧";
// 最小の描画単位に分割
const segmenter = new Intl.Segmenter("ja-JP", { granularities: ["grapheme"] });
// 配列に入れていく
const Segments = Array.from(segmenter.segment(fam), ({ segment }) => segment);

console.log(yoshi[0]); // �
console.log(fam[0]); // �
console.log(Segments.length); // 1
console.log(Segments[0].codePointAt()); // 128104

// 文字列には配列のようにインデックスアクセスができる。
// 👨‍👨‍👧‍👧.length = 11
// 👨‍👨‍👧‍👧[0]は2バイトずつに切った０番目の要素なので文字化け
// 男大人は４バイト（男２バイト＋サロゲートペア）
// UTF-16コードユニットを返すため、サロゲートペアを含む文字は1つのインデックスでは正しく処理できない。
// https://gray-code.com/html_css/list-of-emoji/
