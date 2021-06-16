
let imgs = document.querySelectorAll('.intersect-me');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            let img = entry.target.querySelector('img')
            img.src = img.dataset.src;
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: '0.5'
});


imgs.forEach((item, index) => {
    observer.observe(item);
});









