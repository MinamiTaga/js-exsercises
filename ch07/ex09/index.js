const yoshi = '𠮷野家';
const fam = '👨‍👨‍👧‍👧';

const segmenter = new Intl.Segmenter('ja-JP', { granularities: ['grapheme'] });
const segments = segmenter.segment(yoshi).join();

console.log(yoshi[0]) // �
console.log(fam[0]) // �

// 文字列には配列のようにインデックスアクセスができる。
// 👨‍👨‍👧‍👧.length =11
// 👨‍👨‍👧‍👧[0]は2バイトずつに切った０番目の要素なので文字化け
// 男大人は４バイト（男２バイト＋サロゲートペア）
// UTF-16コードユニットを返すため、サロゲートペアを含む文字は1つのインデックスでは正しく処理できない。