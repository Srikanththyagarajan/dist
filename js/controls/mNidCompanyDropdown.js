
/*var setDropdownWithId = function () {
    var dropDown = $(".mDropDown");
    //dropDown.find("button span").text("");
    //var companyId = window.location.search.split("=")[1];
    dropDown.find("li").each(function () {
        var link = $(this);
        var compId = link.attr("href").split("=")[1];
        /!*if (compId == companyId) {
            var text = link.text();
            dropDown.find("button span").text(text);
        }*!/
        link.on("click", function () {
           window.location.href = $(this).attr("href");
        });
    });
};*/

var initBannerDropDowns = function () {
    $('.bannerContainer .mDropDown').on('click touchstart', function (event) {
        event.stopPropagation();
        $('.dropdown-menu', $(this)).show();
    });

    $('body').on('click touchstart', function (event) {
        event.stopPropagation();
        $('.mDropDown .dropdown-menu').hide();
    });

};

$(document).ready(function () {
    if(typeof(hidenid)!="undefined"){return ;}
    /*setDropdownWithId();*/
    initBannerDropDowns();
});

