$(document).ready(function(){
    $(".open-btn").click(function(){
        $("#side-box-small").removeClass("hide-nav");
    });

    $(".close-btn").click(function(){
        $("#side-box-small").addClass("hide-nav");
    });

    $("#side-box-small a").click(function(){
        $("#side-box-small").addClass("hide-nav");
    });
});