(function() {
  "use strict";
  /**
   * Preloader
   */
  let preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  // element by id
  let titlePage = document.getElementById('title-page');
  let news = document.getElementById('about-us');
  let navbar = document.querySelector('.navbar');
  const navbarNav = document.querySelector('.navbar-nav');
  const hambuger = document.querySelector('#hambuger-menu');
  const sb = document.querySelector('#search-button');
  const searchForm = document.querySelector('.search-form');
  const searchBox = document.querySelector('#search-box');

  // const defaultTitle = titlePage.innerHTML;

  // const titlePages = {
  //   651: 'News ' + defaultTitle,
  //   1543: 'About Us ' + defaultTitle,
  //   2255: 'Achievement ' + defaultTitle,
  //   3081: 'Leader & Co-Leader ' + defaultTitle,
  //   default: 'Home' + defaultTitle
  // }

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
    console.log(scrollTop)
  
    if(scrollTop <= news.offsetTop) {
      console.log('ini di atas')
      navbar.classList.remove("bg-brown-800");
    }
  
    if(scrollTop >= news.offsetTop) {
      console.log('udh di bawah banh')
      navbar.classList.add("bg-brown-800");
    }
  })
})();