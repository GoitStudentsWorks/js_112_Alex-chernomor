const params = {
    links: [
      "https://www.instagram.com/goitclub/",
      "https://www.facebook.com/goITclub/",
      "https://www.youtube.com/c/GoIT",
      "https://github.com/Alex-chernomor/project-K3n5t13n"
    ]
  };
  
  export function createMarkUp({ links }) {
    return links
      .map(link => `
        <li class="link-wrap">
          <a class="link" href="${link}" target="_blank">${link}</a>
        </li>
      `)
      .join('');
  }
  
  const listLink = document.querySelector('.list-link');
        listLink.innerHTML = createMarkUp(params);
  