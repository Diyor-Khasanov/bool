let a = parseFloat(prompt("Son kiriting"));
let b = parseFloat(prompt("Son kiriting"));
let c = parseFloat(prompt("Son kiriting"));

if (
  a === 1 / b ||
  a === 1 / c ||
  b === 1 / a ||
  b === 1 / c ||
  c === 1 / a ||
  c === 1 / b
) {
  console.log(true);
} else {
  console.log(false);
}
