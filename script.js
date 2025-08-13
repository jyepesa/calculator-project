let numChain = ""
let a = ""
let b = ""

function numInput(num) {
 const el = document.querySelector(
  ".display");
 numChain += num;
 el.innerText = numChain;
}

function clearDisp() {
 const el = document.querySelector(
  ".display");
 el.innerHTML = ''
 numChain = ''
}

function saveA() {
 a = numChain
}

function operation(op) {
 const el = document.querySelector(
  ".display");
 if (op === 1) {
  numChain += " + "
 } else if (op === 2) {
  numChain += " - ";
 } else if (op === 3) {
  numChain += " * "
 } else if (op === 4) {
  numChain += " / "
 }
 el.innerHTML = numChain;
}

function chain() {
 const ch = document.querySelector(
  ".chain");
 ch.innerHTML = numChain + " " +
  typeof numChain
}

function equal() {
 const el = document.querySelector(
  ".display");
 const solution = eval(numChain)
 numChain = solution
 numChain = numChain.toString();
 el.innerHTML = numChain
}

function decimal() {
 const el = document.querySelector(
  ".display");
 numChain += "."
 el.innerHTML = numChain;
}

function plusMinus() {
 const el = document.querySelector(
  ".display");
 const change = Number(numChain);
 numChain = change - (change * 2);
 numChain = numChain.toString();
 el.innerHTML = numChain;
}

function percent() {
 const el = document.querySelector(
  ".display");
 b = numChain.slice((a.length + 2),
  numChain.length);
 const result = (a / 100) * b;
 numChain = result;
 numChain = numChain.toString();
 el.innerHTML = numChain;
}

function sqRoot() {
 const el = document.querySelector(
  ".display");
 const int = Number(numChain);
 numChain = Math.sqrt(int);
 numChain = numChain.toString();
 el.innerHTML = numChain;
}
