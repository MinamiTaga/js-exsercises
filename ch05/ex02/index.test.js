import { escapeSequence, escapeSequence2 } from ".";

describe (escapeSequence, () => {
  it ('returns escape sequesnce', (() => {
    expect(escapeSequence('adish\u0000djicojsidchos\u0000abcacb')).toEqual('adish\u0000djicojsidchos\0abcacb');
    expect(escapeSequence('adishdjicojsidchos\u0008abcacb')).toEqual('adishdjicojsidchos\babcacb');
    expect(escapeSequence('adishdjicojsidchos\u0009abcacb')).toEqual('adishdjicojsidchos\tabcacb');
    expect(escapeSequence('adishdjicojsidchos\u000Aabcacb')).toEqual('adishdjicojsidchos\nabcacb');
    expect(escapeSequence('adishdjicojsidchos\u000Babcacb')).toEqual('adishdjicojsidchos\vabcacb');
    expect(escapeSequence('adishdjicojsidchos\u000Cabcacb')).toEqual('adishdjicojsidchos\fabcacb');
    expect(escapeSequence('adishdjicojsidchos\u000Dabcacb')).toEqual('adishdjicojsidchos\rabcacb');
    expect(escapeSequence('adishdjicojsidchos\u0022abcacb')).toEqual('adishdjicojsidchos\"abcacb');
    expect(escapeSequence('adishdjicojsidchos\u0027abcacb')).toEqual('adishdjicojsidchos\'abcacb');
  
  }))
})
describe (escapeSequence2, () => {
  it ('returns escape sequesnce', (() => {
    expect(escapeSequence2('adish\u0000djicojsidchos\u0000abcacb')).toEqual('adish\u0000djicojsidchos\0abcacb');
    expect(escapeSequence2('adishdjicojsidchos\u0008abcacb')).toEqual('adishdjicojsidchos\babcacb');
    expect(escapeSequence2('adishdjicojsidchos\u0009abcacb')).toEqual('adishdjicojsidchos\tabcacb');
    expect(escapeSequence2('adishdjicojsidchos\u000Aabcacb')).toEqual('adishdjicojsidchos\nabcacb');
    expect(escapeSequence2('adishdjicojsidchos\u000Babcacb')).toEqual('adishdjicojsidchos\vabcacb');
    expect(escapeSequence2('adishdjicojsidchos\u000Cabcacb')).toEqual('adishdjicojsidchos\fabcacb');
    expect(escapeSequence2('adishdjicojsidchos\u000Dabcacb')).toEqual('adishdjicojsidchos\rabcacb');
    expect(escapeSequence2('adishdjicojsidchos\u0022abcacb')).toEqual('adishdjicojsidchos\"abcacb');
    expect(escapeSequence2('adishdjicojsidchos\u0027abcacb')).toEqual('adishdjicojsidchos\'abcacb');
  
  }))
})
