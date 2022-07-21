$(document).ready(function () {
    var index = 0;

    function prev() {
        if (index == 0) {
            $('#todayB').stop().animate({ marginLeft: -1110 });
            $('.tdprev').fadeIn(300);
            index++;
        } else if (index == 1) {
            $('#todayB').stop().animate({ marginLeft: -1479 });
            $('.tdnext').fadeOut(300);
        }
    }

    function next() {
        if (index == 1) {
            $('#todayB').stop().animate({ marginLeft: -369 });
            $('.tdnext').fadeIn(300);
            index--;
        } else if (index == 0) {
            $('#todayB').stop().animate({ marginLeft: 0 });
            $('.tdprev').fadeOut(300);
        }
    }

    $('.tdnext').click(function () {
        prev();
    });

    $('.tdprev').click(function () {
        next();
    });
});