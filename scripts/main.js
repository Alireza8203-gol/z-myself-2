const $ = document;
let navToggleBtn = $.querySelector(".nav__toggle-icon");
let navMobileMenu = $.querySelector(".nav__mobile-menu");
let resOption = $.querySelectorAll(".resume-list__option");
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
	option.addEventListener("click", function () {
		let tabId = this.id;
		let tabsContent = $.querySelectorAll(`#${tabId}`);
		let activeTab = $.querySelector(".resume-list__option--active")
		let activeContent = $.querySelector(".resume-content--selected")
		activeTab.classList.remove("resume-list__option--active");
		this.classList.add("resume-list__option--active");
		activeContent.classList.remove("resume-content--selected");
		tabsContent[1].classList.add("resume-content--selected");
		// console.log(searchedIds[1]);
	});
});

// navToggleBtn.addEventListener("toggle", toggleMobileMenu);
navToggleBtn.addEventListener("click", toggleMobileMenu);
