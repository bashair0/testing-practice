function caesarCipher (str, shift) {
  let output = ''

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {
    let ascii = str[i].charCodeAt()

    // Check if the character is a letter
    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      // Shift the letter by the shift amount, wrapping around the alphabet if necessary
      ascii += shift
      if ((ascii > 90 && str[i] <= 'Z') || ascii > 122) {
        ascii -= 26
      }
    }

    // Add the new character to the output string
    output += String.fromCharCode(ascii)
  }

  // Return the output string
  return output
}

module.exports = caesarCipher
