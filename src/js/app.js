window.onscroll = function() {
    const scroll = window.scrollY;

    const barraNav = document.querySelector('.barra');

    if(scroll > 300) {
        barraNav.classList.add('fixed-top');
    } else {
        barraNav.classList.remove('fixed-top');
    }
}

const hamburguer = document.querySelector('.hamburguer-menu svg');
hamburguer.addEventListener('click', function() {
    const menuPrincipal = document.querySelector('.navegacion');
    menuPrincipal.classList.toggle('mostrar');
})