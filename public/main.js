const main = document.querySelector('#main');
const login = document.querySelector('#login');
const html = document.querySelector('html');
const darkModeBtns = document.querySelectorAll('.darkSwitch');
const twitterIcon = document.querySelector('#twitterIcon');
const igIcon = document.querySelector('#igIcon');

darkModeBtns.forEach((btn) => {
    btn.addEventListener('click', toggleDarkMode);
});

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

function toggleDarkMode() {
    html.classList.toggle('dark');
    switchIcons();
}

function switchIcons() {
    if (html.classList.contains('dark')) {
        localStorage.theme = 'dark';

        twitterIcon.src = './assets/icons/twitter-dark.svg';
        igIcon.src = './assets/icons/instagram-dark.svg';
    } else {
        localStorage.theme = 'light';

        twitterIcon.src = './assets/icons/twitter.svg';
        igIcon.src = './assets/icons/instagram.svg';
    }
}

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

switchIcons();
