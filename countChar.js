function countChar(str, char) {
  let count = 0;

  for (const ch of str) {
    console.log(ch);
    if (ch.trim().toLowerCase() === char.trim().toLowerCase()) {
      count++;
      console.log("Character found in string.");
    }
  }

  return count;
}

console.log(countChar("Dawood", "O"));

