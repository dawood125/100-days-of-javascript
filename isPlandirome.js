const isPlandirome = (str) => {
  let string = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  if (string.length === 0) return false;

  let left = 0;
  let right = string.length - 1;

  for (let i = 0; i < string.length / 2; i++) {
    if (string[left] === string[right] ) {
        left++;
        right--;
    } else {
      return false;
    }
  }

  return true;
};
console.log(isPlandirome("A man , a plan, a canal, Panama"));
console.log(isPlandirome("racecar"));
console.log(isPlandirome("hello"));
