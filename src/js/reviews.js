document.addEventListener("DOMContentLoaded", async () => {
    const reviewsList = document.getElementById("reviews-list");
    const errorMessage = document.getElementById("error-message");
    const prevButton = document.querySelector(".swiper-button-prev");
    const nextButton = document.querySelector(".swiper-button-next");
    const buttonContainer = document.querySelector(".button_pointer");

    if (!reviewsList || !errorMessage || !prevButton || !nextButton || !buttonContainer) {
        console.error("Не найдены необходимые элементы");
        return;
    }

    try {
        const response = await fetch("https://portfolio-js.b.goit.study/api/reviews");
        if (!response.ok) throw new Error("Failed to fetch reviews");

        const reviews = await response.json();
        if (!Array.isArray(reviews) || reviews.length === 0) throw new Error("No reviews found");

        reviewsList.innerHTML = reviews
            .map(review => `
                <li class="swiper-slide">
                    <img src="${review.avatar_url}" alt="${review.author}" class="review-avatar">
                    <h3 class="review-author">${review.author}</h3>
                    <p class="review-text">"${review.review}"</p>
                </li>
            `)
            .join("");

        setTimeout(() => {
            const swiper = new Swiper(".swiper", {
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                },
                grabCursor: true,
                centeredSlides: false,
                loop: false,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                        slidesPerGroup: 2,
                        spaceBetween: 16,
                    },
                    1440: {
                        slidesPerView: 4,
                        slidesPerGroup: 2,
                        spaceBetween: 10,
                    },
                },
                on: {
                    slideChange: function () {
                        prevButton.disabled = this.isBeginning;
                        nextButton.disabled = this.isEnd;
                        prevButton.classList.toggle("disabled", this.isBeginning);
                        nextButton.classList.toggle("disabled", this.isEnd);
                    }
                }
            });

            prevButton.disabled = swiper.isBeginning;
            nextButton.disabled = swiper.isEnd;
            prevButton.classList.toggle("disabled", swiper.isBeginning);
            nextButton.classList.toggle("disabled", swiper.isEnd);
        }, 100);
    } catch (error) {
        console.error(error);
        errorMessage.style.display = "block";
        reviewsList.style.display = "none";
        buttonContainer.style.display = "none";
    }

    // Cтили для дизейбленных кнопок
    const style = document.createElement("style");
    style.innerHTML = `
        .swiper-button-prev.disabled,
        .swiper-button-next.disabled {
            opacity: 0.5;
            pointer-events: none;
        }
        .swiper-button-prev:not(.disabled):hover,
        .swiper-button-next:not(.disabled):hover {
            opacity: 0.8;
            transform: scale(1.1);
            transition: opacity 0.3s, transform 0.3s;
        }
    `;
    document.head.appendChild(style);
});
