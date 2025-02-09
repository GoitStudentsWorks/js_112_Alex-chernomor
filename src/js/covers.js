document.addEventListener('DOMContentLoaded', () => {
  const coversImages = [
    { src: '../img/imgJPEG/coversImg/coversImg1.jpg', alt: 'PowerPulse' },
    { src: '../img/imgJPEG/coversImg/coversImg2.jpg', alt: 'MIMINO' },
    { src: '../img/imgJPEG/coversImg/coversImg3.jpg', alt: 'Ukrainian Art' },
    { src: '../img/imgJPEG/coversImg/coversImg4.jpg', alt: 'GREEN.HARVEST' },
    { src: '../img/imgJPEG/coversImg/coversImg5.jpg', alt: 'WALLET' },
    { src: '../img/imgJPEG/coversImg/coversImg6.jpg', alt: 'chego jewelry' },
    { src: '../img/imgJPEG/coversImg/coversImg7.jpg', alt: 'energy.flow' },
    { src: '../img/imgJPEG/coversImg/coversImg8.jpg', alt: 'fruitbox' },
    { src: '../img/imgJPEG/coversImg/coversImg9.jpg', alt: 'englishexcellence' }
  ];

const rows = [1, 2, 3, 4].map(n => document.getElementById(`row${n}`));

  rows.forEach((row, index) => {
    let usedImages = [];

    // Якщо перший рядок, додаються зображення по порядку
    if (index === 0) {
      coversImages.forEach(({ src, alt }) => {
        const coverItem = document.createElement('li');
        coverItem.className = 'covers-item';

        const coverLink = document.createElement('a');
        coverLink.className = 'covers-link';
        coverLink.src = src;

        const coverImage = document.createElement('img');
        coverImage.className = 'covers-image';
        coverImage.src = src;
        coverImage.srcset = `${src} 1x, ${src.replace('.jpg', '@2x.jpg')} 2x`;
        coverImage.alt = alt;
        coverImage.loading = 'lazy';

        coverLink.appendChild(coverImage);
        coverItem.appendChild(coverLink);
        row.appendChild(coverItem);
      });
    } else {
      // Перемішуємо масив для випадкового розташування зображень у інших рядках
      const shuffledImages = [...coversImages].sort(() => 0.5 - Math.random());

      shuffledImages.forEach(({ src, alt }) => {
        // Перевіряємо, чи зображення вже було використане
        if (usedImages.includes(src)) return;

        const coverItem = document.createElement('li');
        coverItem.className = 'covers-item';

        const coverLink = document.createElement('a');
        coverLink.className = 'covers-link';
        coverLink.src = src;

        const coverImage = document.createElement('img');
        coverImage.className = 'covers-image';
        coverImage.src = src;
        coverImage.srcset = `${src} 1x, ${src.replace('.jpg', '@2x.jpg')} 2x`;
        coverImage.alt = alt;
        coverImage.loading = 'lazy';

        coverLink.appendChild(coverImage);
        coverItem.appendChild(coverLink);
        row.appendChild(coverItem);

        // Затримка для плавної появи
        setTimeout(() => {
          coverItem.classList.add('visible');
        }, 100);

        usedImages.push(src);
      });

      // Додаємо ще один набір зображень для безперервної прокрутки
      usedImages.forEach(src => {
        const coverItem = row.firstChild.cloneNode(true);
        row.appendChild(coverItem);

        // Затримка для плавної появи
        setTimeout(() => {
          coverItem.classList.add('visible');
        }, 100);
      });
    }
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