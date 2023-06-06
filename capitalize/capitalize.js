/**
 * Capitalizes a string.
 * O(n)
 * @param {string} string
 * @returns {string}
 */
function capitalize(string) {
  let cap = true;
  let capitalized = '';

  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (/\s/.test(char)) {
      capitalized += char;
      if (!cap) cap = true;
      continue;
    }
    if (cap) {
      capitalized += char.toUpperCase();
      cap = false;
    } else {
      capitalized += char.toLowerCase();
    }
  }

  return capitalized;
}

export default capitalize;
