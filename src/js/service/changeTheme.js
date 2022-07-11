import icon from '../../images/sprite.svg';

export { rendereThemeIcon, theme }

function rendereThemeIcon() {
    return `<div class="theme">
    <button class="theme__toggle">
    <svg width="50" height="50"">
        <use href="${icon}#icon-moon"></use>
    </svg>
    <svg width="50" height="50">
        <use href="${icon}#icon-sun"></use>
    </svg>
    </button>
</div>`
}

function theme() {
    const toggleThemeBtn = document.querySelector('.theme__toggle');
    let el = document.documentElement;

    toggleThemeBtn.addEventListener('click', () => {
        if (el.hasAttribute('data-theme')) {
            el.removeAttribute('data-theme')
            localStorage.removeItem('theme')
        } else {
            el.setAttribute('data-theme', 'dark')
            localStorage.setItem('theme', 'dark')
        }
    })
    if (localStorage.getItem('theme') !== null) {
            el.setAttribute('data-theme', 'dark')
        }
}