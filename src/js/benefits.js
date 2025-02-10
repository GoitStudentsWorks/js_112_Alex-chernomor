import iconPath from '../img/imgSVG/sprite.svg';

const benefitsData = [
  {
    iconId: 'icon-user',
    title: 'Expertise',
    description:
      'As a highly experienced developer, I have deep knowledge of programming and website development.',
  },
  {
    iconId: 'icon-dialog',
    title: 'Communication',
    description:
      'Understanding your needs and wants is my priority and I am always open     to discussions and corrections.',
  },
  {
    iconId: 'icon-pen',
    title: 'Art',
    description:
      'Thanks to my creative nature, I am ready to accept challenges and help you bring your ideas to life.',
  },
  {
    iconId: 'icon-hourglass',
    title: 'Urgent execution',
    description:
      'I understand how important time is to you. Ready to work quickly and efficiently, without reducing the quality of work.',
  },
];

const benefitsList = document.querySelector('.benefits-list');

const createBenefitEl = ({ iconId, title, description }) => {
  return `
    <li class="benefits-elements">
        <div class="benefits-wrapper">
          <svg class="benefits-icon" width="24" height="24">
            <use href="${iconPath}#${iconId}"></use>
          </svg>
        </div>
        <h3 class="benefits-subtitle">${title}</h3>
        <p class="benefits-desc">
          ${description}
        </p>
      </li>
    `;
};

const createBenefitsTemplate = arr => arr.map(createBenefitEl).join('');

export const addBenefitsTemplate = () =>
  benefitsList.insertAdjacentHTML(
    'beforeend',
    createBenefitsTemplate(benefitsData)
  );
