const findMax = (arr) => {
  let maxNum=arr.reduce((acc, curr) => {
    console.log(acc, curr);
    if (acc > curr) {
      return acc;
    }else{
        return curr;
    }
  });

  return maxNum;
};

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([-10, -5, -3, -9, -2]));
console.log(findMax([5]));
