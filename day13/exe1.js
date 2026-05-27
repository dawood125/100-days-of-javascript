let numbers = [5, 12, 8, 130, 44, 3, 17, 29];

let Greaternumbers= numbers.filter((num)=> num>10);

let doubleNum=numbers.map((num)=> num * 2);

let findNum=numbers.find((num)=> num==130);

let sum=numbers.reduce((sum,num)=> sum+num,0);

console.log(Greaternumbers);
console.log(doubleNum);
console.log(findNum);
console.log(sum);