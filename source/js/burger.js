var burger = document.querySelector('.page-header__icon');
var menu = document.querySelector('.page-header__nav');
var close = document.querySelector('.page-header__icon--close');

burger.addEventListener('click', function (event) {
event.preventDefault();
menu.classList.add('menu');
});

close.addEventListener('click', function (event) {
event.preventDefault();
 if (menu.classList.contains('menu')) {
     menu.classList.remove('menu');
 }
});

window.addEventListener('keydown', function(event) {
if (event.keyCode == 27 && menu.classList.contains('menu')) {
menu.classList.remove('menu');
 }
}, false);