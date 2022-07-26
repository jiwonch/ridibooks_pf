// 상단 사진 가져오기
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "휴남동", size: 10 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {
        $(".img_box").append("<img src ='" + msg.documents[0].thumbnail + "'/>");

    });

// review write star red color
$(document).ready(function () {
    $(".star_1").mouseover(function () {
        $(".star_1").addClass('color_red');
    });

    $(".star_1").mouseout(function () {
        $(".star_1").removeClass('color_red');
    });

    $(".star_2").mouseover(function () {
        $(".star_1").addClass('color_red');
        $(".star_2").addClass('color_red');
    });

    $(".star_2").mouseout(function () {
        $(".star_1").removeClass('color_red');
        $(".star_2").removeClass('color_red');
    });

    $(".star_3").mouseover(function () {
        $(".star_1").addClass('color_red');
        $(".star_2").addClass('color_red');
        $(".star_3").addClass('color_red');
    });

    $(".star_3").mouseout(function () {
        $(".star_1").removeClass('color_red');
        $(".star_2").removeClass('color_red');
        $(".star_3").removeClass('color_red');
    });

    $(".star_4").mouseover(function () {
        $(".star_1").addClass('color_red');
        $(".star_2").addClass('color_red');
        $(".star_3").addClass('color_red');
        $(".star_4").addClass('color_red');
    });

    $(".star_4").mouseout(function () {
        $(".star_1").removeClass('color_red');
        $(".star_2").removeClass('color_red');
        $(".star_3").removeClass('color_red');
        $(".star_4").removeClass('color_red');
    });

    $(".star_5").mouseover(function () {
        $(".star_1").addClass('color_red');
        $(".star_2").addClass('color_red');
        $(".star_3").addClass('color_red');
        $(".star_4").addClass('color_red');
        $(".star_5").addClass('color_red');
    });

    $(".star_5").mouseout(function () {
        $(".star_1").removeClass('color_red');
        $(".star_2").removeClass('color_red');
        $(".star_3").removeClass('color_red');
        $(".star_4").removeClass('color_red');
        $(".star_5").removeClass('color_red');
    });
});

// review notice slide toggle
$(document).ready(function () {
    $("#noticeBox").hide();
    $('.review_notice').click(function () {
        $("#noticeBox").slideToggle();
    });
});

//review confirm
$(document).ready(function () {
    $("#text_review").click(function () {
        confirm("로그인 이후 이용 가능합니다. 로그인을 하시겠습니까?")
    });

    $(".star").click(function () {
        confirm("로그인 이후 이용 가능합니다. 로그인을 하시겠습니까?")
    });

    $(".reviewSubject_Btn").click(function(){
        alert("※별점을 먼저 남겨주세요!")
    });

    $(".recommendation").click(function(){
        alert("※로그인 후 다시 시도해주세요!")
    });
});

//review nav
$(document).ready(function () {
    $('.pn1_1').addClass('hover_line');
    $('.pn2_1').addClass('hover_black');

    $(".pn1_2").click(function () {
        $(".pn2_hide").hide();
        $(this).addClass('hover_line');
        $('.pn1_1').removeClass('hover_line');
        $('.pn2_1').addClass('hover_black');
        $(".pn2_2").removeClass('hover_black');
    });

    $(".pn1_1").click(function () {
        $(".pn2_hide").show();
        $(this).addClass('hover_line');
        $('.pn1_2').removeClass('hover_line');
        $('.pn2_1').addClass('hover_black');
        $(".pn2_2").removeClass('hover_black');
        $(".pn2_3").removeClass('hover_black');
        $(".pn2_4").removeClass('hover_black');
    });

    $(".pn2_1").click(function () {
        $(this).addClass('hover_black');
        $(".pn2_2").removeClass('hover_black');
        $(".pn2_3").removeClass('hover_black');
        $(".pn2_4").removeClass('hover_black');
    });

    $(".pn2_2").click(function () {
        $(this).addClass('hover_black');
        $(".pn2_1").removeClass('hover_black');
        $(".pn2_3").removeClass('hover_black');
        $(".pn2_4").removeClass('hover_black');
    });

    $(".pn2_3").click(function () {
        $(this).addClass('hover_black');
        $(".pn2_1").removeClass('hover_black');
        $(".pn2_2").removeClass('hover_black');
        $(".pn2_4").removeClass('hover_black');
    });

    $(".pn2_4").click(function () {
        $(this).addClass('hover_black');
        $(".pn2_1").removeClass('hover_black');
        $(".pn2_2").removeClass('hover_black');
        $(".pn2_3").removeClass('hover_black');
    });
});

// 구매 기준 슬라이드 토글
$(document).ready(function(){
    $(".remark").click(function(){
        if(!$('.remarkStandard').is(':visible')){
            $(".down").hide();
            $(".up").show();
            $(".remarkStandard").slideDown();
            $(".remark").addClass('standardcolor');
        } else{
            $(".up").hide();
            $(".down").show();
            $(".remarkStandard").slideUp();
            $(".remark").removeClass('standardcolor');
        }
    });
});

