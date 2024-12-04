let mainSection = document.querySelector(
  ".container__main"
);
let successSection = document.querySelector(
  ".container__success"
);
let emailField = document.forms[0].email;
let submit = document.forms[0].button;
let errorText = document.querySelector(".error");
let emailSpan = document.querySelector(".email");
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

mainSection.classList.add("active");
successSection.classList.remove("active");

submit.addEventListener("click", () => {
  emailField.classList.remove("error");
  errorText.classList.remove("active");
  if (!emailRegex.test(emailField.value)) {
    errorText.classList.add("active");
    emailField.classList.add("error");
  } else {
    // Send Data
    // Show thank you Page
    emailSpan.innerHTML = emailField.value;
    mainSection.classList.remove("active");
    successSection.classList.add("active");
  }
});
