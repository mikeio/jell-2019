$(document).ready(function(){

	$('.menu, .nav-mobile ul li a').on('click', function() {
		$('body').toggleClass('body--fixed');
        $('.menu').toggleClass('menu--open');
        $('.nav-mobile').toggleClass('nav-mobile--open');
    });

    new WOW().init();

});

$( window ).on("load", function() {

    // setTimeout(function() {
    //   $('.loading').addClass('loading--ready');
    // }, 1000);

});
