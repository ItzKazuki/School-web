// Tombol ham
const navbarNav = document.querySelector('.navbar-nav');
// onclick
document.querySelector('#hambuger-menu').onclick = ( ) =>{navbarNav.classList.toggle('aktif');
};
// deactive
const hambuger = document.querySelector('#hambuger-menu');
const sb = document.querySelector('#search-button')
const sp = document.querySelector('#shopping-cart')

document.addEventListener('click', function (e) {
    if(!hambuger.contains(e.target)&&!navbarNav.contains(e.target)){
        navbarNav.classList.remove('aktif');
    }
    if(!sb.contains(e.target)&&!searchForm.contains(e.target)){
       searchForm.classList.remove('aktif');
    }
    if(!sp.contains(e.target)&&!spForm.contains(e.target)){
      spForm.classList.remove('aktif');
    }
});



// LOGIN
document.getElementById('user').addEventListener('click', () => {
  document.getElementById('user-login').classList.remove('hide')
})

document.getElementById('exit').addEventListener('click', () => {
  document.getElementById('user-login').classList.add('hide')
})

// LOGIN



// tombol search
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('aktif');
  searchBox.focus();
  e.preventDefault();
};


// Shopping-cart
const spForm = document.querySelector('.shopping-cart');
const spBox = document.querySelector('#shopping-cart');

document.querySelector('#shopping-cart').onclick = (e) => {
  spForm.classList.toggle('aktif');
  spBox.focus();
  e.preventDefault();
}


// Homepage-SlideShow
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 5000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 5000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};




/*=============== SWIPER JS ===============*/
var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
