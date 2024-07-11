"use strict";
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
let display = document.querySelector(".display");
let arr = [];
function audioAnswer(answer) {
    const audioCorrect = document.querySelector("#correct");
    const audioWrong = document.querySelector("#wrong");
    if (answer === true) {
        audioCorrect === null || audioCorrect === void 0 ? void 0 : audioCorrect.play();
    }
    else {
        audioWrong === null || audioWrong === void 0 ? void 0 : audioWrong.play();
    }
}
function keyClick(number) {
    if (arr.length === 4) {
        console.log(arr.length);
        submitNumber();
        updateDisplay();
    }
    else {
        if (arr.length < 4) {
            padChange(number);
            updateDisplay();
        }
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
    if (arr.join("") === "1978") {
        audioAnswer(true);
        display.style.color = "#6DDE1A";
        setTimeout(() => {
            arr = [];
            display.style.color = "#ededed;";
            updateDisplay();
        }, 1000);
    }
    else {
        audioAnswer(false);
        display.style.color = "red";
        setTimeout(() => {
            arr = [];
            display.style.color = "#ededed;";
            updateDisplay();
        }, 1000);
    }
}
function updateDisplay() {
    display.innerHTML = `
  <p class="second">${!arr[0] ? "<div class='ball--empty'></div>" : "<div class='ball'></div>"}</p>
              <p class="second">${!arr[1]
        ? "<div class='ball--empty'></div>"
        : "<div class='ball'></div>"}</p>
              <p class="second">${!arr[2]
        ? "<div class='ball--empty'></div>"
        : "<div class='ball'></div>"}</p>
              <p class="second">${!arr[3]
        ? "<div class='ball--empty'></div>"
        : "<div class='ball'></div>"}</p>
  `;
}
updateDisplay();
