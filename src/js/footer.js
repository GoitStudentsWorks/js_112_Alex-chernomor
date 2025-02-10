export const messageFunctionFoot = function(){
    console.log("this is footer");
};
/*modalka*/
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const successModal = document.getElementById("successModal");
  const errorModal = document.getElementById("errorModal");

  const openModalBtn = document.getElementById("openModal");
  const closeModalBtns = document.querySelectorAll(".closeModal");
  const form = document.querySelector(".form");

  
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  
  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("active");
      successModal.classList.remove("active");
      errorModal.classList.remove("active");
    });
  });

  
  window.addEventListener("click", (event) => {
    if (event.target === modal || event.target === successModal || event.target === errorModal) {
      modal.classList.remove("active");
      successModal.classList.remove("active");
      errorModal.classList.remove("active");
    }
  });

  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.classList.remove("active");
      successModal.classList.remove("active");
      errorModal.classList.remove("active");
    }
  });

  /*AJAX*/
  form.addEventListener("submit", async (event) => {
    event.preventDefault(); 
    const formData = {
      email: document.getElementById("email").value,
      comments: document.getElementById("comments").value,
    };

    try {
      const response = await fetch("https://your-server.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error!");
      }

      modal.classList.remove("active");
      successModal.classList.add("active"); 
      form.reset(); 
    } catch (error) {
      errorModal.classList.add("active"); 
    }
  });
});
