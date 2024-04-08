const $ = document;
const navToggleBtn = $.querySelector(".nav__toggle-icon");
const navMobileMenu = $.querySelector(".nav__mobile-menu");
const resOption = $.querySelectorAll(".resume-list__option");
const portfolioCategoryItems = $.querySelectorAll(".portfolio-category__item");
const menuItemsNodeList = $.querySelectorAll(".menu__link");
const allSections = $.querySelectorAll("section");
const isMobileMenuOpen = false;

// Swiper module
const swiper = new Swiper(".swiper", {
	pagination: {
		el: ".swiper-pagination",
	},
	spaceBetween: 30,
	breakpoints: {
		992: {
			slidesPerView: 2,
		},
		1400: {
			slidesPerView: 3,
		},
	},
});

const options = {
	rootMargin: "10px",
	threshold: 0.7,
};

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

function removeActiveClass(className) {
	$.querySelector(`.${className}`).classList.remove(`${className}`);
}
function addClass(element, className) {
	element.classList.add(`${className}`);
}

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
			let sectionsMenuLink = $.querySelector(
				`.menu__link[data-section=${sectionClassName}]`
			);
			// removing the active class from last element which is deactivated now
			removeActiveClass("menu__link--active");
			// adding the class to the activated element
			addClass(sectionsMenuLink, "menu__link--active")
		}
	});
}

allSections.forEach(function (section) {
	observer.observe(section);
});

// resume section tabs
tabContentActivator(
	resOption,
	"resume-list__option--active",
	"resume-content--selected"
);
// portfolio section tabs
tabContentActivator(
	portfolioCategoryItems,
	"portfolio-category__item--active",
	"portfolio-content--show"
);
navToggleBtn.addEventListener("click", toggleMobileMenu);

menuItemsNodeList.forEach((menuItem) => {
	menuItem.addEventListener("click", function (event) {
		event.preventDefault();
		removeActiveClass("menu__link--active");
		addClass(menuItem, "menu__link--active");
		let sectionClass = menuItem.getAttribute("data-section");
		let sectionTopOffset = $.querySelector(`.${sectionClass}`).offsetTop;
		window.scrollTo({
			top: sectionTopOffset - 200,
			behavior: "smooth",
		});
		console.log(sectionTopOffset);
	});
});
