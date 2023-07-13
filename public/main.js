const main = document.querySelector('#main');
const login = document.querySelector('#login');

function navigator() {
    if (location.hash.startsWith('#login')) {
        loginPage();
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    } else {
        mainPage();
        if (location.hash.startsWith('#home')) {
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }
}

function loginPage() {
    main.classList.add('inactive');
    login.classList.remove('inactive');
}

function mainPage() {
    main.classList.remove('inactive');
    login.classList.add('inactive');
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);
