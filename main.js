//** Burger menu */

const burgerActive = document.querySelector('.burger')
const menuActive = document.querySelector('.nav')
const lockBody = document.body
const clickMenu = document.querySelectorAll('.nav__link')

burgerActive.addEventListener('click', () => {
    burgerActive.classList.toggle('active');
    menuActive.classList.toggle('active');
    lockBody.classList.toggle('lock');
})

clickMenu.forEach(element => {
    element.addEventListener('click', () => {
        lockBody.classList.remove('lock')
        menuActive.classList.remove('active')
        burgerActive.classList.remove('active')
    })
});

//** Programm swiper */

// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     spaceBetween: 20,
//     slideClass: 'program__swiper-slide',
// })

const firstImage = document.querySelector('.program__swiper-slide-1')
const secondImage = document.querySelector('.program__swiper-slide-2')

firstImage.addEventListener('click', () => {
    firstImage.style.zIndex = 1
    secondImage.style.zIndex = 0
    secondImage.style.opacity = 0.8
    firstImage.style.opacity = 1
})

secondImage.addEventListener('click', () => {
    secondImage.style.zIndex = 1
    firstImage.style.zIndex = 0
    firstImage.style.opacity = 0.8
    secondImage.style.opacity = 1
})

//** Scroll nav */


//** Gallery */
Fancybox.bind('[data-fancybox]', {
  Thumbs: false,
});

new Carousel(document.getElementById("myCarousel"), {
  slidesPerPage: 'auto',
  dragFree: true,
  Dots: false,
  center: false,
    
  },
);

//** Price */

new Carousel(document.getElementById("myCarousel2"), {
  slidesPerPage: 'auto',
  dragFree: true,
  Dots: false,
  center: false,
    
  },
);

//** Scroll Top */

const scrollTop = document.querySelector('.scroll-top')

if(scrollTop) {
  window.addEventListener('scroll', () => {
    if(window.scrollY > 500) {
      scrollTop.classList.add('visible')
    }
    else {
      scrollTop.classList.remove('visible')
    }
  })
}








