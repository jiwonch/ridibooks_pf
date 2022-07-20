$(document).ready(function(){
    $('.bsnext').click(function(){
        $('.bestsellerbook').stop().animate({marginLeft:-1110},800);
        $('.bsnext').fadeOut(200);
        $('.bsprev').fadeIn(200);
    });

    $('.bsprev').click(function(){
        $('.bestsellerbook').stop().animate({marginLeft:0},800);
        $('.bsnext').fadeIn(200);
        $('.bsprev').fadeOut(200);
    });
});