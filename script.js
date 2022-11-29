const imgCollection = [
  'img/image_01.jpg',
  'img/image_02.jpg',
  'img/image_03.jpg',
  'img/image_04.jpg',
  'img/image_05.jpg',
  'img/image_06.jpg',
];
//Create list of images, add classes and src, put inside src every item of array
for (let i = 0; i < imgCollection.length; i++) {
  document.querySelector('.slider').innerHTML += `<div class="thumb"><img src=${
    imgCollection[i]
  } class="imgStyle active-img"  alt="image_0${i + 1}"></div>`;
}

// Create and add div container for image max size
const divBigImage = document.createElement('div');
divBigImage.classList.add('max-size');
// Create and add img for image max size
const bigImage = document.createElement('img');
bigImage.src = imgCollection[2];
bigImage.classList.add('img-max');
bigImage.alt = 'big-picture';
divBigImage.appendChild(bigImage);
document.querySelector('.slider').before(divBigImage);

//Create and add buttons
const buttonContainer = document.createElement('div');
buttonContainer.classList.add('btncontainer');
document.querySelector('.slider').after(buttonContainer);

const buttonPrev = document.createElement('button');
buttonPrev.classList.add('btnStyle', 'prev');
buttonPrev.textContent = 'Prev';
buttonContainer.appendChild(buttonPrev);

const buttonReset = document.createElement('button');
buttonReset.classList.add('btnStyle', 'reset');
buttonReset.textContent = 'Reset';
buttonContainer.appendChild(buttonReset);

const buttonNext = document.createElement('button');
buttonNext.classList.add('btnStyle', 'next');
buttonNext.textContent = 'Next';
buttonContainer.appendChild(buttonNext);

//======================================
const images = document.querySelectorAll('.imgStyle');
let count = 0; //Number of current image

// Button functionality
const next = document.querySelector('.next');
next.onclick = nextFunction;

// const prev = document.querySelector('.prev');
// prev.onclick = prevFunction;

// const reset = document.querySelector('.reset');
// reset.onclick = resetFunction;

// Button's functions
function nextFunction() {
    if (count + 1 < images.length) {
        count++;
    } else {
        count = 0
    }

    // Delete active-img class
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove('active-img');
    }
    images[count].classList.add('active-img');
    document.querySelector('.img-max').src = images[count].src;
}