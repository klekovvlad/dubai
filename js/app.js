//Mobile menu

if(window.innerWidth < 768) {
    const button = document.querySelector('.header-mobile-button');
    const header = document.querySelector('.header-mobile');

    if(button && header) {
        button.onclick = () => header.classList.contains('open') ? header.classList.remove('open') : header.classList.add('open');
    }
}

//Change card style

if(window.innerWidth < 768) {
    const buttonsWrapper = document.querySelector('.cardview');
    const cards = document.querySelectorAll('.card');

    if(buttonsWrapper && cards.length > 0) {
        const buttons = [...buttonsWrapper.children]

        buttonsWrapper.onclick = (e) => {
            if(e.target.dataset.type === 'list') {
                ChangeCardCalss(e.target, 'add')
            }else if(e.target.dataset.type === 'full') {
                ChangeCardCalss(e.target, 'remove')
            }
        }

        const ChangeCardCalss = (button, action) => {
            for(let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('active')
            }
            button.classList.add('active')
            for(let i = 0; i < cards.length; i++) {
                cards[i].classList[action]('card__list');
            }
        }
    }
}