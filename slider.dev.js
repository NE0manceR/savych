"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var photosArr = ["/images/slider/01/1.jpg", "/images/slider/01/2.jpg", "/images/slider/01/3.jpg", "/images/slider/01/4.jpg", "/images/slider/01/5.jpg", "/images/slider/01/6.jpg", "/images/slider/01/7.jpg", "/images/slider/01/8.jpg", "/images/slider/01/9.jpg", "/images/slider/01/10.jpg", "/images/slider/01/11.jpg", "/images/slider/01/12.jpg", "/images/slider/01/13.jpg", "/images/slider/01/14.jpg", "/images/slider/01/15.jpg", "/images/slider/01/16.jpg", "/images/slider/01/17.jpg", "/images/slider/01/18.jpg", "/images/slider/01/19.jpg", "/images/slider/01/20.jpg"];
var smallImgsBlock = document.querySelector('.slider__small-imgs');
var bigPhoto = document.querySelector('.big-slider__img');
var bigImg = document.querySelector('.slider__img');
var bigSlider = document.querySelector('.big-slider');
var closeSlider = document.querySelector('.big-slider__close');

function addPhoto() {
  photosArr.forEach(function (element) {
    var img = document.createElement('img');
    img.addEventListener('click', changBigPhoto);
    img.classList.add('slider__small-img');
    img.src = element;
    smallImgsBlock.append(img);
  });
}

addPhoto();
var allSmallImgs = document.querySelectorAll('.slider__small-img');
var bigPhotoIndex = 0;

function changBigPhoto(event) {
  var arr = _toConsumableArray(allSmallImgs);

  bigImg.classList.add('animation-show');
  bigImg.setAttribute('src', event.target.getAttribute('src'));
  setTimeout(function () {
    bigImg.classList.remove('animation-show');
  }, 400);
  setZoomPhoto(arr.indexOf(event.target));
  bigPhotoIndex = arr.indexOf(event.target);
}

function setZoomPhoto(index) {
  console.log(photosArr[index]);
  bigPhoto.setAttribute('src', photosArr[index]);
}

bigImg.addEventListener('click', function () {
  bigSlider.style.display = 'block';
});
closeSlider.addEventListener('click', function () {
  bigSlider.style.display = 'none';
});

function changePhoto(param) {
  if (param && bigPhotoIndex < photosArr.length - 1) {
    bigPhoto.setAttribute('src', photosArr[++bigPhotoIndex]);
    bigPhoto.classList.add('animation-swipe-right');
    setTimeout(function () {
      bigPhoto.classList.remove('animation-swipe-right');
    }, 500);
  }

  if (!param && bigPhotoIndex > 0) {
    bigPhoto.setAttribute('src', photosArr[--bigPhotoIndex]);
    bigPhoto.classList.add('animation-swipe-left');
    setTimeout(function () {
      bigPhoto.classList.remove('animation-swipe-left');
    }, 500);
  }
}