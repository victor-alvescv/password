const displayContent = document.querySelector(
  ".display--content"
) as HTMLDivElement;
const deleteIcon = document.querySelector(
  ".delete--icon"
) as HTMLOrSVGImageElement;
let display = document.querySelector(".display") as HTMLDivElement;
let arr: (string | number | undefined)[] = [];
let submitIconWrapper = document.querySelector(
  ".submit--icon-wrapper"
) as HTMLButtonElement;

const wrongAnswer = document.querySelector(
  ".wrong--answer"
) as HTMLOrSVGImageElement;
const correctAnswer = document.querySelector(
  ".correct--answer"
) as HTMLOrSVGImageElement;

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
    const deleteIcon = document.querySelector(
      ".delete--icon"
    ) as HTMLOrSVGImageElement;
    deleteIcon.style.color = "#752dc7";
  } else if (arr.length === 0) {
    deleteIcon.style.color = "#ffffff1a";
  }
  if (arr.length === 4) {
    submitIconWrapper.innerHTML = `<svg class="submit--icon" data-aos="fade-in" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ededed" class="size-6">
  <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
</svg>`;
  }
}

function keyClick(number: number): void {
  if (arr.length < 4) {
    padChange(number);
    checkNumbers();
    updateDisplay();
  }
  if (arr.length === 4) {
    submitIconWrapper.disabled = false;
  }
}

function padChange(numberPad: number): void {
  arr.push(numberPad);
}

function deleteNumber(): void {
  arr.pop();
  updateDisplay();
  checkNumbers();
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
    correctAnswer.style.display = "flex";
    setTimeout(() => {
      arr = [];
      correctAnswer.style.display = "none";
      submitIconWrapper.innerHTML = `<svg
                  class="submit--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>`;
      checkNumbers();
      updateDisplay();
    }, 2000);
  } else {
    audioAnswer(false);
    const ball = document.querySelectorAll(
      ".ball"
    ) as NodeListOf<HTMLDivElement>;
    ball.forEach((ball) => {
      ball.style.backgroundColor = "#752dc7";
      ball.style.borderColor = "#752dc7";
    });
    wrongAnswer.style.display = "flex";
    setTimeout(() => {
      arr = [];
      wrongAnswer.style.display = "none";
      submitIconWrapper.innerHTML = `<svg
                  class="submit--icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="size-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                    clip-rule="evenodd"
                  />
                </svg>`;
      checkNumbers();
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
