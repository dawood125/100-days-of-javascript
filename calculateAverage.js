const calculateAverage = (arr) => {
  if (arr.length === 0) {
    return false;
  }

  let sum = arr.reduce((acc, curr) => {
    console.log(acc + curr);
    return acc + curr;
  });

  return sum / arr.length;
};

console.log(calculateAverage([5, 10, 2, 8]));
