$(function(){
    $.get("./book_detail.txt", function(data){
        $("#book_intro").html(data);

        $(".bookdetailMore").click(function(){
            $(".bookdetailMore").hide();
            $(".bookdetailFolder").show();
            $(".bookdetailNone").slideDown();
        });
    
        $(".bookdetailFolder").click(function(){
            $(".bookdetailMore").show();
            $(".bookdetailFolder").hide();
            $(".bookdetailNone").slideUp();
        });
    })
});

$(function(){
    $.get("./publishing_review.txt", function(data){
        $("#publishing").html(data);

        $(".publishingreviewMore").click(function(){
            $(".publishingreviewMore").hide();
            $(".publishingreviewFolder").show();
            $(".publishingreviewNone").slideDown();
        });
    
        $(".publishingreviewFolder").click(function(){
            $(".publishingreviewMore").show();
            $(".publishingreviewFolder").hide();
            $(".publishingreviewNone").slideUp();
        });
    })
});

$(function(){
    $.get("./profile.txt", function(data){
        $("#profile").html(data);
    });
});

$(function(){
    $.get("./author_intro.txt", function(data){
        $("#author_intro").html(data);
    })
});

$(function(){
    $.get("./sub_index.txt", function(data){
        $("#sub_index").html(data);

        $(".subindexMore").click(function(){
            $(".subindexMore").hide();
            $(".subindexFolder").show();
            $(".subindexNone").slideDown();
        });
    
        $(".subindexFolder").click(function(){
            $(".subindexMore").show();
            $(".subindexFolder").hide();
            $(".subindexNone").slideUp();
        });
    })
});