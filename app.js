"use strict";
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
let display = document.querySelector(".display");
let arr = [];
let answer = "1978"

function keyClick(number) {
    if (arr.length < 4) {
        padChange(number);
        updateDisplay();
        console.log(arr);
    }
}
function padChange(numberPad) {
    arr.push(numberPad);
}
function deleteNumber() {
    arr.pop();
    updateDisplay();
}
function submitNumber() {
    if (arr.join("") === answer) {
        display.style.color = "#6DDE1A"
        setTimeout(() => {
            resetDisplay()
        }, 2000)
    }
    else {
        display.style.color = "red"
        setTimeout(() => {
            resetDisplay()
        }, 2000)
    }
}

function resetDisplay() {
    display.style.color = "white"
    arr = [];
    updateDisplay();
}

function updateDisplay() {
    display.innerHTML = `
  <p class="first">${arr[0] || "-"}</p>
              <p class="second">${arr[1] || "-"}</p>
              <p class="third">${arr[2] || "-"}</p>
              <p class="fourth">${arr[3] || "-"}</p>
  `;
}
updateDisplay();
