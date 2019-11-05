$(document).ready(function(){

	$('.menu').on('click', function() {
		$('body').toggleClass('body--fixed');
        $('.menu').toggleClass('menu--open');
        $('.nav-mobile').toggleClass('nav-mobile--open');
    });

});

$( window ).on("load", function() {

    setTimeout(function() {
      $('.loading').addClass('loading--ready');
    }, 3000);

    new WOW().init();

});
