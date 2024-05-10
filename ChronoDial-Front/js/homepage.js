"use strict";

const menuIcon = document.querySelectorAll(".menubutton"); 
const menuContainer = document.querySelector(".menucontainer");
const menuCloseBtn = document.querySelectorAll(".menuCloseButton");

const searchBtn = document.querySelectorAll(".searchButton");
const searchSection = document.querySelector(".searchsection");
const searchCloseBtn = document.querySelectorAll(".searchCloseButton");

const menuConPageBoxInner = document.querySelectorAll(".pagebox");
const menuList = document.querySelector(".menulist");
const pageList = document.querySelector(".pagelist");

menuIcon.forEach( (e) => {
    e.addEventListener("click", () => {
        menuContainer.classList.remove("hidden");
    });
});

menuCloseBtn.forEach( (e) => {
    e.addEventListener("click", () => {
        menuContainer.classList.add("hidden");
    });
});

searchBtn.forEach( (e) => {
    e.addEventListener("click", () => {
        searchSection.classList.remove("hidden");
    });
});

searchCloseBtn.forEach( (e) => {
    e.addEventListener("click", () => {
        searchSection.classList.add("hidden");
    });
});

menuConPageBoxInner.forEach( (e) => {
    e.addEventListener("click", () => {
        menuList.classList.toggle("hidden");
        pageList.classList.toggle("hidden");
    });
});

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});


var swiper = new Swiper(".numberDialSwiper", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    },
  });

document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".eachcategory");
    const productContainers = document.querySelectorAll(".eachcategory-productcontainer");

    boxes.forEach(function(box, index) {
        box.addEventListener("click", function() {
             productContainers.forEach(function(container) {
                container.classList.add("hidden");
            });
            
            productContainers[index].classList.remove("hidden");
        });
    });
});

var swiper = new Swiper(".newproductcontainer", {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    },
  });

  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    autoplay: {
      delay: 5000,
    },
    // If you need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });