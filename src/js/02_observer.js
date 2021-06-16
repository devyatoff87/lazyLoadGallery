
let imgs = document.querySelectorAll('.intersect-me');

async function callback(entries) {
    await entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            setTimeout(() => {
                let img = entry.target.querySelector('img');
                img.src = img.dataset.src;

                entry.target.classList.add("show");
            }, getRand(200, 500))
        }
    });
}

const observer = new IntersectionObserver(callback, {
    threshold: '0.5'
});


imgs.forEach((item) => {
    observer.observe(item);
});









