let sortAsending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

console.log(sortAsending([3, 4, 5, 2, 6]));
console.log(typeof sortAsending([2]));
