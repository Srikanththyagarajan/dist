/*var navBarHeight = 0;

var initTopMenu = function () {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') &&
            location.hostname == this.hostname) {
            var target = $(this.hash);
            var navBar = $(".mNavbar .owl-carousel");
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - navBarHeight + 3
                }, 1000);
                return false;
            }
        }
    });
};

function onScroll(event){
    var navBar = $(".mNavbar .owl-carousel");
    var scrollPos = $(document).scrollTop();

    $('.item', navBar).each(function () {
        var currLink = $(this);
        var aElm = $("a", currLink);
        var refElement = $(aElm.attr("href"));
        var refElementTop = refElement.offset().top - navBarHeight;

        if (refElementTop <= scrollPos && refElementTop + refElement.height() > scrollPos) {
            $(".item", navBar).removeClass("active");
            $(this).addClass("active");
        }

    });
}*/

$(document).ready(function() {
    /*navBarHeight = $(".mNavbar").outerHeight();

    var owl = $("#owl-carousel");
    owl.owlCarousel({
        itemsCustom : [
            [0, 2],
            [450, 4],
            [760, 6],
            [1000, 7],
            [1100, 8],
            [1280, 9]
        ]
    });

    initTopMenu();

    $(document).on("scroll", onScroll);*/

    $("#owl-carousel").owlCarousel();
});