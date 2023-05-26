const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {
    bar1.classList.toggle("animateBar1");
    bar1.classList.toggle("animateBar1back");
    bar2.classList.toggle("animateBar2");
    bar2.classList.toggle("animateBar2back");
    bar3.classList.toggle("animateBar3");
    bar3.classList.toggle("animateBar3back");
    mobileNav.classList.toggle("openDrawer");
});