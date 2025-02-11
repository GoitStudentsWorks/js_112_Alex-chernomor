document.addEventListener('DOMContentLoaded', () => {
  const coversImages = [
    { src: './img/imgJPEG/coversImg/coversImg1.jpg', alt: 'PowerPulse' },
    { src: './img/imgJPEG/coversImg/coversImg2.jpg', alt: 'MIMINO' },
    { src: './img/imgJPEG/coversImg/coversImg3.jpg', alt: 'Ukrainian Art' },
    { src: './img/imgJPEG/coversImg/coversImg4.jpg', alt: 'GREEN.HARVEST' },
    { src: './img/imgJPEG/coversImg/coversImg5.jpg', alt: 'WALLET' },
    { src: './img/imgJPEG/coversImg/coversImg6.jpg', alt: 'chego jewelry' },
    { src: './img/imgJPEG/coversImg/coversImg7.jpg', alt: 'energy.flow' },
    { src: './img/imgJPEG/coversImg/coversImg8.jpg', alt: 'fruitbox' },
    { src: './img/imgJPEG/coversImg/coversImg9.jpg', alt: 'englishexcellence' },
    { src: './img/imgJPEG/coversImg/coversImg10.jpg', alt: 'StarlightStudio' }
  ];

  const rows = [1, 2, 3, 4].map(n => document.getElementById(`row${n}`));

  // Функція для створення елементів coverItem
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
  // Функція для плавного додавання класу visible з затримкою
  function addVisibleClassWithDelay(element, delay = 100) {
    setTimeout(() => {
      element.classList.add('visible');
    }, delay);
  }
  // Функція для додавання зображень в рядок
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
      // Додаємо ще один набір зображень для безперервної прокрутки
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
