let longestWord = "";
let longestWordFind = (str) => {
  if (str.trim().length === 0) {
    return false;
  }

  let stringArr = str.split(" ");
  console.log(stringArr);

  longestWord=stringArr[0];
  for (let i = 0; i < stringArr.length; i++) {
    if (longestWord.length < stringArr[i].length) {
      longestWord = stringArr[i];
      console.log(longestWord);
    }
  }
  return longestWord;
};

console.log(
  "The longest word in the string is: ",
  longestWordFind("I am practicing the javascriptnodeexpress for the 100 days.")
);
