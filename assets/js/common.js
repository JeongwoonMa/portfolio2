'use strict';

const header = document.querySelector('#header')
const btnOpen = document.querySelector('.btn-open');

btnOpen.addEventListener('click', () => {
    header.classList.toggle('show');
})
