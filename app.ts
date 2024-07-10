const first = document.querySelector<HTMLParagraphElement>(".first");
const second = document.querySelector<HTMLParagraphElement>(".second");
const third = document.querySelector<HTMLParagraphElement>(".third");
const fourth = document.querySelector<HTMLParagraphElement>(".fourth");

let display: string | number = document.querySelector(".display")

let arr: (number | string)[] = [];
console.log(first);

function keyClick(number: number | string): void {
  if (arr.length >= 4) {
    return;
  }
  arr.push(number);
  padChange(number);
  console.log(arr);
}

function padChange(numberPad: number | string): void {
    display = arr
}
