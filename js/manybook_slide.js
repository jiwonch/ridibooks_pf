$(document).ready(function(){
    $('.mynext').click(function(){
        $('.manybook').stop().animate({marginLeft:-1110},800);
        $('.mynext').fadeOut(200);
        $('.myprev').fadeIn(200);
    });

    $('.myprev').click(function(){
        $('.manybook').stop().animate({marginLeft:0},800);
        $('.mynext').fadeIn(200);
        $('.myprev').fadeOut(200);
    });
});