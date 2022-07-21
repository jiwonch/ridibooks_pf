$(document).ready(function () {
    var index = 0;

    function prev() {
        if (index == 0) {
            $('#nBook').stop().animate({ marginLeft: -1110});
            $('.newprev').fadeIn(300);
            index++;
        } else if (index == 1){
            $('#nBook').stop().animate({ marginLeft: -1110*2});
            $('.newprev').fadeIn(300);
            index++;
        } else if (index == 2) {
            $('#nBook').stop().animate({ marginLeft: -1110*2-740 });
            $('.newnext').fadeOut(300);
        }
    }

    function next() {
        if (index == 2) {
            $('#nBook').stop().animate({ marginLeft: -1850 });
            $('.newnext').fadeIn(300);
            index--;
        } else if(index == 1){
            $('#nBook').stop().animate({ marginLeft: -740 });
            index--;
        } else if (index == 0) {
            $('#nBook').stop().animate({ marginLeft: 0 });
            $('.newprev').fadeOut(300);
        }
    }

    $('.newnext').click(function () {
        prev();
    });

    $('.newprev').click(function () {
        next();
    });
});