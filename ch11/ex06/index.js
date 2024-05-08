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
    domain.length > 252 ||
    domain.match(/^\./) ||
    domain.match(/\.$/)
  ) {
    return false;
  }

  if (
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
    email.match(/ /)
    // email.match(/^[^\x01-\x7E\uFF61-\uFF9F]+$/) // 全角チェックできてない
  ) {
    return false;
  }

  return true;
}
