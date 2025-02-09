import './js/aboutMe';
import { addBenefitsTemplate } from './js/benefits';
import './js/covers';
import './js/faq';
import './js/footer';
import './js/header';
import './js/hero';
import './js/projects';
import './js/reviews';

/**
 * This function is for rendering benefits on the page
 */
addBenefitsTemplate();

/*modalka*/
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const openModalBtn = document.getElementById("openModal");
  const closeModalBtn = document.getElementById("closeModal");

  
  openModalBtn.addEventListener("click", () => {
    modal.classList.add("active");
  });

  
  closeModalBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("active");
    }
  });

  
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.classList.remove("active");
    }
  });
});

