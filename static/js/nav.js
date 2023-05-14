const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav ul li a");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add("close");
        nav.classList.add("show");
        navLinks.forEach((link) => link.addEventListener("click", closeMenu));
        showMenu = true;
    } else {
        menuBtn.classList.remove("close");
        nav.classList.remove("show");
        navLinks.forEach((link) =>
            link.removeEventListener("click", closeMenu)
        );
        showMenu = false;
    }
}

function closeMenu() {
    menuBtn.classList.remove("close");
    nav.classList.remove("show");
    navLinks.forEach((link) => link.removeEventListener("click", closeMenu));
    showMenu = false;
}
