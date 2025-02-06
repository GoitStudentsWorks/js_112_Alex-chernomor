
const benefitsArr = [
  {
    imgSVG: '../img/imgSVG/benefitsSVG/userSVG.svg',
    title: 'Expertise',
    description:
      'As a highly experienced developer, I have deep knowledge of programming and website development.',
  },
  {
    imgSVG: '../img/imgSVG/benefitsSVG/dialogSVG.svg',
    title: 'Communication',
    description:
      'Understanding your needs and wants is my priority and I am always open     to discussions and corrections.',
  },
  {
    imgSVG: '../img/imgSVG/benefitsSVG/penSVG.svg',
    title: 'Art',
    description:
      'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life.',
  },
  {
    imgSVG: '../img/imgSVG/benefitsSVG/hourglassSVG.svg',
    title: 'Urgent execution',
    description:
      'I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work.',
  },
];

const benefitsList = document.querySelector('.benefits-list');

const createBenefitEl = obj => {
  return `
    <li class="benefits-elements">
        <svg class="benefits-icon" width="24" height="24">
          <use href="${obj.imgSVG}"></use>
        </svg>
        <h3 class="benefits-subtitle">${obj.title}</h3>
        <p class="benefits-desc">
          ${obj.deascription}
        </p>
      </li>
    `;
};

const createBenefitsTemplate = arr =>
  arr.map(el => createBenefitEl(el)).join('');

const addBenefitsTemplate = template =>
  benefitsList.insertAdjacentHTML('beforeend', template);

addBenefitsTemplate(createBenefitsTemplate(benefitsArr));
