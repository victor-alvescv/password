const first = document.querySelector<HTMLParagraphElement>(".first");
const second = document.querySelector<HTMLParagraphElement>(".second");
const third = document.querySelector<HTMLParagraphElement>(".third");
const fourth = document.querySelector<HTMLParagraphElement>(".fourth");

let display = document.querySelector(".display") as HTMLDivElement;
let arr: (string | number | undefined)[] = [];

function keyClick(number: number): void {
  if (arr.length < 4) {
    padChange(number);
      updateDisplay();
    console.log(arr);
  }
}

function padChange(numberPad: number): void {
  arr.push(numberPad);
}

function deleteNumber() {
  arr.pop();
  updateDisplay();
}

function submitNumber() {
  if (arr.join("") === "1978") {
    alert("correct")
  } else {
    arr = []
    updateDisplay();
    alert("wrong password")
  }

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
