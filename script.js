/*

const toogleBtn = document.querySelector('.toogle-btn')
const toogleBtnIcon = document.querySelector('.toogle-btn img')
const dropdownMenu = document.querySelector('.dropdown-menu')

toogleBtn.onclick = function (){
    dropdownMenu.classList.toggle('open')

}
*/







const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  });