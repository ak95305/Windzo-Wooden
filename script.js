let hamIcon = document.querySelector('.nav_mob_icon');
let mobNav = document.querySelector('.mob_nav_menu');
let closeNav = document.querySelector('.close_mob_nav');
hamIcon.addEventListener('click', () => {
    mobNav.classList.add('active');
});
closeNav.addEventListener('click', () => {
    mobNav.classList.add('slide_nav');
    setTimeout(function() { 
        mobNav.classList.remove('active');
        mobNav.classList.remove('slide_nav');
     }, 500);

});


$(document).ready(function () {
    $(".owl-carousel.fade_carousel").owlCarousel({
        animateOut: 'fadeOut',
        loop: true,
        margin: 10,
        nav: false,
        items: 1,
        autoplay: true,
    });
});



// Image Move
var scene1 = document.getElementById('scene1');
var parallax1 = new Parallax(scene1);
var scene2 = document.getElementById('scene2');
var parallax2 = new Parallax(scene2);
var scene3 = document.getElementById('scene3');
var parallax3 = new Parallax(scene3);



// Animation on Scroll
AOS.init();