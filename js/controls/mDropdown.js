var initDropDowns = function () {

    $('.mDropDown li').on('click', function () {
        var thisElement = $(this);
        var dropDown = thisElement.parents(".mDropDown");
        var spanBtn = $(".btn-ghost-white span", dropDown);
        spanBtn.html(thisElement.html());
    });

    $('.mDropDown').hover(function(){
        $(".btn-ghost-white").css('background-color', '#676767');
    });
    $('.mDropDown').mouseleave(function(){
        $(".btn-ghost-white").css('background-color', '#999999');
    });
};

$(document).ready(function () {
    initDropDowns();
});

