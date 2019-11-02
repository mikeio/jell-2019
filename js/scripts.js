$(document).ready(function(){

	$('.menu').on('click', function() {
		$('body').toggleClass('fixed');
        $('.menu').toggleClass('menu--open');
        $('.nav-mobile').toggleClass('nav-mobile--open');
        $('.main').toggleClass('blur');
    });
});

new WOW().init();