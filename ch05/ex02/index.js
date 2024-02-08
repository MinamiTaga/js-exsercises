
export const escapeSequence = (str) => {
  if (str === '\u0000') {
    return '\0';
  } else if (str === '\u0008') {
    return '\b';
  } else if (str = '\u0009') {
    return '\t';
  } else if (str = '\u000A') {
    return '\n';
  } else if (str === '\u000B') {
    return '\v';
  } else if (str === '\u000C') {
    return '\f';
  } else if (str === '\u000D') {
    return '\r';
  } else if (str === '\u0022') {
    return '\"';
  } else if (str === '\u0027') {
    return '\'';
  } else if (str === '\u005C') {
    return '\\';
  }
};

export const escapeSequence2 = (str) => {
  switch (str) {
    case '\u0000':
      return '\0';
    case '\u0008':
      return '\b';
    case '\u0009':
      return '\t';
    case '\u000A':
      return '\n';
    case '\u000B':
      return '\v';
    case '\u000C':
      return '\f';
    case '\u000D':
      return '\r';
    case '\u0022':
      return '\"';
    case '\u0027':
      return '\'';
    case '\u005C':
      return '\\';
  }
};