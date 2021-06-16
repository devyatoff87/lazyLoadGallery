import { imgArray } from './pic-srcs.js';

let imgColumns = document.querySelectorAll('.img-column');
imgColumns = Array.from(imgColumns)
let imgsPerColumn = Math.floor(imgArray.length / imgColumns.length);
const createImgs = () => {
    let k = 0;
    let m = 0;
    for (let i = 0; i <= imgColumns.length - 1; i++) {
        for (let u = 0; u < imgsPerColumn; u++) {
            let div = document.createElement('div');
            div.className = 'random-pic';
            let img = document.createElement('img');
            img.dataset.src = imgArray[k++];
            img.src = "";
            div.append(img);
            imgColumns[m].append(div);
        }
        m++
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            let img = entry.target.querySelector('img')
            img.src = img.dataset.src;
            entry.target.classList.add("in-view");
        }
    });
});

const observerStarter = () => {
    let imgs = document.querySelectorAll('.random-pic');
    imgs = Array.from(imgs);

    imgs.forEach((item, index) => {
        observer.observe(item);
    });
}

createImgs()
observerStarter()






