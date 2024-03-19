export function reverse(str) {
  // 最小の描画単位に分割
  const segmenter = new Intl.Segmenter('ja-JP', { granularities: ['grapheme'] });
  // 配列に入れていく
  const reversedSegments = Array.from(segmenter.segment(str), ({ segment }) => segment).reverse();
  return reversedSegments.join('');
}
