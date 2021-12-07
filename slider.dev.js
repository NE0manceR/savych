"use strict";

var photosArr = ["/images/slider/01/1.jpg", "/images/slider/01/2.jpg", "/images/slider/01/3.jpg", "/images/slider/01/4.jpg", "/images/slider/01/5.jpg", "/images/slider/01/6.jpg", "/images/slider/01/7.jpg", "/images/slider/01/8.jpg", "/images/slider/01/9.jpg", "/images/slider/01/10.jpg", "/images/slider/01/11.jpg", "/images/slider/01/12.jpg", "/images/slider/01/13.jpg", "/images/slider/01/14.jpg", "/images/slider/01/15.jpg", "/images/slider/01/16.jpg", "/images/slider/01/17.jpg", "/images/slider/01/19.jpg", "/images/slider/01/20.jpg", "/images/slider/01/21.jpg"];
var smallImgsBlock = document.querySelector('.slider__small-imgs');

function addPhoto() {
  photosArr.forEach(function (element) {
    var img = document.createElement('img');
    img.addEventListener('click', test);
    img.classList.add('slider__small-img');
    img.src = element;
    smallImgsBlock.append(img);
  });
}

addPhoto();
var allSmallImgs = document.querySelectorAll('.slider__small-img');
var bigImg = document.querySelector('.slider__img');

function test(event) {
  bigImg.setAttribute('src', event.target.getAttribute('src'));
}