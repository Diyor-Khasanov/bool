let a = parseFloat(prompt("Son kiriting"));
let b = parseFloat(prompt("Son kiriting"));

if (a % 2 === 1 && b % 2 === 1) {
  console.log(false);
} else if (a % 2 === 1) {
  console.log(true);
} else if (b % 2 === 1) {
  console.log(true);
} else {
  console.log(false);
}
