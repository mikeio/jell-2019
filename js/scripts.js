$(document).ready(function(){

	$('.menu').on('click', function() {
		$('body').toggleClass('fixed');
        $('.menu').toggleClass('menu--open');
        $('.nav-mobile').toggleClass('nav-mobile--open');
    });
});

new WOW().init();