const $ = document;
let navToggleBtn = $.querySelector(".nav__toggle-icon");
let navMobileMenu = $.querySelector(".nav__mobile-menu");
let resOptionCircleArr = $.querySelectorAll(".resume-option__circle");
let isMobileMenuOpen = false;

let toggleMobileMenu = () => {
	navToggleBtn.classList.toggle("nav__toggle--open");
	if (isMobileMenuOpen) {
		navMobileMenu.style.left = "-150%";
		navMobileMenu.style.right = "auto";
		isMobileMenuOpen = false;
	} else {
		navMobileMenu.style.left = "0";
		navMobileMenu.style.right = "0";
		isMobileMenuOpen = true;
	}
};

resOptionCircleArr.forEach((item) => {
	item.parentElement.addEventListener("click", () => {
    let resOpTitle = item.nextSibling.nextSibling.nextSibling.nextSibling;
    console.log(resOpTitle);
    resOptionCircleArr.forEach((input) => {
      let resOpTitle = input.nextSibling.nextSibling.nextSibling.nextSibling;
      input.style.width = "5rem"
      resOpTitle.style.color = "#333333"
    })
    item.style.width = "100%";
    resOpTitle.style.color = "#fff"
  });
});

// navToggleBtn.addEventListener("toggle", toggleMobileMenu);
navToggleBtn.addEventListener("click", toggleMobileMenu);
