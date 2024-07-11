const displayContent = document.querySelector(
  ".display--content"
) as HTMLDivElement;
const deleteIcon = document.querySelector(".delete--icon") as HTMLOrSVGImageElement
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


function checkNumbers() {
  if (arr.length > 0) {
    const deleteIcon = document.querySelector(".delete--icon") as HTMLOrSVGImageElement
    deleteIcon.style.color = "#752dc7"
  } else if (arr.length === 0) {
    deleteIcon.style.color = "#ffffff1a"
  }
}

function keyClick(number: number): void {
   if (arr.length < 4) {
    padChange(number);
    checkNumbers()
    updateDisplay();
   }
}

function padChange(numberPad: number): void {
  arr.push(numberPad);
}

function deleteNumber(): void {
  arr.pop();
  updateDisplay();
  checkNumbers()
}

function submitNumber(): void {
  if (arr.join("") === "1978") {
    audioAnswer(true);
    const ball = document.querySelectorAll(
      ".ball"
    ) as NodeListOf<HTMLDivElement>;
    ball.forEach((ball) => {
      ball.style.backgroundColor = "#6DDE1A";
      ball.style.borderColor = "#6DDE1A";
    });
    setTimeout(() => {
      arr = [];
      checkNumbers()
      updateDisplay();
    }, 2000);
  } else {
    audioAnswer(false);
    const ball = document.querySelectorAll(
      ".ball"
    ) as NodeListOf<HTMLDivElement>;
    ball.forEach((ball) => {
      ball.style.backgroundColor = "red";
      ball.style.borderColor = "red";
    });
    setTimeout(() => {
      arr = [];
      checkNumbers()
      updateDisplay();
    }, 1000);
  }
}

function updateDisplay(): void {
  display.innerHTML = `
  <p class="display--content">${
    !arr[0] ? "<div class='ball--empty'></div>" : "<div class='ball'></div>"
  }</p>
              <p class="display--content">${
                !arr[1]
                  ? "<div class='ball--empty'></div>"
                  : "<div class='ball'></div>"
              }</p>
              <p class="display--content">${
                !arr[2]
                  ? "<div class='ball--empty'></div>"
                  : "<div class='ball'></div>"
              }</p>
              <p class="display--content">${
                !arr[3]
                  ? "<div class='ball--empty'></div>"
                  : "<div class='ball'></div>"
              }</p>
  `;
}

updateDisplay();
