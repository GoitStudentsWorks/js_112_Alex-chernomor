
// // export const messageFunctionAB = function () {
// //   console.log('this is about me');
// // };
// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// import Swiper from 'swiper';
// import 'swiper/css';

// // document.addEventListener('DOMContentLoaded', function () {
// //   // Роблю секцію AboutMe
// //   const aboutMeSection = document.createElement('section');
// //   aboutMeSection.classList.add('about-me');

// //   // Створюю контейнер
// //   const container = document.createElement('div');
// //   container.classList.add('container');

// //   // Створюю прихований заголовок
// //   const hiddenTitle = document.createElement('h2');
// //   hiddenTitle.classList.add('about-me-title', 'visually-hidden');
// //   hiddenTitle.textContent = 'About Me Section';

// //   // Створюю зображення та опис до нього
// //   const descriptionWrap = document.createElement('div');
// //   descriptionWrap.classList.add('description-wrap-section');

// //   const sectionDescription = document.createElement('div');
// //   sectionDescription.classList.add('section-description');

// //   const descriptionText = document.createElement('h3');
// //   descriptionText.classList.add('text-description');
// //   descriptionText.innerHTML = `I work with people all over the world to create impressive and <span class="functional-word">functional</span> <span class="web-word">websites</span> that reflect each client's unique personality.`;

// //   sectionDescription.appendChild(descriptionText);

// //   const sectionImg = document.createElement('div');
// //   sectionImg.classList.add('section-img');

// //   const imgAvatar = document.createElement('img');
// //   imgAvatar.classList.add('imgAvatar');
// //   imgAvatar.src = '../img/imgJPEG/heroImg/heroImg.jpg';
// //   imgAvatar.alt = 'ImageAvatar';

// //   sectionImg.appendChild(imgAvatar);
// //   descriptionWrap.appendChild(sectionDescription);
// //   descriptionWrap.appendChild(sectionImg);

// //   container.appendChild(hiddenTitle);
// //   container.appendChild(descriptionWrap);

// //   aboutMeSection.appendChild(container);

// //   document.body.appendChild(aboutMeSection);
// // });

// // // Accordion
// // document.addEventListener('DOMContentLoaded', () => {
// //   const accordion = document.createElement('div');
// //   accordion.id = 'accordion';

// //   // Добавляю секції
// //   const sections = [
// //     {
// //       title: 'ABOUT ME',
// //       content: [
// //         'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',
// //         'Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
// //       ],
// //     },
// //     {
// //       title: 'ROLE',
// //       content: [
// //         'Frontend development',
// //         'HeadlessCMS,Wordpress',
// //         'Blender(enjoy)',
// //       ],
// //     },
// //     {
// //       title: 'EDUCATION',
// //       content: [
// //         '2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York',
// //         '2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York',
// //         '2020 - 2022 / Advanced Blender Animation Techniques, Udemy',
// //       ],
// //     },
// //   ];

// //   // форичом додаю лішки та кнопку, а також при натиску кнопки змінюю пол-ня стрілок
// //   sections.forEach(section => {
// //     const liItem = document.createElement('li');
// //     // Кнопка
// //     const button = document.createElement('button');
// //     button.innerHTML = `${
// //       section.title
// //     }<span><svg width='40px' height='40px'><use href='../img/imgSVG/sprite.svg#arrow${
// //       section.open ? 'Up' : 'Down'
// //     }'></use></svg></span>`;

// //     //Добавляю контенті секції
// //     const contentDiv = document.createElement('ul');
// //     contentDiv.classList.add('content');
// //     section.content.forEach(paragraph => {
// //       const contentItem = document.createElement('li');
// //       contentItem.textContent = paragraph;
// //       contentDiv.appendChild(contentItem);
// //     });

// //     button.addEventListener('click', () => {
// //       contentDiv.classList.toggle('active');
// //       const arrow = button.querySelector('svg use');
// //       const isActive = contentDiv.classList.contains('active');
// //       arrow.setAttribute(
// //         'href',
// //         isActive
// //           ? '../img/imgSVG/sprite.svg#arrowUp'
// //           : '../img/imgSVG/sprite.svg#arrowDown'
// //       );
// //     });

// //     liItem.appendChild(button);
// //     liItem.appendChild(contentDiv);
// //     accordion.appendChild(liItem);
// //   });
// //   // Добавляю все до body
// //   document.body.appendChild(accordion);

// //   new Accordion('.accordion-container');
// // });

// // // Роблю контейнер для swiper
// // document.addEventListener('DOMContentLoaded', function () {
// //   const swiperContainer = document.createElement('div');
// //   swiperContainer.classList.add('swiper-container');

