export function reverse(str) {
  const segmenter = new Intl.Segmenter('ja-JP', { granularities: ['grapheme'] });
  const segments = segmenter.segment(str);
  const reversedSegments = Array.from(segments, ({ segment }) => segment).reverse();
  return reversedSegments.join('');
}