const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handelBtnSubmit);

function handelBtnSubmit(event) {
  event.preventDefault();

  const loginFormEmail = loginForm.elements.email.value;
  const loginFormPassword = loginForm.elements.password.value;

  // loginFormPassword.trim();

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
