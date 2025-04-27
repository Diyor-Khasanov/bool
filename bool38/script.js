function bishopMove(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) === Math.abs(y1 - y2);
}

console.log(bishopMove(1, 1, 3, 3));
console.log(bishopMove(1, 1, 3, 4));
