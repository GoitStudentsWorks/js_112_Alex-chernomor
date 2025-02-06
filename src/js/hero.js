const params = {
    links: [
        { url: "https://www.instagram.com/goitclub/", text: "IG" },
        { url: "https://www.facebook.com/goITclub/", text: "FB" },
        { url: "https://www.youtube.com/c/GoIT", text: "YT" },
        { url: "https://github.com/Alex-chernomor/project-K3n5t13n", text: "GH" },
        { url: "mailto:lloydfefferson@gmail.com", text: "lloydfefferson@gmail.com", isEmail: true } // Для кнопки
    ]
};

export function createMarkUp({ links }) {
    return links.map(link => `
        <li class="link-wrap${link.isEmail ? ' link-big' : ''}">
            <a class="link" href="${link.url}" target="_blank">${link.text}</a>
        </li>
    `).join('');
}

const listLink = document.querySelector('.list-link');
listLink.innerHTML = createMarkUp(params);
  