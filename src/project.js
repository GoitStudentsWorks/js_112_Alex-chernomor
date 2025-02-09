// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// init Swiper:
// const swiper = new Swiper('.swiper', {
//   a11y: {
//     prevSlideMessage: 'Previous slide',
//     nextSlideMessage: 'Next slide',
//   },
// });



const swiper = new Swiper('.swiper', {
          // Optional parameters
          direction: 'horizontal',
          grabCursor:'true',
          keyboard: {
            enabled: true,
            onlyInViewport: false,
          },
          mousewheel: {
            invert: true,
          },
          // loop: false,
        
          // If we need pagination
          pagination: {
            el: '.swiper-pagination',
          },
        
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        
          // And if we need scrollbar
          // scrollbar: {
          //   el: '.swiper-scrollbar',
          // },
        })
  

//   const swiper = document.querySelector('.swiper').swiper;
// Now you can use all slider methods like
// swiper.slideNext();
