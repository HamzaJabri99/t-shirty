//Showing/hiding--menu/sidebar
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
//Categories Swiper
var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

//new_arrivals swiper
var swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

// Products Tabs
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    //const target = document.querySelector(e.target.getAttribute("data-target"));
    const target = document.querySelector(tab.dataset.target);
    //tab.classList.toggle("active-tab");
    //console.log(target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active-tab");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });
    target.classList.add("active-tab");
    e.target.classList.add("active-tab");
  });
});

//Image Gallery
const imgGallery = () => {
  const mainImg = document.querySelector(".details__img");
  const smallImgs = document.querySelectorAll(".details__small-img");
  smallImgs.forEach((smallImg) => {
    smallImg.addEventListener("click", () => {
      //mainImg.setAttribute("src", smallImg.getAttribute("src"));
      mainImg.src = smallImg.getAttribute("src");
    });
  });
};
imgGallery();
