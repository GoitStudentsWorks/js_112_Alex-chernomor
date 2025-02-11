document.addEventListener("DOMContentLoaded", async () => {
    const reviewsList = document.getElementById("reviews-list");
    const errorMessage = document.getElementById("error-message");

    if (!reviewsList || !errorMessage) {
        console.error("Не найдены элементы #reviews-list или #error-message");
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

        // Проверяем, появился ли в DOM контейнер Swiper
        setTimeout(() => {
            const swiperContainer = document.querySelector(".swiper");
            if (swiperContainer) {
                new Swiper(".swiper", {
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
                });
            } else {
                console.warn("Swiper контейнер не найден");
            }
        }, 100);
    } catch (error) {
        console.error(error);
        errorMessage.style.display = "block";
        reviewsList.style.display = "none";
    }
});
