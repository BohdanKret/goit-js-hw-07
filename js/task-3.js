const nameImput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const onImput = () => {
  // if (!nameImput.value.replace(/\s/g, "")) {
  //   nameOutput.textContent = "Anonymous";
  // } else {
  //   nameOutput.textContent = nameImput.value;
  // }

  if (!nameImput.value.split(" ").join("")) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameImput.value;
  }
};

nameImput.addEventListener("input", onImput);
