// Capture DOM in variable
const home_samplePhotoContainer = document.querySelector('.sample-photo__container');
const overlay_div = document.querySelector('#sample-overlay');
const body = document.querySelector('.body');
const nav_ul = document.querySelector('.nav__ul');
const nav_a = nav_ul.querySelectorAll('.nav__link');
const navbar = document.querySelector('.nav');
const navbarOffset = navbar.offsetTop;

// Fix nav bar function
function navbarFix() {
    if (window.scrollY >= navbarOffset) {
        navbar.classList.add('nav__bg');
        navbar.classList.add('nav--fixed');
    } else {
        navbar.classList.remove('nav--fixed');
        navbar.classList.remove('nav__bg');
    }
}


// Add overlay on home page sample-photo section
function addOverlay() {
    console.log('enter')
    overlay_div.classList.add('sample-photo__overlay');
}
// Remove overlay on home page sample-photo section
function removeOverlay() {
    console.log('leave')
    overlay_div.classList.remove('sample-photo__overlay');
}

// remove active class item in nav list
function removeClass() {
    return nav_a.forEach(item =>
        item.classList.remove('nav__link--active')
    )

}

// Function to remove & add active class
function addNavActive(e) {
    console.log(e.target)
    removeClass();
    e.target.classList.add('nav__link--active');
}

// Event listener for scroll
window.addEventListener('scroll', navbarFix)

// For add overlay on hover effect
home_samplePhotoContainer.addEventListener('mouseenter', addOverlay);
home_samplePhotoContainer.addEventListener('mouseleave', removeOverlay);
//nav link event listener on parent ul
nav_ul.addEventListener('click', addNavActive)