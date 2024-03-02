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

window.addEventListener('scroll', () => {
  let news = document.getElementById('news');
  let navbar = document.getElementById('navbar');
  let scrollTop = window.scrollY;

  if(scrollTop <= news.offsetTop) {
    navbar.classList.remove("bg-brown-800");
  }

  if(scrollTop >= news.offsetTop) {
    // console.log('udh di bawah banh')
    navbar.classList.add("bg-brown-800");
  }
})