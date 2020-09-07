var message1 = document.getElementById("message-form");

message1.addEventListener("submit", function (event) {
  event.preventDefault();
  //Get user's input from form

  const formValue = document.getElementById("inp");
  const message = document.getElementById("message");
  const feedback = document.getElementById("feedback");
  if (formValue.value === "") {
    feedback.style.display = "block";
    setTimeout(function () {
      feedback.style.display = "none";
    }, 2000);
  } else {
    // clear input and change message value;
    message.textContent = formValue.value;
    formValue.value = "";
  }
});
