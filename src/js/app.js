window.onscroll = function() {
    const scroll = window.scrollY;

    const barraNav = document.querySelector('.barra');

    if(scroll > 300) {
        barraNav.classList.add('fixed-top');
    } else {
        barraNav.classList.remove('fixed-top');
    }
}