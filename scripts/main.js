const $ = document;
let navToggleBtn = $.querySelector(".nav__toggle-icon");
let navMobileMenu = $.querySelector(".nav__mobile-menu");
let resOption = $.querySelectorAll(".resume-list__option");
let resOptionCircles = $.querySelectorAll(".resume-list__circle");
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

resOption.forEach((option) => {
	option.addEventListener("click", (e) => {
		e.stopPropagation();
		let circle = e.target;
		console.log(circle);
	}, true);
	// console.log(option);
});

// navToggleBtn.addEventListener("toggle", toggleMobileMenu);
navToggleBtn.addEventListener("click", toggleMobileMenu);
