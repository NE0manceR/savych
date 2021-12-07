const photosArr = [
  "/images/slider/01/1.jpg",
  "/images/slider/01/2.jpg",
  "/images/slider/01/3.jpg",
  "/images/slider/01/4.jpg",
  "/images/slider/01/5.jpg",
  "/images/slider/01/6.jpg",
  "/images/slider/01/7.jpg",
  "/images/slider/01/8.jpg",
  "/images/slider/01/9.jpg",
  "/images/slider/01/10.jpg",
  "/images/slider/01/11.jpg",
  "/images/slider/01/12.jpg",
  "/images/slider/01/13.jpg",
  "/images/slider/01/14.jpg",
  "/images/slider/01/15.jpg",
  "/images/slider/01/16.jpg",
  "/images/slider/01/17.jpg",
  "/images/slider/01/18.jpg",
  "/images/slider/01/19.jpg",
  "/images/slider/01/20.jpg",

]
const smallImgsBlock = document.querySelector('.slider__small-imgs');
const bigPhoto = document.querySelector('.big-slider__img');
const bigImg = document.querySelector('.slider__img');
const bigSlider = document.querySelector('.big-slider');
const closeSlider = document.querySelector('.big-slider__close');

function addPhoto() {
  photosArr.forEach(element => {
    const img = document.createElement('img');
    img.addEventListener('click', changBigPhoto);
    img.classList.add('slider__small-img');
    img.src = element;
    smallImgsBlock.append(img);
  });
}

addPhoto();

const allSmallImgs = document.querySelectorAll('.slider__small-img');
let bigPhotoIndex = 0;

function changBigPhoto(event) {
  const arr = [...allSmallImgs]

  bigImg.classList.add('animation-show');
  bigImg.setAttribute('src', event.target.getAttribute('src'));

  setTimeout(() => {
    bigImg.classList.remove('animation-show');
  }, 400);

  setZoomPhoto(arr.indexOf(event.target));
  bigPhotoIndex = arr.indexOf(event.target);
}

function setZoomPhoto(index) {
  console.log(photosArr[index])
  bigPhoto.setAttribute('src', photosArr[index]);
}

bigImg.addEventListener('click', () => {
  bigSlider.style.display = 'block';
})

closeSlider.addEventListener('click', () => {
  bigSlider.style.display = 'none';
})

function changePhoto(param) {
  if (param && bigPhotoIndex < photosArr.length - 1) {
    bigPhoto.setAttribute('src', photosArr[++bigPhotoIndex]);
    bigPhoto.classList.add('animation-swipe-right');

    setTimeout(() => {
      bigPhoto.classList.remove('animation-swipe-right');
    }, 500)
  }

  if (!param && bigPhotoIndex > 0) {
    bigPhoto.setAttribute('src', photosArr[--bigPhotoIndex]);

    bigPhoto.classList.add('animation-swipe-left');

    setTimeout(() => {
      bigPhoto.classList.remove('animation-swipe-left');
    }, 500)
  }
}

