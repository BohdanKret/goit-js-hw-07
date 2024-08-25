const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputNumber = document.querySelector("#controls input");
const boxForBoxes = document.querySelector("#boxes");

inputNumber.placeholder = "0";

createBtn.addEventListener("click", hendelCreateBtnClick);
destroyBtn.addEventListener("click", destroyBoxes);

function hendelCreateBtnClick() {
  if (inputNumber.value >= 1 && inputNumber.value <= 100) {
    // console.log(inputNumber.value);

    createBoxes(inputNumber.value);

    boxForBoxes.style.padding = "32px";
    inputNumber.value = "";
  }
}

function createBoxes(amount) {
  destroyBoxes();

  const boxArray = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor(box.style.backgroundColor);
    boxArray.push(box);
  }

  boxForBoxes.append(...boxArray);

  return boxForBoxes;
}

function destroyBoxes() {
  boxForBoxes.innerHTML = "";
  boxForBoxes.style.padding = "0";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

inputNumber.addEventListener("focus", () => (inputNumber.placeholder = ""));
inputNumber.addEventListener("blur", () => (inputNumber.placeholder = "0"));
