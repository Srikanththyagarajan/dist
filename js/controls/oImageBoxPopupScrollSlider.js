var startPos = 0;
var endPos = 0;

var createImageModalSlider2 = function() {
    $('.oSliderImagesContainer2 .mLink-block__img').on('click', function(event) {
        event.stopPropagation();
        var $component = $(this).parents(".oSliderImagesContainer2");
        var $modal = $component.next('.modal__slider');

        var imgContainer = $modal.find(".oImageSliderImgContainer");

        $modal.css('display', 'block');
        $('body').append('<div class="overlayBack"></div>');
        $('body').css('overflow','hidden');

        $modal.delay(600).queue(function(next) {
            $(this).removeClass('noViewable');
            next();
        });



        setImgTopAttr(imgContainer);
        setScrollTopToFirstImg(imgContainer);
        setActivePager(imgContainer);
    });
};


$('body').on('click', '.overlayBack, .b-close', function () {
    var $modal = $("#client-story-infographics-container .modal__slider:not(.noViewable)");
    $('.overlayBack').remove();
    $modal.css('display', 'none');
    $('#client-story-infographics-container .modal__slider').addClass('noViewable');
    $('body').css('overflow', 'visible');
});



var setImgTopAttr = function(element){
    var imgHeight = 0;
    element.find(".imgScroll").each(function(){
        var imgElement = $(this);
        imgElement.css('top', imgHeight + "px");
        imgHeight += imgElement.height();
    });
};

var moveImageUp = function (imgParent) {
    imgParent.find(".imgScroll:last-of-type").prependTo(imgParent);
};

var moveImageDown = function (imgParent) {
    imgParent.find(".imgScroll:first-of-type").appendTo(imgParent);
};

var setUpNewScrollTop = function (imgParent) {
    var currentImgParentScrolltop = imgParent.scrollTop();
    var firstImgHeight = imgParent.children().first().height();
    imgParent.scrollTop(currentImgParentScrolltop + firstImgHeight);
};

var setDownNewScrollTop = function (imgParent) {
    var currentImgParentScrolltop = imgParent.scrollTop();
    var firstImgHeight = imgParent.children().last().height();
    imgParent.scrollTop(currentImgParentScrolltop - firstImgHeight);
};

$(".scroll-prev").on('click', function () {
    startPos = 10;
    endPos = 250;
    makeTouchScroll();
});

$(".scroll-next").on('click', function () {
    startPos = 250;
    endPos = 10;
    makeTouchScroll();
});

var setScrollTopToFirstImg = function (elem) {
    var top = Number(elem.find(".firstImage").css("top").replace("px", ""));
    //var top = elem.find(".firstImage").position().top;
    elem.scrollTop(top);
};

//Touch scroll
$("body").on({'touchmove': function (e) {
    if (typeof(e.originalEvent.touches) !== "undefined") {
        endPos = e.originalEvent.touches[0].pageY;
    }
}});

$("body").on({'touchstart': function (e) {
    if (typeof(e.originalEvent.touches) !== "undefined") {
        startPos = e.originalEvent.touches[0].pageY;
    }
},
    'touchend': function () {
        makeTouchScroll();
    }
});

var setDownScrollAvailavility = function (imgParent) {
    if(imgParent.scrollTop() > imgParent.prop("scrollHeight") - 750){
        moveImageDown(imgParent);
        setDownNewScrollTop(imgParent);
        setImgTopAttr(imgParent);
    }
};

var setUpScrollAvailavility = function (imgParent) {
    if(imgParent.scrollTop() < 750){
        moveImageUp(imgParent);
        setImgTopAttr(imgParent);
        setUpNewScrollTop(imgParent);
    }
};

var makeTouchScroll = function () {
    var imgParent = $(".modal__slider:not(.noViewable)").find(".oImageSliderImgContainer");
    var percentPos = 0;

    if(endPos != 0){
        if (endPos > startPos){
            percentPos = endPos - startPos;
            setUpScrollAvailavility(imgParent);
            imgParent.animate({scrollTop: "-=" + percentPos +"px"}, "5", 'linear');
        }
        else {
            percentPos = startPos - endPos;
            setDownScrollAvailavility(imgParent);
            imgParent.animate({scrollTop: "+=" + percentPos +"px"}, "5", 'linear');
            }
        }

    setActivePager(imgParent);
    startPos = 0;
    endPos = 0;
};

$(".scroll-pager").on("click", function () {
    var pager = $(this);
    var pagerParent = pager.parent();
    pagerParent.find(".scroll-pager").removeClass("active");
    var imgParent = pager.parents(".oImageScrollSlider").find(".oImageSliderImgContainer");
    var order = Number(pager.attr("order"));
    var relatedImg = imgParent.find(".imgScroll[order='" + order + "']");
    var imgTop = Number(relatedImg.css("top").replace("px", ""));
    imgParent.scrollTop(imgTop);
    pager.addClass("active");
});

var setActivePager = function (imgParent) {
    var scrollTop = imgParent.scrollTop();
    imgParent.children().each(function () {
        var img = $(this);
        var imgOrder = Number(img.attr("order"));
        //var imgTop = Number(img.css("top").replace("px", ""));
        var imgtop2 = img.position().top;
        var imgTop = scrollTop + imgtop2;
        /*var imgtop3 = img.offsetTop;
        var imgtop4 = img.offset().top;*/
        //var imgTop = img.position().top;
        var imgHeight = img.height();
        if((scrollTop >= imgTop) && (scrollTop < imgTop + imgHeight)){
            var pagerContainer = imgParent.parents(".oImageScrollSlider").find(".scroll-pager-container");
            pagerContainer.children().removeClass("active");
            var relatedPager = pagerContainer.find(".scroll-pager[order='" + imgOrder + "']");
            relatedPager.addClass("active");
            return false;
        }
    });
};

$(document).ready(function () {
    createImageModalSlider2();
});
