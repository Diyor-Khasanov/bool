function isInsideRectangle(x, y, x1, y1, x2, y2) {
  return x1 <= x && x <= x2 && y2 <= y && y <= y1;
}

console.log(isInsideRectangle(3, 4, 2, 5, 5, 2)); 
console.log(isInsideRectangle(6, 4, 2, 5, 5, 2)); 
