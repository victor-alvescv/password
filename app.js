"use strict";
const displayContent = document.querySelector(".display--content");
const deleteIcon = document.querySelector(".delete--icon");
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
function checkNumbers() {
    if (arr.length > 0) {
        const deleteIcon = document.querySelector(".delete--icon");
        deleteIcon.style.color = "#752dc7";
    }
    else if (arr.length === 0) {
        deleteIcon.style.color = "#ffffff1a";
    }
}
function keyClick(number) {
    if (arr.length < 4) {
        padChange(number);
        checkNumbers();
        updateDisplay();
    }
}
function padChange(numberPad) {
    arr.push(numberPad);
}
function deleteNumber() {
    arr.pop();
    updateDisplay();
    checkNumbers();
}
function submitNumber() {
    if (arr.join("") === "1978") {
        audioAnswer(true);
        const ball = document.querySelectorAll(".ball");
        ball.forEach((ball) => {
            ball.style.backgroundColor = "#6DDE1A";
            ball.style.borderColor = "#6DDE1A";
        });
        setTimeout(() => {
            arr = [];
            checkNumbers();
            updateDisplay();
        }, 2000);
    }
    else {
        audioAnswer(false);
        const ball = document.querySelectorAll(".ball");
        ball.forEach((ball) => {
            ball.style.backgroundColor = "#752dc7";
            ball.style.borderColor = "#752dc7";
        });
        setTimeout(() => {
            arr = [];
            checkNumbers();
            updateDisplay();
        }, 1000);
    }
}
function updateDisplay() {
    display.innerHTML = `
  <p class="display--content">${!arr[0] ? "<div class='ball--empty'></div>" : "<div class='ball'></div>"}</p>
              <p class="display--content">${!arr[1]
        ? "<div class='ball--empty'></div>"
        : "<div class='ball'></div>"}</p>
              <p class="display--content">${!arr[2]
        ? "<div class='ball--empty'></div>"
        : "<div class='ball'></div>"}</p>
              <p class="display--content">${!arr[3]
        ? "<div class='ball--empty'></div>"
        : "<div class='ball'></div>"}</p>
  `;
}
updateDisplay();
