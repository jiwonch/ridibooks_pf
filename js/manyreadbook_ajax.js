$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "읽는", size: 50 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 19; i++) {
            $(".myBookImg a").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".myBookText a").eq(i).append("<h4>" + msg.documents[i].title.substring(0, 13) + "</h4>");
            $(".myBookText p").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if (title.length > 13) {
                $(".myBookText a h4").eq(i).append("...");
            }

        }
    });