import { escapeSequence, escapeSequence2 } from ".";

describe (escapeSequence, () => {
  it ('returns escape sequesnce', (() => {
    expect(escapeSequence('\u0000')).toEqual('\0');
    expect(escapeSequence('\u0008')).toEqual('\b');
    expect(escapeSequence('\u0009')).toEqual('\t');
    expect(toString(escapeSequence('\u000A'))).toEqual(toString('\n'));
    expect(toString(escapeSequence('\u000B'))).toEqual(toString('\v'));
    expect(toString(escapeSequence('\u000C'))).toEqual(toString('\f'));
    expect(toString(escapeSequence('\u000D'))).toEqual(toString('\r'));
    expect(toString(escapeSequence('\u0022'))).toEqual(toString('\"'));
    expect(toString(escapeSequence('\u0027'))).toEqual(toString('\''));
  
  }))
})

describe (escapeSequence2, () => {
  it ('returns escape sequesnce', (() => {
  expect(escapeSequence2('\u0000')).toEqual('\0');
  expect(escapeSequence2('\u0008')).toEqual('\b');
  expect(escapeSequence2('\u0009')).toEqual('\t');
  expect(toString(escapeSequence2('\u000A'))).toEqual(toString('\n'));
  expect(toString(escapeSequence2('\u000B'))).toEqual(toString('\v'));
  expect(toString(escapeSequence2('\u000C'))).toEqual(toString('\f'));
  expect(toString(escapeSequence2('\u000D'))).toEqual(toString('\r'));
  expect(toString(escapeSequence2('\u0022'))).toEqual(toString('\"'));
  expect(toString(escapeSequence2('\u0027'))).toEqual(toString('\''));
  }))
})
