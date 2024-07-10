"use strict";
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
let display = document.querySelector(".display");
let arr = ["-", "-", "-", "-"];
function keyClick(number) {
    arr.push(number);
    padChange(number);
    if (display instanceof HTMLDivElement) {
        display.innerHTML = `
  <p class="first">${arr[0]}</p>
              <p class="second">${arr[1]}</p>
              <p class="third">${arr[2]}</p>
              <p class="fourth">${arr[3]}</p>
  `;
    }
}
function padChange(numberPad) {
    arr[0] = numberPad;
}
console.log(arr[0]);
function deleteNumber() {
    console.log("delete character");
}
function submitNumber() {
    console.log("submit password");
}
