const inputFields = Array.from(document.getElementsByTagName("input"));
const emailField = document.getElementById("email");
const errorMessages = Array.from(document.getElementsByClassName("error-message"));
const buttonEl = document.getElementById("submit-button");

window.addEventListener("load", resetInputFields);
buttonEl.addEventListener("click", validation);

function resetInputFields() {
  for (i=0; i<inputFields.length; i++) {
    inputFields[i].value="";
    inputFields[i].style.borderColor="hsla(249, 10%, 26%, 0.2)";
    inputFields[i].classList.remove("error-icon");
    errorMessages[i].style.display = "none";
  }
}
function validation() {
  const emptyFields = [];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  for(i=0; i<inputFields.length; i++) {
    inputFields[i].style.borderColor="hsla(246, 25%, 77%, 0.5)";
    inputFields[i].classList.remove("error-icon");
    errorMessages[i].style.display = "none";

    if (inputFields[i].value.trim() === "") {
      inputFields[i].style.borderColor="var(--red)";
      inputFields[i].classList.add("error-icon");
      inputFields[i].value = "";

      errorMessages[i].style.display = "block";
      emptyFields.push(1);
      console.log(emptyFields);
    }
  }
  if (!emailRegex.test(emailField.value)) {
    emailField.style.borderColor="var(--red)";
    emailField.classList.add("error-icon");
    errorMessages[2].style.display = "block";
    emptyFields.push(1);
  }
    if (emptyFields.length === 0) { 
      alert("your data has been submitted");
      for (i=0; i<inputFields.length; i++) {
        inputFields[i].value="";
      }
    }
}
