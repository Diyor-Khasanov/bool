function rookMove(x1, y1, x2, y2) {
  return x1 === x2 || y1 === y2;
}

console.log(rookMove(1, 1, 1, 5));
console.log(rookMove(1, 1, 5, 1));
console.log(rookMove(1, 1, 5, 5));
