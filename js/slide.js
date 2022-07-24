$(document).ready(function () {
    $(".slideIB").not(":first").css({ "flex-grow": "0", "flex-basis": "46" });



});

function prev() {
    $(".slideIB:last").prependTo("#slideImgBox").css({ "flex-grow": "0", "flex-basis": "46px", "display": "block" });
    $(".slideIB:first").stop().animate({ "flex-grow": "1", "flex-basis": "0", "display": "block" }, "slow", "linear");
    $(".slideIB").eq(2).stop().animate({ "flex-grow": "0", "flex-basis": "46px", "display": "block" }, "slow", "linear");
    $(".slideIB").eq(1).stop().animate({ "flex-grow": "0", "flex-basis": "46px", "display": "block" }, "slow", "linear");
    $(".slideIB").eq(3).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
    $(".slideIB").eq(4).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
    $(".slideIB").eq(5).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
    $(".slideIB").eq(6).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
    $(".slideIB").eq(7).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
    $(".slideIB").eq(8).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
    $(".slideIB").eq(9).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
}

function next() {
    $(".slideIB:first").stop().animate({ "flex-grow": "0", "flex-basis": "0", "display": "none" }, "slow", "linear");
    $(".slideIB").eq(1).stop().animate({ "flex-grow": "1", "flex-basis": "0", "display": "block" }, "slow", "linear", function () {
        $(".slideIB:first").appendTo("#slideImgBox");
        $(".slideIB").eq(2).css({ "flex-grow": "0", "flex-basis": "46px", "display": "block" }, 700);
        $(".slideIB").eq(1).css({ "flex-grow": "0", "flex-basis": "46px", "display": "block" }, 700);
        $(".slideIB").eq(3).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
        $(".slideIB").eq(4).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
        $(".slideIB").eq(5).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
        $(".slideIB").eq(6).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
        $(".slideIB").eq(7).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
        $(".slideIB").eq(8).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
        $(".slideIB").eq(9).css({ "flex-grow": "0", "flex-basis": "0", "display": "none" });
    });
}

setInterval(next, 9000);

$(".slideprev").on("click", function () {
    prev();
});

$(".slidenext").on("click", function () {
    next();
});