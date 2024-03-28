const $ = document;
let navToggleBtn = $.querySelector(".nav__toggle-icon");
let navMobileMenu = $.querySelector(".nav__mobile-menu");
let resOption = $.querySelectorAll(".resume-list__option");
let portfolioCategoryItems = $.querySelectorAll(".portfolio-category__item");
let isMobileMenuOpen = false;

// Swiper module
const swiper = new Swiper(".swiper", {
	pagination: {
		el: ".swiper-pagination",
	},
	breakpoints: {
		992: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1400: {
			slidesPerView: 3,
			spaceBetween: 50,
		},
	},
});

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

// activating the selected tab and its related content
function tabContentActivator(
	// the array in which all the tab elements are stored
	tabsArray,
	// the class tha activates the clicked on tab
	activatingTabClass,
	// the class tha activates the clicked on content
	activatingContentClass
) {
// to add the click event on each of the tab elements in the tabsArray
	tabsArray.forEach((eachTab) => {
		eachTab.addEventListener("click", function () {
			// getting the value of the tag of each tab
			let tabId = this.getAttribute("tag");
			// selecting the related content of the selected tab
			let tabsContent = $.querySelector(`#${tabId}`);
			// selecting the active tab and its content
			let activeTab = $.querySelector(`.${activatingTabClass}`);
			let activeContent = $.querySelector(`.${activatingContentClass}`);
			// deactivating the previous active tab and its content
			activeTab.classList.remove(`${activatingTabClass}`);
			activeContent.classList.remove(`${activatingContentClass}`);
			// activating the clicked on (desired) tab and its content
			this.classList.add(`${activatingTabClass}`);
			tabsContent.classList.add(`${activatingContentClass}`);
		});
	});
}
// resume section tabs
tabContentActivator(resOption, "resume-list__option--active", "resume-content--selected")
// portfolio section tabs
tabContentActivator(portfolioCategoryItems, "portfolio-category__item--active", "portfolio-content--show")
navToggleBtn.addEventListener("click", toggleMobileMenu);
