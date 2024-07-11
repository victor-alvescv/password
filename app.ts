const first = document.querySelector<HTMLParagraphElement>(".first");
const second = document.querySelector<HTMLParagraphElement>(".second");
const third = document.querySelector<HTMLParagraphElement>(".third");
const fourth = document.querySelector<HTMLParagraphElement>(".fourth");

const red = document.querySelector(".red");
const green = document.querySelector(".green");

let display = document.querySelector(".display") as HTMLDivElement;
let arr: (string | number | undefined)[] = [];

function audioAnswer(answer: boolean): void {
  const audioCorrect = document.querySelector("#correct") as HTMLAudioElement;
  const audioWrong = document.querySelector("#wrong") as HTMLAudioElement;
  if (answer === true) {
    audioCorrect?.play();
  } else {
    audioWrong?.play();
  }
}

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

function deleteNumber(): void {
  arr.pop();
  updateDisplay();
}

function submitNumber(): void {
  if (arr.join("") === "1978") {
    audioAnswer(true);
    display.style.color = "#6DDE1A";
    setTimeout(() => {
      arr = [];
      display.style.color = "#ededed;";
      updateDisplay();
    }, 1000);
  } else {
    audioAnswer(false);
    display.style.color = "red";
    setTimeout(() => {
      arr = [];
      display.style.color = "#ededed;";
      updateDisplay();
    }, 1000);
  }
}

function updateDisplay(): void {
  display.innerHTML = `
  <p class="second">${
    !arr[0] ? "<div class='ball--empty'></div>" : "<div class='ball'></div>"
  }</p>
              <p class="second">${
                !arr[1]
                  ? "<div class='ball--empty'></div>"
                  : "<div class='ball'></div>"
              }</p>
              <p class="second">${
                !arr[2]
                  ? "<div class='ball--empty'></div>"
                  : "<div class='ball'></div>"
              }</p>
              <p class="second">${
                !arr[3]
                  ? "<div class='ball--empty'></div>"
                  : "<div class='ball'></div>"
              }</p>
  `;
}

updateDisplay();
