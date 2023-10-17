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

function sidebarOn(){
    document.querySelector('.sidebar').classList.add('sidebar-open');
    document.querySelector('.sidebar-dim').classList.add('sd-enabled');
}
function sidebarOff(){
    document.querySelector('.sidebar').classList.remove('sidebar-open');
    document.querySelector('.sidebar-dim').classList.remove('sd-enabled');
}
