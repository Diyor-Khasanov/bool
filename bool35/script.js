function isSameColor(x1, y1, x2, y2) {
  return (x1 + y1) % 2 === (x2 + y2) % 2;
}

console.log(isSameColor(1, 1, 2, 2));
console.log(isSameColor(1, 1, 2, 3));
