(function () {
  const form = document.querySelector("#form1");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // It prevent from page to reload itself.

    const message = document.querySelector("#message");
    const feedback = document.querySelector(".feedback");
    const messageContent = document.querySelector(".pass-message");

    if (message.value === "") {
      feedback.classList.add("show");
      setTimeout(function () {
        feedback.classList.remove("show");
      }, 4000);
    } else {
      messageContent.textContent = message.value;
      message.value = "";
    }
  });
})();
