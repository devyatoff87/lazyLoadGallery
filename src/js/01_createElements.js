import { imgArray } from './pic-srcs.js';

let imgCont = document.querySelector('.img-cont');


const createColumns = () => {
    let colAmount = 1;
    if (window.innerWidth > 991.8) {
        colAmount = 3;
    } else if (window.innerWidth > 578.9) {
        colAmount = 2
    }
    for (let i = 0; i < colAmount; i++) {
        let col = document.createElement('div');
        col.className = 'img-column';
        imgCont.append(col)
    }
}

createColumns();

let imgColumns = document.querySelectorAll('.img-column');
let imgsPerColumn = Math.floor(imgArray.length / imgColumns.length);

const getRand = (max, min) => {
    let a = Math.random() * (max - min) + min;
    return a.toFixed(2);
}

const createImgs = () => {
    let k = 0;
    let m = 0;
    for (let i = 0; i <= imgColumns.length - 1; i++) {
        for (let u = 0; u < imgsPerColumn; u++) {
            let item = document.createElement('div');
            item.className = 'intersect-me';
            let img = document.createElement('img');
            img.dataset.src = imgArray[k++];
            img.src = "";

            img.setAttribute('style', 'transition: ' + getRand(1.7, 0.7) + 's ease-out')

            item.append(img);
            imgColumns[m].append(item);
        }
        m++
    }
}

createImgs();






