import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formfield");
  const modal = document.getElementById("modal");
  const closeModalBtn = document.querySelector(".close-modal");

 

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch("https://your-server.com/submit-form", { 
      method: "POST",
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        iziToast.success({
          title: "Success!",
          message: "Your mail was sent! ✅",
          position: "topRight",
          timeout: 5000
        });

        form.reset();
      } else {
        iziToast.error({
          title: "Error!",
          message: "Something went wrong! ❌",
          position: "topRight",
          timeout: 5000
        });
      }
    })
    .catch(() => {
      iziToast.warning({
        title: "Warning!",
        message: "Problem with the server ⚠️",
        position: "topRight",
        timeout: 5000
      });
    });
  });

  
  closeModalBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
});



