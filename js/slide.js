$(document).ready(function () {
    $(".slideIB").not(":first").css({ "flex-grow": "none", "flex-basis": "none" });



});

function prev() {
    $(".slideIB:last").prependTo("#slideImgBox").css({ "flex-grow": "none", "flex-basis": "none" });
    $(".slideIB:first").stop().animate({ "flex-grow": "1", "flex-basis": "0" }, "slow", "linear");
    $(".slideIB").eq(1).stop().animate({ "flex-grow": "0", "flex-basis": "40px" }, "slow", "linear");
    $(".slideIB").eq(2).stop().animate({ "flex-grow": "0", "flex-basis": "40px" }, "slow", "linear");
}

function next() {
    $(".slideIB:first").stop().animate({ "flex-grow": "none", "flex-basis": "none" }, "slow", "linear");
    $(".slideIB").eq(1).stop().animate({ "flex-grow": "1", "flex-basis": "0" }, "slow", "linear", function () {
        $(".slideIB:first").appendTo("#slideImgBox");
        $(".slideIB:last").css({ "flex-grow": "0", "flex-basis": "40px" });
    });
}

setInterval(next, 5000);

$(".slideprev").on("click", function () {
    prev();
});

$(".slidenext").on("click", function () {
    next();
});