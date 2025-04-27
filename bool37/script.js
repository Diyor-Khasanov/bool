function kingMove(x1, y1, x2, y2) {
  return Math.abs(x1 - x2) <= 1 && Math.abs(y1 - y2) <= 1;
}

console.log(kingMove(4, 4, 5, 5));
console.log(kingMove(4, 4, 6, 4));
