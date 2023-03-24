const nav = document.querySelector(".flex-nav");
const navBtn = document.querySelector(".burger-icon");
const allLinkBtn = document.querySelectorAll(".link");

const handleNav = () => {
	nav.classList.toggle("nav--active");
    nav.classList.toggle("flex-nav");

    allLinkBtn.forEach((item) => {
		item.addEventListener("click", () => {
			nav.classList.remove("nav--active");
            nav.classList.add("flex-nav");
		});
	});
};

navBtn.addEventListener("click", handleNav);