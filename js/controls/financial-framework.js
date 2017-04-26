var rightDropDownConfig = [
    {key: "/#visualizer", dropDownIndex: 0},
    {key: "/#external", dropDownIndex: 1},
    {key: "/#blockchain", dropDownIndex: 2},
    {key: "/#machine-intelligence", dropDownIndex: 3},
    {key: "/#nasdaq-core-values", dropDownIndex: 4},
    {key: "#core-service-data-store", dropDownIndex: 5},
    {key: "#core-service-blockchain", dropDownIndex: 6},
    {key: "#core-service-connectivity-services", dropDownIndex: 7}
];

var initAnimation = false;

var applications = {
    marketplaces: [
        {href: "javascript:void(0)", title: "", class: "app-nasdaq-disabled", icon: {img: "img/icons/app-nasdaq-disabled.svg"}},
        {href: "javascript:void(0)", title: "", class: "app-nasdaq-disabled", icon: {img: "img/icons/app-nasdaq-disabled.svg"}},
        {href: "/#visualizer", title: "Visualizer", class: "app-nasdaq-built", icon: {img: "img/icons/app-nasdaq-built.svg"}},
        {href: "/#external", title: "External", class: "app-external", icon: {img: "img/icons/app-external.svg"}},
        {href: "/#blockchain", title: "Blockchain", class: "app-blockchain", icon: {img: "img/icons/app-blockchain.svg"}},
        {href: "/#machine-intelligence", title: "Machine intelligence", class: "app-machine-intelligence", icon: {img: "img/icons/app-machine-intelligence.svg"}}
    ],
    clearinghouse: [
        {href: "javascript:void(0)", title: "", class: "app-nasdaq-disabled", icon: {img: "img/icons/app-nasdaq-disabled.svg"}},
        {href: "javascript:void(0)", title: "", class: "app-nasdaq-disabled", icon: {img: "img/icons/app-nasdaq-disabled.svg"}},
        {href: "/#visualizer", title: "Visualizer", class: "app-nasdaq-built", icon: {img: "img/icons/app-nasdaq-built.svg"}},
        {href: "/#external", title: "External", class: "app-external", icon: {img: "img/icons/app-external.svg"}},
        {href: "/#blockchain", title: "Blockchain", class: "app-blockchain", icon: {img: "img/icons/app-blockchain.svg"}},
        {href: "/#machine-intelligence", title: "Machine intelligence", class: "app-machine-intelligence", icon: {img: "img/icons/app-machine-intelligence.svg"}}
    ],
    csds: [
        {href: "javascript:void(0)", title: "", class: "app-nasdaq-disabled", icon: {img: "img/icons/app-nasdaq-disabled.svg"}},
        {href: "/#visualizer", title: "Visualizer", class: "app-nasdaq-built", icon: {img: "img/icons/app-nasdaq-built.svg"}},
        {href: "/#external", title: "External", class: "app-external", icon: {img: "img/icons/app-external.svg"}},
        {href: "/#blockchain", title: "Blockchain", class: "app-blockchain", icon: {img: "img/icons/app-blockchain.svg"}},
        {href: "/#machine-intelligence", title: "Machine intelligence", class: "app-machine-intelligence", icon: {img: "img/icons/app-machine-intelligence.svg"}}
    ],
    regulators: [
        {href: "javascript:void(0)", title: "", class: "app-nasdaq-disabled", icon: {img: "img/icons/app-nasdaq-disabled.svg"}},
        {href: "/#visualizer", title: "Visualizer", class: "app-nasdaq-built", icon: {img: "img/icons/app-nasdaq-built.svg"}},
        {href: "/#external", title: "External", class: "app-external", icon: {img: "img/icons/app-external.svg"}},
        {href: "/#blockchain", title: "Blockchain", class: "app-blockchain", icon: {img: "img/icons/app-blockchain.svg"}},
        {href: "/#machine-intelligence", title: "Machine intelligence", class: "app-machine-intelligence", icon: {img: "img/icons/app-machine-intelligence.svg"}}
    ],
    marketParticipants: [
        {href: "javascript:void(0)", title: "", class: "app-nasdaq-disabled", icon: {img: "img/icons/app-nasdaq-disabled.svg"}},
        {href: "/#visualizer", title: "Visualizer", class: "app-nasdaq-built", icon: {img: "img/icons/app-nasdaq-built.svg"}},
        {href: "/#external", title: "External", class: "app-external", icon: {img: "img/icons/app-external.svg"}},
        {href: "/#blockchain", title: "Blockchain", class: "app-blockchain", icon: {img: "img/icons/app-blockchain.svg"}},
        {href: "/#machine-intelligence", title: "Machine intelligence", class: "app-machine-intelligence", icon: {img: "img/icons/app-machine-intelligence.svg"}}
    ]
};


var getRightDropDownIndex = function (key) {
    var findIndex = -1;
    $.each(rightDropDownConfig, function (index, item) {
        if (item.key === key) {
            findIndex = item.dropDownIndex;
        }
    });

    return findIndex;
};

