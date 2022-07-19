$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "에세이" },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 10; i++) {
            $(".tdimg").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".tdtext").eq(i).append("<h4>" + msg.documents[i].contents.substring(0,37) + "</h4>");
            // $(".tdtext").eq(i).append("<h4>" + msg.documents[i].title.substring(0,15) + "</h4>");
            $(".tdtext").eq(i).append("<p>" + msg.documents[i].authors[0] + "</p>");
            var content = msg.documents[i].contents;

            if(content.length> 30){
                $(".tdtext h3").eq(i).append("...");
            }

        }
    });

//  slide

$('#todayBook').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '#todayBook',
    dots: true,
    focusOnSelect: true
  });