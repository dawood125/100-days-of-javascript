let checkTriangleType = (a, b, c) => {
  if (a <= 0 || b <= 0 || c <= 0) {
    return "Invalid triangle sides.";
  }

  if (!(a + b > c) || !(b + c > a) || !(c+a>b)) {
    return "Invalid triangle sides.";
  }

  if (a == b && b == c) {
    console.log("It is a Equilateral Triangle");
    return true;
  } else if (a == b || a == c) {
    console.log("It is a isoceles Triangle");
    return true;
  } else {
    console.log("It is a scalene Triangle");
    return true;
  }
};

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(3, 4, 5));
