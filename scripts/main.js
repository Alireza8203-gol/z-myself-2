const $ = document;
let navToggleBtn = $.querySelector(".nav__toggle-icon");
let navMobileMenu = $.querySelector(".nav__mobile-menu");
let resOption = $.querySelectorAll(".resume-list__option");
let portfolioCategoryItems = $.querySelectorAll(".portfolio-category__item");
let isMobileMenuOpen = false;

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

resOption.forEach((option) => {
	option.addEventListener("click", function () {
		let tabId = this.id;
		let tabsContent = $.querySelectorAll(`#${tabId}`);
		let activeTab = $.querySelector(".resume-list__option--active");
		let activeContent = $.querySelector(".resume-content--selected");
		activeTab.classList.remove("resume-list__option--active");
		this.classList.add("resume-list__option--active");
		activeContent.classList.remove("resume-content--selected");
		tabsContent[1].classList.add("resume-content--selected");
	});
});

portfolioCategoryItems.forEach((item) => {
	item.addEventListener("click", () => {
		let selectedTab = $.querySelector(".portfolio-category__item--active");
		selectedTab.classList.remove("portfolio-category__item--active");
		item.classList.add("portfolio-category__item--active");
	});
});

// navToggleBtn.addEventListener("toggle", toggleMobileMenu);
navToggleBtn.addEventListener("click", toggleMobileMenu);

let cardsNodeList = $.querySelectorAll(".prototype");
let cardsArray = Array.from(cardsNodeList);
let allBtns = $.querySelectorAll(".select-btn");

allBtns.forEach((btn) => {
	btn.addEventListener("click", function (event) {
		let btnTag = this.getAttribute("tag");
		let filteredCards = cardsArray.filter((card) => {
			return card.getAttribute("tag") === btnTag;
		});
		console.log(filteredCards);
	});
});

/* let imageArray = [
	{id: 1, tag: "illustration", src: "./images/portfolio-left.jpg"},
	{id: 2, tag: "animation", src: "./images/portfolio-middle.jpg"},
	{id: 4, tag: "web-ui", src: "./images/portfolio-right.jpg"},
	{id: 3, tag: "social-media", src: "./images/portfolio-left.jpg"},
	{id: 5, tag: "illustration", src: "./images/portfolio-middle.jpg"},
	{id: 6, tag: "print-design", src: "./images/portfolio-left.jpg"},
	{id: 7, tag: "app-ui", src: "./images/portfolio-right.jpg"},
	{id: 8, tag: "web-ui", src: "./images/portfolio-right.jpg"},
	{id: 9, tag: "social-media", src: "./images/portfolio-middle.jpg"}
];

let currentPage = 1
let imageCount = 3

function sliderMachine() {
	let cardTemplate = `
	<div class="card">
	<img src=${imageArray[1]} alt="portfolio" class="card__img">
	</div>
	`;
} */

let cardsCount = $.querySelectorAll(".card").length;
const paginationWrapper = $.querySelector(".pagination");
const cardsPerPage = 3;

function paginationEventHandler (elem) {
	elem.classList.add("resume-list__option--active");
}

for (let index = 0; index < cardsCount / cardsPerPage; index++) {
	let paginationDiv = $.createElement("div");
	paginationDiv.addEventListener('click', function () {
		let activePage = $.querySelector(".pagination__div--active");
		activePage.classList.remove("pagination__div--active")
		paginationDiv.classList.add("pagination__div--active");
	})
}
