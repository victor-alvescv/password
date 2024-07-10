"use strict";
const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");
let display = document.querySelector(".display");
let arr = [];
console.log(first);
function keyClick(number) {
    if (arr.length >= 4) {
        return;
    }
    arr.push(number);
    padChange(number);
    console.log(arr);
}
function padChange(numberPad) {
    display = arr;
}
