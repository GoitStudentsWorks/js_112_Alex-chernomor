import coversImg1 from '../img/imgJPEG/coversImg/coversImg1.jpg';
import coversImg2 from '../img/imgJPEG/coversImg/coversImg2.jpg';
import coversImg3 from '../img/imgJPEG/coversImg/coversImg3.jpg';
import coversImg4 from '../img/imgJPEG/coversImg/coversImg4.jpg';
import coversImg5 from '../img/imgJPEG/coversImg/coversImg5.jpg';
import coversImg6 from '../img/imgJPEG/coversImg/coversImg6.jpg';
import coversImg7 from '../img/imgJPEG/coversImg/coversImg7.jpg';
import coversImg8 from '../img/imgJPEG/coversImg/coversImg8.jpg';
import coversImg9 from '../img/imgJPEG/coversImg/coversImg9.jpg';
import coversImg10 from '../img/imgJPEG/coversImg/coversImg10.jpg';

document.addEventListener('DOMContentLoaded', () => {
  const coversImages = [

    { src: coversImg1, alt: 'PowerPulse' },
    { src: coversImg2, alt: 'MIMINO' },
    { src: coversImg3, alt: 'Ukrainian Art' },
    { src: coversImg4, alt: 'GREEN.HARVEST' },
    { src: coversImg5, alt: 'WALLET' },
    { src: coversImg6, alt: 'chego jewelry' },
    { src: coversImg7, alt: 'energy.flow' },
    { src: coversImg8, alt: 'fruitbox' },
    { src: coversImg9, alt: 'englishexcellence' },
    { src: coversImg10, alt: 'StarlightStudio' }
    ];


  const rows = [1, 2, 3, 4].map(n => document.getElementById(`row${n}`));

  function createCoverItem({ src, alt }) {
    const coverItem = document.createElement('li');
    coverItem.className = 'covers-item';

    const coverLink = document.createElement('a');
    coverLink.className = 'covers-link';
    coverLink.href = src;

    const coverImage = document.createElement('img');
    coverImage.className = 'covers-image';
    coverImage.src = src;
    coverImage.srcset = `${src} 1x, ${src.replace('.jpg', '@2x.jpg')} 2x`;
    coverImage.alt = alt;
    coverImage.loading = 'lazy';

    coverLink.appendChild(coverImage);
    coverItem.appendChild(coverLink);

    return coverItem;
  }
  
  function addVisibleClassWithDelay(element, delay = 100) {
    setTimeout(() => {
      element.classList.add('visible');
    }, delay);
  }
  
  function addImagesToRow(row, images, isOrdered) {
    let usedImages = [];

    if (isOrdered) {
      images.forEach(image => {
        const coverItem = createCoverItem(image);
        row.appendChild(coverItem);
        addVisibleClassWithDelay(coverItem);
      });
    } else {
      const shuffledImages = [...images].sort(() => 0.5 - Math.random());

      shuffledImages.forEach(image => {
        if (usedImages.includes(image.src)) return;
  
        const coverItem = createCoverItem(image);
        row.appendChild(coverItem);
        addVisibleClassWithDelay(coverItem);
        usedImages.push(image.src)
      });
     
      usedImages.forEach(src => {
        const coverItem = row.firstChild.cloneNode(true);
        row.appendChild(coverItem);
        addVisibleClassWithDelay(coverItem);
      });
    }
  }

  rows.forEach((row, index) => {
    addImagesToRow(row, coversImages, index === 0);
  });

  const coversSection = document.querySelector('.covers-gallery');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        rows.forEach(row => row.classList.add('active'));
      } else {
        rows.forEach(row => row.classList.remove('active'));
      }
    });
  });

  observer.observe(coversSection);
});
