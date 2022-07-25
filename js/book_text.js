$(function(){
    $.get("../book_detail.txt", function(data){
        $("#book_intro").html(data);
    })
});

$(function(){
    $.get("../publishing_review.txt", function(data){
        $("#publishing").html(data);
    })
});

$(function(){
    $.get("../profile.txt", function(data){
        $("#profile").html(data);
    });
});

$(function(){
    $.get("../author_intro.txt", function(data){
        $("#author_intro").html(data);
    })
});

$(function(){
    $.get("../sub_index.txt", function(data){
        $("#sub_index").html(data);
    })
});