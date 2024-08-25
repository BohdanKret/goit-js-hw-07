const changeColorBtn = document.querySelector(".change-color");
const bodyOfPage = document.querySelector('body');
const colorSpanLine = document.querySelector('.color');

changeColorBtn.addEventListener('click', onBtnClick);

function onBtnClick() {
  bodyOfPage.style.backgroundColor = getRandomHexColor(bodyOfPage.style.backgroundColor);
  // console.log(getRandomHexColor(bodyOfPage.style.backgroundColor));
  colorSpanLine.style.color = bodyOfPage.style.backgroundColor;
  // console.log(colorSpanLine.style.color);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
