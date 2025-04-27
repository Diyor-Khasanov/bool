function knightMove(x1, y1, x2, y2) {
  const dx = Math.abs(x1 - x2);
  const dy = Math.abs(y1 - y2);
  return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
}

console.log(knightMove(1, 1, 2, 3));
console.log(knightMove(1, 1, 3, 2)); 
console.log(knightMove(1, 1, 3, 3)); 
