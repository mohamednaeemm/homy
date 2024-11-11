// navbar scroll

window.addEventListener('scroll', function(){
    let navbar = document.querySelector('.navbar');
    if (this.window.scrollY > 20) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
})

// navbar toggle 

const menuBtn = document.getElementById('menu_btn');
const navLinks = document.getElementById('nav_links');
const menuIcons = document.querySelector('i');

menuBtn.addEventListener('click', (e) => {
    navLinks.classList.toggle('open');

    const isOpen = navLinks.classList.contains('open');
    menuIcons.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

// Animation 

const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 500
}

ScrollReveal().reveal('.left', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.para', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.row_box', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.heading1', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.box', {
    ...scrollRevealOption,
    delay: 1000
});

ScrollReveal().reveal('.right_box', {
    ...scrollRevealOption,
    delay: 800
});

ScrollReveal().reveal('.right_head', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.list_box', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.box_2', {
    ...scrollRevealOption,
});

ScrollReveal().reveal('.footer_col', {
    ...scrollRevealOption,
});