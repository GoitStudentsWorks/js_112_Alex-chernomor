document.addEventListener('DOMContentLoaded', () => {
  const coversImages = [
    { href: '../img/imgJPEG/coversImg/coversImg1.jpg', alt: 'PowerPulse' },
    { href: '../img/imgJPEG/coversImg/coversImg2.jpg', alt: 'MIMINO' },
    { href: '../img/imgJPEG/coversImg/coversImg3.jpg', alt: 'Ukrainian Art' },
    { href: '../img/imgJPEG/coversImg/coversImg4.jpg', alt: 'GREEN.HARVEST' },
    { href: '../img/imgJPEG/coversImg/coversImg5.jpg', alt: 'WALLET' },
    { href: '../img/imgJPEG/coversImg/coversImg6.jpg', alt: 'chego jewelry' },
    { href: '../img/imgJPEG/coversImg/coversImg7.jpg', alt: 'energy.flow' },
    { href: '../img/imgJPEG/coversImg/coversImg8.jpg', alt: 'fruitbox' },
    { href: '../img/imgJPEG/coversImg/coversImg9.jpg', alt: 'englishexcellence' }
  ];

  const rows = [1, 2, 3, 4].map(n => document.getElementById(`row${n}`));

  rows.forEach(row => {
    let usedImages = [];

    // Перемішуємо масив для випадкового розташування зображень у кожному рядку
    const shuffledImages = coversImages.sort(() => 0.5 - Math.random());

    shuffledImages.forEach(({ href, alt }) => {

      // Перевіряємо, чи зображення вже було використане
      if (usedImages.includes(href)) return;

      const coverItem = document.createElement('li');
      coverItem.className = 'covers-item';

      const coverLink = document.createElement('a');
      coverLink.className = 'covers-link';
      coverLink.href = href;

      const coverImage = document.createElement('img');
      coverImage.className = 'covers-image';
      coverImage.src = href;
      coverImage.srcset = `${href} 1x, ${href.replace('.jpg', '@2x.jpg')} 2x`;
      coverImage.alt = alt;

      coverLink.appendChild(coverImage);
      coverItem.appendChild(coverLink);
      row.appendChild(coverItem);
    });

    // Додаємо ще один набір зображень для безперервної прокрутки
    shuffledImages.forEach(({ href, alt }) => {
      const coverItem = row.firstChild.cloneNode(true);
      row.appendChild(coverItem);
    });
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