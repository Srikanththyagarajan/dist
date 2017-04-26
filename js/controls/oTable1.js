var initTabs = function () {

    $('.oTable1 a').click(function (e) {
        e.preventDefault();
        var idSelector = $(this).attr('target');
        $('.oTable1 .body .tab-pane').removeClass("in");
        $('.oTable1 .body .tab-pane').removeClass("active");

        $(idSelector).addClass("in");
        $(idSelector).addClass("active");
    });
};

$(document).ready(function() {
    initTabs();
});
