const $ = document;
let navToggleBtn = $.querySelector(".nav__toggle-icon");
let navMobileMenu = $.querySelector(".nav__mobile-menu");
let isMobileMenuOpen = false;

let toggleMobileMenu = () => {
  navToggleBtn.classList.toggle('nav__toggle--open');

  if (isMobileMenuOpen) {
    // navToggleBtn.classList.remove("nav__toggle--open");
    navMobileMenu.style.left = "-150%";
    navMobileMenu.style.right = "auto";
    isMobileMenuOpen = false;
  } else {
    // navToggleBtn.classList.add("nav__toggle--open");
    navMobileMenu.style.left = "0";
    navMobileMenu.style.right = "0";
    isMobileMenuOpen = true;
  }
};

// navToggleBtn.addEventListener("toggle", toggleMobileMenu);
navToggleBtn.addEventListener('click', toggleMobileMenu)