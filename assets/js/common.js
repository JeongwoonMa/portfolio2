"use strict";

// scroll
const lenis = new Lenis({
    autoRaf: true,
    duration: 1.2,
});

// header관련
const header = document.querySelector("#header");
const btnOpen = document.querySelector(".btn-open");
btnOpen.addEventListener("click", () => {
    header.classList.toggle("show");
});
document.addEventListener("click", (e) => {
    if (!header.contains(e.target) && !btnOpen.contains(e.target)) {
        header.classList.remove("show");
    }
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        header.classList.remove("show");
    }
});
let lastScrollY = window.scrollY;
const thresholdPercent = 0.3;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const threshold = window.innerHeight * thresholdPercent;

    if (scrollTop > lastScrollY && scrollTop > threshold) {
        header.classList.add("hide");
        header.classList.remove("show");
    } else if (scrollTop < lastScrollY) {
        header.classList.remove("hide");
    }
    lastScrollY = scrollTop;
});

// intersectionobserver
const section = document.querySelectorAll("section");
const sectionOptions = {
    rootMargin: "-30%",
    threshold: [0, 1],
};
const sectionObserver = new IntersectionObserver(sectionEffect, sectionOptions);
function sectionEffect(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}

section.forEach((e) => {
    sectionObserver.observe(e);
});
