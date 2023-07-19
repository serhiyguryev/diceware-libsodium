/**
 * @function createPassphrase
 * @param {object} word_list - A reference to the wordlist object (the demo script uses a EFF's Long Wordlist)
 * @param {number} passphrase_size - Passphrase size (word count)
 * @returns {string} Outputs the passphrase
 */
function createPassphrase(word_list, passphrase_size) {
  let numbers = '';

  for (let i = 0; i < passphrase_size * 5; i++) {
    numbers += sodium.randombytes_uniform(6) + 1;
  }

  let dice_rolls = numbers.match(/.{1,5}/g);
  let passphrase = [];

  for (let i = 0; i < passphrase_size; i++) {
    if (dice_rolls[i] in word_list) {
      passphrase.push(word_list[dice_rolls[i]]);
    }
  }

  return passphrase.join(' ');
}
