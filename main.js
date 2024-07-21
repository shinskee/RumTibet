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

//** Scroll all page */

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
  let smoother = ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',    
    smooth: 1,
    effects: true,
  })
//** Навигация по меню */
  const navLinks = document.querySelectorAll(".nav a")

  let Linker = navLinks.forEach(link => {
    link.addEventListener('click', () => {
      Linker = link.getAttribute("href")
      smoother.scrollTo(Linker, true, 'center center')
    })
  })
//** Навигация по меню */
//** Навигация ScrollTop */
scrollTop.addEventListener('click', () => {
  smoother.scrollTo('.header', true, 'center center')
})
//** Навигация ScrollTop */

  gsap.from('.header__inner', {
    opacity: 0,
    duration: 1,
    delay: 0.3
  })

  gsap.from('.hero__title', {
    opacity: 0,
    duration: 1,
    delay: 0.4
  })

  gsap.from('.finder', {
    opacity: 0,
    duration: 1,
    delay: 0.5
  })

  gsap.fromTo('.header', {opacity: 1}, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.header',
      start: 'center',
      end: 'bottom',
      scrub: true,
    }
  })

  gsap.fromTo('.program', {opacity: 0, x: 500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.header',
      scrub: true,
    }
  })

  gsap.fromTo('.about', {opacity: 0, x: -500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.program',
      scrub: true,
    }
  })

  gsap.fromTo('.price', {opacity: 0, x: 500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.about',
      scrub: true,
    }
  })

  gsap.fromTo('.blog', {opacity: 0, x: -500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.price',
      scrub: true,
    }
  })

  gsap.fromTo('.blog-card blog__inner', {opacity: 0, x: 500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.price',
      scrub: true,
    }
  })

  gsap.fromTo('.photo', {opacity: 0, x: -500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.blog',
      scrub: true,
    }
  })

  gsap.fromTo('.form', {opacity: 0, x: 500}, {
    opacity: 1, x: 0,
    scrollTrigger: {
      trigger: '.photo',
      scrub: true,
    }
  })
}





  
  





  










