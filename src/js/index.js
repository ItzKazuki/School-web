(function() {
  "use strict";

  // element by id
  let preloader = document.querySelector('#preloader');
  let titlePage = document.getElementById('title-page');
  let news = document.getElementById('about-us');
  let navbar = document.querySelector('.navbar');
  const navbarNav = document.querySelector('.navbar-nav');
  const hambuger = document.querySelector('#hambuger-menu');
  const sb = document.querySelector('#search-button');
  const searchForm = document.querySelector('.search-form');
  const searchBox = document.querySelector('#search-box');
  const searchIcon = document.getElementById('search-icon');
  const menuIcon = document.getElementById('menu-icon');
  
  /**
   * Preloader
   */
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  const defaultTitle = titlePage.innerHTML;

  const titlePages = {
    651: 'News ' + defaultTitle,
    1543: 'About Us ' + defaultTitle,
    2255: 'Achievement ' + defaultTitle,
    3081: 'Leader & Co-Leader ' + defaultTitle,
    default: 'Home' + defaultTitle
  }

  // onclick
  document.querySelector('#hambuger-menu').onclick = () => navbarNav.classList.toggle('aktif');

  document.addEventListener('click', (e) => {
    if(!hambuger.contains(e.target) && !navbarNav.contains(e.target)){
      navbarNav.classList.remove('aktif');
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)){
      searchForm.classList.remove('aktif');
    }
  });

  document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('aktif');
    searchBox.focus();
    e.preventDefault();
  };

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
  
    if(scrollTop <= news.offsetTop) {
      // diatas
      navbarNav.classList.add("text-brown-800");
      navbar.classList.remove("bg-brown-800");

      //change icon color
      searchIcon.classList.remove('text-brown-500');
      menuIcon.classList.remove('text-brown-500');
      searchIcon.classList.add('text-brown-800');
      menuIcon.classList.add('text-brown-800');
    }
  
    if(scrollTop >= news.offsetTop) {
      // dibawah
      navbarNav.classList.remove("text-brown-800");
      navbarNav.classList.add("text-brown-500");
      navbar.classList.add("bg-brown-800");

      //change icon color
      searchIcon.classList.remove('text-brown-800');
      menuIcon.classList.remove('text-brown-800');
      searchIcon.classList.add('text-brown-500');
      menuIcon.classList.add('text-brown-500');
    }
  })
})();

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});