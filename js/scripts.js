$(document).ready(function(){

	$('.menu').on('click', function() {
		$('body').toggleClass('fixed');
        $('.menu').toggleClass('menu-active');
        $('.nav__mobile').toggleClass('nav__mobile-open');
    });

});