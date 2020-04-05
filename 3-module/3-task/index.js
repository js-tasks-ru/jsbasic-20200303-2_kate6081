/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
    return str
      .split('-') 
      .map(
        (word, index) => index == 0 ? word : word[0].toLowerCase() + word.slice(1)
      )
      .join('');
}
