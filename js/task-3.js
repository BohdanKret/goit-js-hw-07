const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const onInput = () => {
  nameOutput.textContent = nameInput.value;
  nameInput.value = nameInput.value.trim();

  if (nameInput.value === "" || nameInput.value === " ") {
    nameOutput.textContent = "Anonymous";
  }

  // Other diffrent methods(solutions)

  // if (!nameImput.value.replace(/\s/g, "")) {
  //   nameOutput.textContent = "Anonymous";
  // } else {
  //   nameOutput.textContent = nameImput.value;
  // }

  // if (!nameInput.value.split(" ").join("")) {
  //   nameOutput.textContent = "Anonymous";
  // } else {
  //   nameOutput.textContent = nameInput.value;
  // }
};

nameInput.addEventListener("input", onInput);
