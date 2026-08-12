'use strict';

// header관련
const header = document.querySelector('#header')
const btnOpen = document.querySelector('.btn-open');
btnOpen.addEventListener('click', () => {
    header.classList.toggle('show');
})

// intersectionobserver
const section = document.querySelectorAll('section');
const sectionOptions = {
    rootMargin: '-30%',
    threshold: [0,1]
}
const sectionObserver = new IntersectionObserver(sectionEffect,sectionOptions);
function sectionEffect(entries) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
        }
    })
}

section.forEach((e) => {
    sectionObserver.observe(e)
})