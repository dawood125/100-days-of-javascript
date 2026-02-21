const sumOfDigits = (num) => {
  if (num < 0) {
    console.log("Please pass a valid positive number");
    return;
  }
  let sum=0;
  while (num > 0) {
    let digit=num%10;
    sum+=digit;
    num=Math.floor(num/10);
  }

  return sum;
};

console.log(sumOfDigits(3243));
console.log(sumOfDigits(97987));
