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
  const xIcon = document.getElementById('x-icon');
  
  /**
   * Preloader
   */
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
      /(android)/i.test(navigator.userAgent) ? alert('kamu menggunakan android, beberapa headphone mungkin tidak support karena masih tahap pengembangan') : "";
    });
  }

  // check user using android
  Modal

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
    xIcon.classList.remove('hidden');
    xIcon.classList.add('inline');
    searchIcon.classList.remove('inline');
    searchIcon.classList.add('hidden');
    searchBox.focus();
    e.preventDefault();
  };

  document.querySelector('#x-button').onclick = (e) => {
    searchIcon.classList.add('inline');
    searchIcon.classList.remove('hidden');
    xIcon.classList.remove('inline');
    xIcon.classList.add('hidden');
    e.preventDefault();
  }

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
  
    if(scrollTop <= news.offsetTop) {
      // diatas
      navbarNav.classList.add("text-brown-800");
      navbar.classList.remove("bg-brown-800");

      //change icon color
      searchIcon.classList.remove('text-brown-500');
      menuIcon.classList.remove('text-brown-500');
      xIcon.classList.remove('text-brown-500');
      searchIcon.classList.add('text-brown-800');
      menuIcon.classList.add('text-brown-800');
      xIcon.classList.add('text-brown-800');
    }
  
    if(scrollTop >= news.offsetTop) {
      // dibawah
      navbarNav.classList.remove("text-brown-800");
      navbarNav.classList.add("text-brown-500");
      navbar.classList.add("bg-brown-800");

      //change icon color
      searchIcon.classList.remove('text-brown-800');
      menuIcon.classList.remove('text-brown-800');
      xIcon.classList.remove('text-brown-800');
      searchIcon.classList.add('text-brown-500');
      menuIcon.classList.add('text-brown-500');
      xIcon.classList.add('text-brown-500')
    }
  })
})();