var getRightDropDownKey = function (idx) {
    var key = "";
    $.each(rightDropDownConfig, function (index, item) {
        if (item.dropDownIndex === idx) {
            key = item.key;
        }
    });

    return key;
};

var updateBtnLabel = function (el) {
    var self = $(el);
    var dropDown = self.parents(".oDropDown.dropdown");
    var btn = $(".btn", dropDown);
    var caret = "<i class=\"fa fa-chevron-down\" aria-hidden=\"true\"></i>";

    btn.html(self.html() + caret);
};

var resetActiveElements = function (resetCoreService) {
    var rightItems = $(".app-nasdaq", ".right-container");
    var theCore = $(".mTheCore", ".center-container");
    var coreServiceBack = $(".oCoreServiceBackContent", ".center-container");

    rightItems.removeClass("active");
    $("path#Shape_1_").attr("class", "st1");
    $("path#Shape_2_").attr("class", "st1");
    $("path#Shape_3_").attr("class", "st1");

    /*if (theCore.hasClass("hidden") && resetCoreService) {
        theCore.removeClass("hidden");
        coreServiceBack.addClass("hidden");
    }*/

    if (resetCoreService) {
        theCore.removeClass("hidden");
        coreServiceBack.addClass("hidden");
    }

};

var showRightContent = function (el, isNoLink) {
    var items = $(".dropdown-menu li", ".right-container");
    var index = -1;

    if (isNoLink) {
        resetActiveElements(true);
        $(el, ".right-container").addClass("active");

        index = getRightDropDownIndex(el);
        updateBtnLabel(items[index]);

    } else {
        var elHref = $(el).attr("href");

        if (elHref.length > 1 && elHref.substr(0, 2) === "/#") {
            resetActiveElements(elHref !== "/#nasdaq-core-values");
            $(elHref.substr(1), ".right-container").addClass("active");

            index = getRightDropDownIndex(elHref);
            updateBtnLabel(items[index]);
        }
    }

};

