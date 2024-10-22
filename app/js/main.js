
(()=> {
  const burgerOpen = document.querySelector('.header__box-burger')
  const burgerClose = document.querySelector('.header__nav-close')
  const navigationMenu = document.querySelector('.header__nav')

  burgerOpen.addEventListener('click', () => {
    navigationMenu.classList.add('active')
  })

  burgerClose.addEventListener('click', () => {
    navigationMenu.classList.remove('active')
  })
})();

(()=> {
  const tabsItem = document.querySelectorAll('.tabs__links-item');
  const tabsContent = document.querySelectorAll('.tabs__content-item');

  tabsItem.forEach((tab, index) => {
    tab.addEventListener('click', ()=> {
      tabsContent.forEach((content)=> {
        content.classList.remove('active');
      })

      tabsItem.forEach((content)=> {
        content.classList.remove('active');
      })

      tabsItem[index].classList.add('active');
      tabsContent[index].classList.add('active');
    })
  })
})();

(()=> {
  const langs = document.querySelectorAll('.header__langs-link');
  langs.forEach((lang, index)=> {
    lang.addEventListener('click', ()=> {
      langs.forEach((lang)=> {
        lang.classList.remove('active');
      })
      
      langs[index].classList.add('active');
    })
  })
})();


(()=> {
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 25,
    speed: 600,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
})();


// const swiper = new Swiper('.about__swiper', {
//   // Default parameters
//   slidesPerView: 1,
//   spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     // when window width is >= 640px
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40
//     }
//   }
// })



//? ----------- CDN -------------------------------------->

const formPopup = new Popup({
  id: "form-class",
  title: "My First Popup",
  content: `
      <form>
        <input placeholder="name" type="text" />
        <input placeholder="email" type="email" />
        <input placeholder="password" type="password" />
      </form>

      An example popup.
      Supports multiple lines.`,
});

// formPopup.show();