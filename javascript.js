document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.topbar');

    if (window.scrollY > 0) {
        navbar.classList.add('tb-scrolled');
    } else {
        navbar.classList.remove('tb-scrolled');      
    }

})

document.addEventListener('scroll', () => {
    const navbar = document.querySelector('.menubar');

    if (window.scrollY > 0) {
        navbar.classList.add('mb-scrolled');
    } else {
        navbar.classList.remove('mb-scrolled');      
    }

})