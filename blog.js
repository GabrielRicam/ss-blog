const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('blog-post-show');
        } else {
            entry.target.classList.remove('blog-post-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.blog-post-hide');
hiddenElements.forEach((el) => observer.observe(el));