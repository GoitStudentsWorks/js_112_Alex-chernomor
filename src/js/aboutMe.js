// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// import Swiper from 'swiper';
// import 'swiper/css';

const aboutMeArray = [
  {
    title: 'ABOUT ME',
    description: [
      'I am Lloyd Jefferson, a talented programmer with extensive expertise in software development. I have an understanding of different programming languages and technologies, always ready to improve my skills. I always follow the latest trends and look for unconventional, creative solutions to problems. I have a high level of analytical skills and am able to effectively solve even the most difficult tasks encountered on the way.',
      'Able to work both independently and in a team. I can effectively cooperate with colleagues, exchanging ideas and finding optimal solutions. Professional maturity allows you to calmly cope with challenges and stressful situations, while maintaining a high quality of work. I am always looking for opportunities for self-improvement. I actively study new technologies and practices to stay abreast of the latest innovations. I have a strong understanding of various programming languages, frameworks and architectural concepts that allow me to create efficient and scalable software.',
    ],
  },
  {
    title: 'ROLE',
    description: [
      'Frontend development',
      'HeadlessCMS, Wordpress',
      'Blender (enjoy)',
    ],
  },
  {
    title: 'EDUCATION',
    description: [
      '2018 - 2019  / Frontend Development Diploma, GoIT IT School, New York',
      '2019 - 2020 / Advanced Web Development Certificate, GoIT IT School, New York',
      '2020 - 2022 / Advanced Blender Animation Techniques, Udemy',
    ],
  },
];

const createDescriptionEl = obj => {
  return `
  <li class='my-description-about-me'>
  <p class='el-name-about-me'>${obj.title}</p>
  <p class='el-description-about-me'></p>
    </li>
  `;
};

function createCards() {
  const container = document.querySelector('.about-me-list');

  aboutMeArray.forEach(item => {
    const card = document.createElement('li');
    card.classList.add('my-description-about-me');

    const title = document.createElement('p');
    title.classList.add('el-name-about-me');
    title.innerText = item.title;

    const button = document.createElement('button');
    button.innerHTML = `<span><svg width='40px' height='40px'><use href='../img/imgSVG/sprite.svg#arrowUp'></use></svg></span>`;

    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('div-description');
    descriptionDiv.style.display = 'none';

    const descriptionList = document.createElement('ul');
    descriptionList.classList.add('ul-description-about-me');

    item.description.forEach(desc => {
      const listItem = document.createElement('li');
      listItem.innerText = desc;
      descriptionList.appendChild(listItem);
    });

    createCards();
    
    const containerTwo = document.querySelector('.skills-slider-about-me');

const swiperContainer = document.createElement('div');
swiperContainer.classList.add('swiper-about-me');

const skillsArr = [
  'HTML/CSS',
  'JavaScript',
  'React',
  'Node.js',
  'React Native',
  'Soft skills',
];

const skillsList = document.createElement('ul');
skillsList.classList.add('skills-list-about-me');

const createSkill = str => {
  return `
    <li class='skills-link-about-me'>
        <p class='skill-p-about-me'>${str}</p>
    </li>
    `;
};
const createSkillTemplate = arr => arr.map(el => createSkill(el)).join('');
//     button.addEventListener('click', () => {
//       card.classList.toggle('active');
//       const arrow = button.querySelector('svg use');
//       const isActive = card.classList.contains('active');
//       arrow.setAttribute(
//         'href',
//         isActive
//           ? '../img/imgSVG/sprite.svg#arrowUp'
//           : '../img/imgSVG/sprite.svg#arrowDown'
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


    


// skillsList.innerHTML = createSkillTemplate(skillsArr);

// swiperContainer.appendChild(skillsList);

// const nextButton = document.createElement('div');
// nextButton.classList.add('swiper-button-next-about-me');
// nextButton.innerHTML = `<span><svg width='40px' height='40px'><use href='../img/imgSVG/sprite.svg#arrowRight'></use></svg></span>`;

// swiperContainer.appendChild(nextButton);

// containerTwo.appendChild(swiperContainer);

