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