// //   // Добавляю в контейнер wrapper, котрий буде тримати slider
// //   const swiperWrapper = document.createElement('ul');
// //   swiperWrapper.classList.add('swiper-wrapper');

// //   // Добавляю слайди для прокрутки
// //   const slides = [
// //     { class: 'slide-one', text: 'HTML/CSS' },
// //     { class: 'slide-two', text: 'JavaScript' },
// //     { class: 'slide-three', text: 'React' },
// //     { class: 'slide-four', text: 'Node. js' },
// //     { class: 'slide-five', text: 'React Native' },
// //     { class: 'slide-six', text: 'Soft skills' },
// //   ];

// const aboutMeArray = [
//   {
//     title: 'ABOUT ME',
//     description: [
//       'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',
//       'Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
//     ],
//   },
//   {
//     title: 'ROLE',
//     description: [
//       'Frontend development',
//       'HeadlessCMS, Wordpress',
//       'Blender (enjoy)',
//     ],
//   },
//   {
//     title: 'EDUCATION',
//     description: [
//       '2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York',
//       '2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York',
//       '2020 - 2022 / Advanced Blender Animation Techniques, Udemy',
//     ],
//   },
// ];

// const createDescriptionEl = obj => {
//   return `
//   <li class='my-description'>
//   <p class='el-name'>${obj.title}</p>
//   <p class='el-description'></p>
//     </li>
//   `;
// };

// function createCards() {
//   const container = document.querySelector('.about-me-list');

//   aboutMeArray.forEach(item => {
//     const card = document.createElement('li');
//     card.classList.add('my-description');

//     const title = document.createElement('p');
//     title.classList.add('el-name');
//     title.innerText = item.title;

//     const button = document.createElement('button');
//     button.innerHTML = `<span><svg width='40px' height='40px'><use href='../img/imgSVG/sprite.svg#arrowUp'></use></svg></span>`;

//     const descriptionDiv = document.createElement('div');
//     descriptionDiv.classList.add('div-description');
//     descriptionDiv.style.display = 'none';

//     const descriptionList = document.createElement('ul');
//     descriptionList.classList.add('ul-description');

//     item.description.forEach(desc => {
//       const listItem = document.createElement('li');
//       listItem.innerText = desc;
//       descriptionList.appendChild(listItem);
//     });

//     button.addEventListener('click', () => {
//       card.classList.toggle('active');
//       const arrow = button.querySelector('svg use');
//       const isActive = card.classList.contains('active');
//       arrow.setAttribute(
//         'href',
//         isActive
//           ? './img/imgSVG/sprite.svg#arrowUp'
//           : './img/imgSVG/sprite.svg#arrowDown'
//       );
//       descriptionDiv.style.display = isActive ? 'block' : 'none';
//     });

//     descriptionDiv.appendChild(descriptionList);
//     title.appendChild(button);
//     card.appendChild(title);
//     card.appendChild(descriptionDiv);

//     container.appendChild(card);
//   });
// }

// createCards();

// const containerTwo = document.querySelector('.skills-slider');

// const swiperContainer = document.createElement('div');
// swiperContainer.classList.add('swiper');

// const skillsArr = [
//   'HTML/CSS',
//   'JavaScript',
//   'React',
//   'Node.js',
//   'React Native',
//   'Soft skills',
// ];

// const skillsList = document.createElement('ul');
// skillsList.classList.add('skills-list');

// const createSkill = str => {
//   return `
//     <li class='skills-link'>
//         <p class='skill-p'>${str}</p>
//     </li>
//     `;
// };
// const createSkillTemplate = arr => arr.map(el => createSkill(el)).join('');

// skillsList.innerHTML = createSkillTemplate(skillsArr);

// swiperContainer.appendChild(skillsList);

// const nextButton = document.createElement('div');
// nextButton.classList.add('swiper-button-next');
// nextButton.innerHTML = `<span><svg width='40px' height='40px'><use href='./img/imgSVG/sprite.svg#arrowRight'></use></svg></span>`;

// swiperContainer.appendChild(nextButton);

// containerTwo.appendChild(swiperContainer);

// // const swiper = new Swiper('.swiper', {
// //   slidesPerView: 1,
// //   navigation: {
// //     nextEl: '.swiper-button-next',
// //   },
// //   keyboard: {
// //     enabled: true,
// //     onlyInViewport: false,
// //   },
// //   grabCursor: true,
// //   centeredSlides: false,
// //   loop: false,
// //   breakpoints: {
// //     768: {
// //       slidesPerView: 2, // Для планшетов
// //       slidesPerGroup: 2,
// //       spaceBetween: 16,
// //     },
// //     1440: {
// //       slidesPerView: 4, // Для десктопов
// //       slidesPerGroup: 2,
// //       spaceBetween: 16,
// //     },
// //   },
// // });

