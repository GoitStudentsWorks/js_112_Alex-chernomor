document.addEventListener("DOMContentLoaded", async () => {
    const reviewsList = document.getElementById("reviews-list");
    const errorMessage = document.getElementById("error-message");

    try {
        const response = await fetch("https://portfolio-js.b.goit.study/api/reviews");
        if (!response.ok) throw new Error("Failed to fetch reviews");

        const reviews = await response.json();
        if (reviews.length === 0) throw new Error("No reviews found");

        reviewsList.innerHTML = reviews
            .map(review => `
                <li class="swiper-slide">
                    <img src="${review.avatar_url}" alt="${review.author}" class="review-avatar">
                    <h3 class="review-author">${review.author}</h3>
                    <p class="review-text">"${review.review}"</p>
                </li>
            `)
            .join("");

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
            slidesPerView: 2, // Для планшетов
            slidesPerGroup: 2,
            spaceBetween: 16,
        },
        1440: {
            slidesPerView: 4, // Для десктопов
            slidesPerGroup: 2,
            spaceBetween: 16,
        },
    },
});

    } catch (error) {
        console.error(error);
        errorMessage.style.display = "block";
        reviewsList.style.display = "none";
    }
});

