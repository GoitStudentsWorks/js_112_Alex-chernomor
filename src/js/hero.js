
const links = [
    { url: "https://www.instagram.com/goitclub/", name: "IG" },
    { url: "https://www.facebook.com/goITclub/", name: "FB" },
    { url: "https://www.youtube.com/c/GoIT", name: "YT" },
    { url: "https://github.com/Alex-chernomor/project-K3n5t13n", name: "GH" },
    { url: "mailto:lloydfefferson@gmail.com", name: "lloydfefferson@gmail.com",} // Для кнопки
]
const listLink = document.querySelector('.list-link');
const createMarkUp = links => {
return links.map(link => `
    <li class="link-wrap">
        <a class="link" href="${link.url}" target="_blank">${link.name}</a>
    </li>
`).join('');
}
listLink.innerHTML = createMarkUp(links);
  

