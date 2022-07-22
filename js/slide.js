$(document).ready(function () {
    $(".slideIB").not(":first").css({ "flex-grow": "0", "flex-basis": "46" });



});

function prev() {
    $(".slideIB:last").prependTo("#slideImgBox").css({ "flex-grow": "0", "flex-basis": "46px" });
    $(".slideIB:first").stop().animate({ "flex-grow": "1", "flex-basis": "0" }, "slow", "linear");
    $(".slideIB").eq(2).stop().animate({ "flex-grow": "0", "flex-basis": "46px" }, "slow", "linear");
    $(".slideIB").eq(1).stop().animate({ "flex-grow": "0", "flex-basis": "46px" }, "slow", "linear");
    $(".slideIB").eq(3).css({ "flex-grow": "0", "flex-basis": "0" });
    $(".slideIB").eq(4).css({ "flex-grow": "0", "flex-basis": "0" });
    $(".slideIB").eq(5).css({ "flex-grow": "0", "flex-basis": "0" });
    $(".slideIB").eq(6).css({ "flex-grow": "0", "flex-basis": "0" });
    $(".slideIB").eq(7).css({ "flex-grow": "0", "flex-basis": "0" });
    $(".slideIB").eq(8).css({ "flex-grow": "0", "flex-basis": "0" });
    $(".slideIB").eq(9).css({ "flex-grow": "0", "flex-basis": "0" });
}

function next() {
    $(".slideIB:first").stop().animate({ "flex-grow": "0", "flex-basis": "0" }, "slow", "linear");
    $(".slideIB").eq(1).stop().animate({ "flex-grow": "1", "flex-basis": "0" }, "slow", "linear", function () {
        $(".slideIB:first").appendTo("#slideImgBox");
        $(".slideIB").eq(2).css({ "flex-grow": "0", "flex-basis": "46px" });
        $(".slideIB").eq(1).css({ "flex-grow": "0", "flex-basis": "46px" });
        $(".slideIB").eq(3).css({ "flex-grow": "0", "flex-basis": "0" });
        $(".slideIB").eq(4).css({ "flex-grow": "0", "flex-basis": "0" });
        $(".slideIB").eq(5).css({ "flex-grow": "0", "flex-basis": "0" });
        $(".slideIB").eq(6).css({ "flex-grow": "0", "flex-basis": "0" });
        $(".slideIB").eq(7).css({ "flex-grow": "0", "flex-basis": "0" });
        $(".slideIB").eq(8).css({ "flex-grow": "0", "flex-basis": "0" });
        $(".slideIB").eq(9).css({ "flex-grow": "0", "flex-basis": "0" });
    });
}

setInterval(next, 5000);

$(".slideprev").on("click", function () {
    prev();
});

$(".slidenext").on("click", function () {
    next();
});