
export const escapeSequence = (str) => {
  if (str.includes('\u0000')) {
    return str.replace(/\u0000/g, '\0');
  } else if (str.includes('\u0008')) {
    return str.replace(/\u0008/g, '\b');
  } else if (str.includes('\u0009')) {
    return str.replace(/\u0009/g, '\t');
  } else if (str.includes('\u000A')) {
    return str.replace(/\u000A/g, '\n');
  } else if (str.includes('\u000B')) {
    return str.replace(/\u000B/g, '\v');
  } else if (str.includes('\u000C')) {
    return str.replace(/\u000C/g, '\f');
  } else if (str.includes('\u000D')) {
    return str.replace(/\u000D/g, '\r');
  } else if (str.includes('\u0022')) {
    return str.replace(/\u0022/g, '\"');
  } else if (str.includes('\u0027')) {
    return str.replace(/\u0027/g, '\'');
  } else if (str.includes('\u005C')) {
    return str.replace(/\u005C/g, '\\');
  }
};

// これできてない
export const escapeSequence2 = (str) => {
  switch (str) {
    case str.includes('\u0000'):
      return str.replace(/\u0000/g, '\0');
    case str.includes('\u0008'):
      return str.replace(/\u0008/g, '\b');
    case str.includes('\u0009'):
      return str.replace(/\u0009/g, '\t');
    case str.includes('\u000A'):
      return str.replace(/\u000A/g, '\n');
    case str.includes('\u000B'):
      return str.replace(/\u000B/g, '\v');
    case str.includes('\u000C'):
      return str.replace(/\u000C/g, '\f');
    case str.includes('\u000D'):
      return str.replace(/\u000D/g, '\r');
    case str.includes('\u0022'):
      return str.replace(/\u0022/g, '\"');
    case str.includes('\u0027'):
      return str.replace(/\u0027/g, '\'');
    case str.includes('\u005C'):
      return str.replace(/\u005C/g, '\\');
  }
};