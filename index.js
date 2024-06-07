let swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

});





let header = document.getElementById('header')

window.addEventListener('scroll', () => { 
  if (window.scrollY >=200) {
    header.style.background = 'rgb(0, 0, 0)'
} else { 
  header.style.background = 'transparent' 
} 

})
