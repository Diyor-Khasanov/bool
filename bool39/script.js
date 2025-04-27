function queenMove(x1, y1, x2, y2) {
  return rookMove(x1, y1, x2, y2) || bishopMove(x1, y1, x2, y2);
}

console.log(queenMove(1, 1, 1, 5));
console.log(queenMove(1, 1, 5, 5));
console.log(queenMove(1, 1, 5, 6));
