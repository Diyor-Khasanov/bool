let a = parseFloat(prompt("Son kiriting"));
let b = parseFloat(prompt("Son kiriting"));
let c = parseFloat(prompt("Son kiriting"));

if ((a < b && a < c && b < c) || (a > b && a > c && b > c)) {
  console.log(true);
} else {
  console.log(false);
}
