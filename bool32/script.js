function isRightTriangle(a, b, c) {
  let sides = [a, b, c].sort((x, y) => x - y);
  let [x, y, z] = sides;

  return x * x + y * y === z * z;
}

console.log(isRightTriangle(3, 4, 5));
console.log(isRightTriangle(5, 12, 13));
console.log(isRightTriangle(2, 2, 3));
