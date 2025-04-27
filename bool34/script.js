function isWhiteSquare(x, y) {
  return (x + y) % 2 === 1;
}

console.log(isWhiteSquare(1, 1));
console.log(isWhiteSquare(1, 2));
