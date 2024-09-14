const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handelBtnSubmit);

function handelBtnSubmit(event) {
  event.preventDefault();

  const loginFormEmail = event.target.elements.email.value.trim();
  const loginFormPassword = event.target.elements.password.value.trim();

  if (loginFormEmail === "" || loginFormPassword === "") {
    return alert("All form fields must be filled in");
  }

  const loginFormData = {
    email: loginFormEmail,
    password: loginFormPassword,
  };

  console.log(loginFormData);

  loginForm.reset();
}
