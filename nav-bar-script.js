document.addEventListener('DOMContentLoaded', () => {
    const navBarLogo = document.getElementById('navbar-logo')
    const scroll = 64;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scroll) {
            navBarLogo.classList.add("navbar-logo-scroll") ;
        } else {
            navBarLogo.classList.remove("navbar-logo-scroll");
        }
    })
})


document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 144;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});