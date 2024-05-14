export function isEmailAddress(email) {
  if (!email) return false;

  const splitEmail = email.split(/@/);
  if (splitEmail.length !== 2) return false;

  const localPart = splitEmail[0];
  const domain = splitEmail[1];

  if (
    !localPart ||
    localPart.length > 64 ||
    localPart.match(/^\./) ||
    localPart.match(/\.$/)
  ) {
    return false;
  }

  if (
    !domain ||
    domain.match(/^\./) ||
    domain.match(/\.$/)
  ) {
    return false;
  }

  if (
    email.length > 254 ||
    email.match(/\.{2}/) ||
    email.match(/\(/) ||
    email.match(/\)/) ||
    email.match(/</) ||
    email.match(/>/) ||
    email.match(/\[/) ||
    email.match(/\]/) ||
    email.match(/:/) ||
    email.match(/;/) ||
    email.match(/,/) ||
    email.match(/\\/) ||
    email.match(/"/) ||
    email.match(/ /) ||
    !isASCII(email)
  ) {
    return false;
  }

  return true;
}

// あいうえおの排除
function isASCII(str) {  
  for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) > 127) {
        console.log(str.charCodeAt(i))
          return false;
      }
  }
  return true;
}