$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "어른", size: 50 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 23; i++) {
            $(".newBookImg a").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".newBookText a").eq(i).append("<h4>" + msg.documents[i].title.substring(0, 14) + "</h4>");
            $(".newBookText p").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if (title.length > 14) {
                $(".newBookText a h4").eq(i).append("...");
            }

        }
    });