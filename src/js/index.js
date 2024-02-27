function goToUrl(url, newTab = false) {
  if (!newTab) {
    window.location.href = "https://" + url;
    return;
  }

  window.open("https://" + url, "_blank");
}

// Tombol ham
const navbarNav = document.querySelector('.navbar-nav');
// onclick
document.querySelector('#hambuger-menu').onclick = ( ) =>{navbarNav.classList.toggle('aktif');
};

const hambuger = document.querySelector('#hambuger-menu');
document.addEventListener('click', function (e) {
  if(!hambuger.contains(e.target)&&!navbarNav.contains(e.target)){
    navbarNav.classList.remove('aktif');
  }});
// TODO: make data.json and fetch all content from data.json