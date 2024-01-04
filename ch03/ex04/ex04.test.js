describe('Hundred Points Symbolのutf-16コードポイント表現', () => {
  const utf16 = "\uD83D\uDCAF";

  it('💯と等しい', () => {
    expect(utf16).toBe('💯');
  })
})

describe('Hundred Points Symbolのutf-32コードポイント表現', () => {
  const utf32 = "\u{0001F4AF}";

  it('💯と等しい', () => {
    expect(utf32).toBe('💯');
  })
})