function firstNonRepeatedChar(str) {
 // Write your code here
	// const charCount = new Map();
	const charCount = new Map();

  // Count the characters in the string
  for (let char of str) {
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
