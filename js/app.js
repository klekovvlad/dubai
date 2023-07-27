//Mobile menu

if(window.innerWidth < 768) {
    const button = document.querySelector('.header-mobile-button');
    const header = document.querySelector('.header-mobile');

    if(button && header) {
        button.onclick = () => header.classList.contains('open') ? header.classList.remove('open') : header.classList.add('open');
    }
}