var buildAppItems = function (appClassName) {
    var oCircle = $(".oCircle", ".center-container");
    var items = $("a", oCircle);
    items.hide();
    var className = appClassName || "app-marketplaces";
    var showItems = items.filter("." + className).show();

    for (var i = 0, l = showItems.length; i < l; i++) {
        var el = $(showItems[i]);
        var left = (50 - 48 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
        var top = (50 + 48 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(4) + "%";
        el.css("left", left);
        el.css("top", top);

        if (!el.hasClass("app-nasdaq-disabled")) {
            el.on("click", function (e) {
                e.preventDefault();
                showItems.removeClass("active");
                $(this).addClass("active");
                showRightContent(this);
            });
            var className = el.attr("class").match(/\bapp-nasdaq-\S*/);
            className = className.length > 0 ? className[0]: "";
            var tooltipTemplate = "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner " + className +"\"></div></div>";
            el.tooltip({placement: "top auto", container: ".oHeroBannerGlowingNodes .center-container", /*trigger: "click", */template: tooltipTemplate});
        }
    }

    $(".activeApp", ".mApplicationsButton").text(showItems.length);
    $(".totalApp", ".mApplicationsButton").text(items.length);
};

var initCoreServiceItems = function () {
    var oCircle = $(".oCircle", ".center-container");
    var oNewCircle = $("svg #Group-39");

    var linkTheCore = $("a.aNasdaqTheCore", ".center-container");
    var theCore = $(".mTheCore", ".center-container");
    var coreServiceBack = $(".oCoreServiceBackContent", ".center-container");

    linkTheCore.on("click", function (e) {
        e.preventDefault();
        theCore.addClass("hidden");
        coreServiceBack.removeClass("hidden");
        showRightContent(this);
    });


    oNewCircle.on("click", "#Machine-Intelligence", function (e) {
        e.preventDefault();
        //$("path#Shape_3_").attr("class", "st1 active");
        showRightContent("#core-service-connectivity-services", true);
    });

    oNewCircle.on("click", "#Blockchain", function (e) {
        e.preventDefault();
        //$("path#Shape_2_").attr("class", "st1 active");
        showRightContent("#core-service-blockchain", true);
    });

    oNewCircle.on("click", "#Data-Store", function (e) {
        e.preventDefault();
        //$("path#Shape_1_").attr("class", "st1 active");
        showRightContent("#core-service-data-store", true);
    });

    $(".oCoreService").on("click", ".core-wrapper a", function (e) {
        e.preventDefault();
        //theCore.addClass("hidden");
        coreServiceBack.removeClass("hidden");
        showRightContent(this);
    });

    //Click event for old svg core
    /*oCircle.on("click", "path#Shape_1_", function (e) {
        e.preventDefault();
        $("path#Shape_1_").attr("class", "st1 active");
        showRightContent("#core-service-data-store", true);
    });

    oCircle.on("click", "path#Shape_2_", function (e) {
        e.preventDefault();
        $("path#Shape_2_").attr("class", "st1 active");
        showRightContent("#core-service-blockchain", true);
    });

    oCircle.on("click", "path#Shape_3_", function (e) {
        e.preventDefault();
        $("path#Shape_3_").attr("class", "st1 active");
        showRightContent("#core-service-connectivity-services", true);
    });*/

};

var initApplicationsList = function () {
    var aButton = $(".mApplicationsButton .aButton", ".oHeroBannerGlowingNodes");
    var closeBtn = $(".mButtonClose", ".oHeroBannerGlowingNodes");
    var oApplication = $(".oApplications", ".oHeroBannerGlowingNodes");

    aButton.on("click", function () {
        oApplication.removeClass("hidden");
    });

    closeBtn.on("click", function () {
        oApplication.addClass("hidden");
    });

};

var initLeftMenuItems = function () {
    var items = $(".item a", ".left-container");
    var items2 = $(".left-container .oDropDown .item a");
    var parentItems = $(".item", ".left-container");
    var oCircle = $(".oCircle", ".center-container");
    var isAnimate = false;

    var itemClick = function (e) {
        e.preventDefault();

        if (!isAnimate) {
            isAnimate = true;

            if (!initAnimation) {
                oCircle.removeClass("rotate-slow");
                oCircle.addClass("menu-selected");
            }

            var className = $(this).attr("class").match(/\bapp-\S*/)[0];
            buildAppItems(className);

            parentItems.removeClass("active");

            if($(this).parents(".oDropDown").length > 0){
                items.each(function () {
                    var link = $(this);
                    var linkClass = link.attr("class").match(/\bapp-\S*/)[0];
                    if(linkClass == className){
                        link.parent().addClass("active");
                    }
                });
            }else{
                var text = $(this).find("span").text();
                $(this).parent().addClass("active");
                items2.each(function () {
                    var link = $(this);
                    var linClass = link.attr("class").match(/\bapp-\S*/)[0];
                    if(linClass == className){
                        link.parents(".oDropDown").children(".btn").find("a").attr("class", linClass).text(text);
                    }
                });
            }

            /*parentItems.removeClass("active");
            $(this).parent().addClass("active");*/

            if (initAnimation) {
                oCircle.addClass("rotate-slow");
                initAnimation = false;
                isAnimate = false;
            }else{

                setTimeout(function () {
                    oCircle.addClass("rotate-slow");
                    isAnimate = false;
                },0);
            }

        }
    };

    items.each(function (index) {
        var el = $(items[index]);
        el.on("click", itemClick);
    });

    items2.each(function (index) {
        var el = $(items[index]);
        el.on("click", itemClick);
    });

    items[0].click();

};

var initLeftDropDown = function () {
    var items = $(".dropdown-menu li", ".left-container");

    items.on("click", function () {
        updateBtnLabel(this);
    });

    updateBtnLabel(items[0]);
};

var initRightDropDown = function () {
    var items = $(".dropdown-menu li", ".right-container");

    items.each(function (index, item) {
        var idx = index;
        $(item).on("click", function () {
            updateBtnLabel(this);
            var key = getRightDropDownKey(idx);
            var select = key.substr(0, 2) === "/#" ? key.substr(1) : key;

            if (select === "#nasdaq-core-values") {
                var theCore = $(".mTheCore", ".center-container");
                var coreServiceBack = $(".oCoreServiceBackContent", ".center-container");
                setTimeout(function () {
                    theCore.addClass("hidden");
                    coreServiceBack.removeClass("hidden");
                }, 100);
            }

            showRightContent(select, true);
        });
    });


    updateBtnLabel(items[0]);
};

//Video thumbnail
var initVideoThumbnail = function () {
    var videoItems = $(".aVideoThumbnail", ".oVideoBoxInline");

    videoItems.first().addClass("active");

    videoItems.on("click", function () {
        var videoId = $(this).attr("videoId");
        var iFrame = $('#videoFrame');

        videoItems.removeClass("active");
        $(this).addClass("active");

        if (iFrame.length ) {
            var url = 'https://www.youtube.com/embed/'+ videoId +'?rel=0&showinfo=1&wmode=opaque&enablejsapi=1&origin=http%3A%2F%2F10.42.3.98&widgetid=7';
            iFrame.attr('src',url);
        }
    });
};

var fixCoreCategoriesHover = function () {
  $("#Machine-Intelligence, #Blockchain, #Data-Store").on("mouseover", function () {
      $("#Group-37").attr("class", "disable-pointer-events");
  });

    $("#Machine-Intelligence, #Blockchain, #Data-Store").on("mouseout", function () {
        $("#Group-37").removeAttr("class");
    });
};

var initFinancialFramework = function () {
    initAnimation = true;

    initCoreServiceItems();
    initApplicationsList();
    initLeftMenuItems();
    initLeftDropDown();
    initRightDropDown();
    initVideoThumbnail();
    buildAppItems();
    fixCoreCategoriesHover();

    $(".oHeroBannerGlowingNodes").addClass("animate");
};

$(document).ready(function () {
    if(typeof(hidenid)!="undefined"){
        initFinancialFramework();
    }
});


