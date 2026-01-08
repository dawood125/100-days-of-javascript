let factorial = (n) => {
  if (n < 0) {
    return false;
  }

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *=  i;
    console.log(result);
  }

  return result;
};

console.log("The factorial of the number is", factorial(5));
