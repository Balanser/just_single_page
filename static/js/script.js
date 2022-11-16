const nav = document.querySelector(".nav")
const close = document.querySelector(".close_nav")
const menu = document.querySelector('.menu')

menu.onclick = function() {
    nav.classList.add('open-nav');
    }
    close.onclick = function() {
    nav.classList.remove('open-nav');
    }
        