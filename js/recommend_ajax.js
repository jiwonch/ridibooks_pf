// part1 문학/소설
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "소설", size: 50 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 13; i++) {
            $(".rbi1 a").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".rbt1 a").eq(i).append("<h4>" + msg.documents[i].title.substring(0,14) + "</h4>");
            $(".rbt1 p").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if(title.length> 14){
                $(".rbt1 a h4").eq(i).append("...");
            }

        }
    });

// part2  인문/교양
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "교양", size: 50 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 13; i++) {
            $(".rbi2 a").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".rbt2 a").eq(i).append("<h4>" + msg.documents[i].title.substring(0,14) + "</h4>");
            $(".rbt2 p").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if(title.length> 14){
                $(".rbt2 a h4").eq(i).append("...");
            }

        }
    });

// part3  경제/경영
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "경제", size: 50 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 13; i++) {
            $(".rbi3 a").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".rbt3 a").eq(i).append("<h4>" + msg.documents[i].title.substring(0,14) + "</h4>");
            $(".rbt3 p").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if(title.length> 14){
                $(".rbt3 a h4").eq(i).append("...");
            }

        }
    });

// part4 수험서
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "국가직", size: 50 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 13; i++) {
            $(".rbi4 a").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".rbt4 a").eq(i).append("<h4>" + msg.documents[i].title.substring(0,13) + "</h4>");
            $(".rbt4 p").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if(title.length> 13){
                $(".rbt4 a h4").eq(i).append("...");
            }

        }
    });

// part5 자기계발
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "성공", size: 50 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 13; i++) {
            $(".rbi5 a").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".rbt5 a").eq(i).append("<h4>" + msg.documents[i].title.substring(0,14) + "</h4>");
            $(".rbt5 p").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if(title.length> 14){
                $(".rbt5 a h4").eq(i).append("...");
            }

        }
    });

// part6 예술
$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query: "예술 문화", size: 50 },
    headers: { Authorization: "KakaoAK 9b457f655c7841e82fec1c92bda0e61a" }
})
    .done(function (msg) {

        for (var i = 0; i < 13; i++) {
            $(".rbi6 a").eq(i).append("<img src ='" + msg.documents[i].thumbnail + "'/>");
            $(".rbt6 a").eq(i).append("<h4>" + msg.documents[i].title.substring(0,12) + "</h4>");
            $(".rbt6 p").eq(i).append(msg.documents[i].authors[0]);
            var title = msg.documents[i].title;

            if(title.length> 12){
                $(".rbt6 a h4").eq(i).append("...");
            }

        }
    });