(function() {
  "use strict";
    /**
   * Easy selector helper function
   */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }
})();

// element by id
let titlePage = document.getElementById('title-page');
let news = document.getElementById('news');
let navbar = document.getElementById('navbar');

const defaultTitle = titlePage.innerHTML;

const titlePages = {
  651: 'News ' + defaultTitle,
  1543: 'About Us ' + defaultTitle,
  2255: 'Achievement ' + defaultTitle,
  3081: 'Leader & Co-Leader ' + defaultTitle,
  default: 'Home' + defaultTitle
}

titlePage.innerHTML = titlePage.default;
window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY ?? 0;

  titlePage.innerHTML = scrollTop == 0 ? titlePages.default : titlePages[scrollTop];

  if(scrollTop <= news.offsetTop) {
    navbar.classList.remove("bg-brown-800");
  }

  if(scrollTop >= news.offsetTop) {
    // console.log('udh di bawah banh')
    navbar.classList.add("bg-brown-800");
  }
})

// Tombol ham
const navbarNav = document.querySelector('.navbar-nav');
// onclick
document.querySelector('#hambuger-menu').onclick = ( ) =>{navbarNav.classList.toggle('aktif');
};
// deactive
const hambuger = document.querySelector('#hambuger-menu');
const sb = document.querySelector('#search-button')

document.addEventListener('click', function (e) {
    if(!hambuger.contains(e.target)&&!navbarNav.contains(e.target)){
        navbarNav.classList.remove('aktif');
    }
    if(!sb.contains(e.target)&&!searchForm.contains(e.target)){
       searchForm.classList.remove('aktif');
    }
});

// tombol search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('aktif');
  searchBox.focus();
  e.preventDefault();
};