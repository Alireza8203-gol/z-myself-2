const $ = document;
const navToggleBtn = $.querySelector(".nav__toggle-icon");
const navMobileMenu = $.querySelector(".nav__mobile-menu");
const resOption = $.querySelectorAll(".resume-list__option");
const portfolioCategoryItems = $.querySelectorAll(".portfolio-category__item");
const menuItemsNodeList = $.querySelectorAll(".menu__link");
const allSections = $.querySelectorAll("section");
const changeThemeSwitch = $.querySelector(".change-theme");
let isMobileMenuOpen = false;

// Swiper module
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  }, spaceBetween: 30, breakpoints: {
    992: {
      slidesPerView: 2,
    }, 1400: {
      slidesPerView: 3,
    },
  },
});

// options for intersection observer
const options = {
  rootMargin: "10px", threshold: 0.7,
};

// intersection observer object
const observer = new IntersectionObserver(observerCallback, options);

// opening and closing the mobile hamburger menu
let toggleMobileMenu = () => {
  navToggleBtn.classList.toggle("nav__toggle--open");
  if (isMobileMenuOpen) {
    navMobileMenu.style.right = "-150%";
    navMobileMenu.style.left = "auto";
    isMobileMenuOpen = false;
  } else {
    navMobileMenu.style.left = "auto";
    navMobileMenu.style.right = "0";
    isMobileMenuOpen = true;
  }
};

// custom functions
function removeActiveClass(className) {
  $.querySelector(`.${className}`).classList.remove(`${className}`);
}

function addClass(element, className) {
  element.classList.add(`${className}`);
}

function darkModeFunction() {

}

// activating the selected tab and its related content
function tabContentActivator(// the array in which all the tab elements are stored
  tabsArray, // the class that activates the clicked on tab
  activatingTabClass, // the class tha activates the clicked on content
  activatingContentClass) {
  // to add the click event on each of the tab elements in the tabsArray
  tabsArray.forEach((eachTab) => {
    eachTab.addEventListener("click", function () {
      // getting the value of the tag of each tab
      let tabId = this.getAttribute("tag");
      // selecting the related content of the selected tab
      let tabsContent = $.querySelector(`#${tabId}`);
      // selecting the active tab and its content and
      // deactivating the previous active tab and its content
      removeActiveClass(activatingTabClass);
      removeActiveClass(activatingContentClass);
      // activating the clicked on (desired) tab and its content
      addClass(this, activatingTabClass);
      addClass(tabsContent, activatingContentClass);
    });
  });
}

function observerCallback(allSections) {
  allSections.map((section) => {
    // class name of the intersecting section
    let sectionClassName = section.target.className;
    if (section.isIntersecting) {
      // selecting the li item that has the same data-section attr as the section class name
      let sectionsMenuLink = $.querySelector(`.menu__link[data-section=${sectionClassName}]`);
      // removing the active class from last element which is deactivated now
      removeActiveClass("menu__link--active");
      // adding the class to the activated element
      addClass(sectionsMenuLink, "menu__link--active");
    }
  });
}

// for resume section tabs
tabContentActivator(resOption, "resume-list__option--active", "resume-content--selected");
// for portfolio section tabs
tabContentActivator(portfolioCategoryItems, "portfolio-category__item--active", "portfolio-content--show");

// check to see if dark mode was activated in the last visit
window.addEventListener("load", function (event) {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    addClass($.documentElement, "dark-theme");
    changeThemeSwitch.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`;
  }
})

navToggleBtn.addEventListener("click", toggleMobileMenu);

changeThemeSwitch.addEventListener("click", function () {
  $.documentElement.classList.toggle("dark-theme");
  if ($.documentElement.classList.contains("dark-theme")) {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 12c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5S7 9.2 7 12zM12 9c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3S10.3 9 12 9zM13 5V3c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6.4 1 1 1S13 5.6 13 5zM19.1 4.9c-.4-.4-1-.4-1.4 0l-1.4 1.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4C19.5 6 19.5 5.3 19.1 4.9zM21 11h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1S21.6 11 21 11zM17.7 16.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4c.2.2.5.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4L17.7 16.2zM11 19v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1S11 18.4 11 19zM4.9 19.1c.2.2.5.3.7.3s.5-.1.7-.3l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.4 1.4C4.5 18 4.5 18.7 4.9 19.1zM2 12c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1H3C2.4 11 2 11.4 2 12zM6.3 4.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.4 1.4C6.5 8 6.8 8.1 7.1 8.1S7.6 8 7.8 7.8c.4-.4.4-1 0-1.4L6.3 4.9z"/></svg>`;
    localStorage.setItem('theme', 'dark')
  } else {
    this.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.3,4.9c0.4-0.2,0.6-0.7,0.5-1.1S12.2,3,11.7,3C6.8,3.1,3,7.1,3,12c0,5,4,9,9,9c3.8,0,7.1-2.4,8.4-5.9c0.2-0.4,0-0.9-0.4-1.2c-0.4-0.3-0.9-0.2-1.2,0.1c-1,0.9-2.3,1.4-3.7,1.4c-3.1,0-5.7-2.5-5.7-5.7C9.4,7.8,10.5,5.9,12.3,4.9zM15.1,17.4c0.5,0,1,0,1.4-0.1C15.3,18.4,13.7,19,12,19c-3.9,0-7-3.1-7-7c0-2.5,1.4-4.8,3.5-6c-0.7,1.1-1,2.4-1,3.8C7.4,14,10.9,17.4,15.1,17.4z"/></svg>`;
    localStorage.setItem('theme', 'light')
  }
});

// observer for all sections
allSections.forEach(function (section) {
  observer.observe(section);
});

// scrolling mechanism for main nav menu
menuItemsNodeList.forEach((menuItem) => {
  menuItem.addEventListener("click", function (event) {
    event.preventDefault();
    removeActiveClass("menu__link--active");
    addClass(menuItem, "menu__link--active");
    let sectionClass = menuItem.getAttribute("data-section");
    let sectionTopOffset = $.querySelector(`.${sectionClass}`).offsetTop;
    window.scrollTo({
      top: sectionTopOffset - 200, behavior: "smooth",
    });
    console.log(sectionTopOffset);
  });
});
