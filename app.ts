const first = document.querySelector<HTMLParagraphElement>(".first");
const second = document.querySelector<HTMLParagraphElement>(".second");
const third = document.querySelector<HTMLParagraphElement>(".third");
const fourth = document.querySelector<HTMLParagraphElement>(".fourth");

let display = document.querySelector(".display") as HTMLDivElement | number[];
let arr: (string | number)[] = ["-", "-", "-", "-"];

function keyClick(number: number): void {
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

function padChange(numberPad: number): void {
  arr[0] = numberPad
}

console.log(arr[0]);

function deleteNumber() {
  console.log("delete character")
}

function submitNumber() {
  console.log("submit password")
}
