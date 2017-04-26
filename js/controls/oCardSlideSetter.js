/**
 * Created by rvarona on 11/10/2016.
 */
var setCardSlide = function () {
      $(".oMixedComponentSection .mButtonContainer a").each(function () {
            var element = $(this);
            element.on('click', function () {
                  var parent = element.parent().parent();
                  //remove active class from all buttons
                  parent.find("a").removeClass("active");
                  element.addClass("active");
                  var slide = parent.next().find('.cycle-slideshow');
                  slide.cycle('goto', element.attr('relatedSlide'));
            });
      });
};

var setActiveButton = function () {
  $(".oMixedComponentSection .cycle-slideshow").each(function () {
        var slide = $(this);
        slide.on("cycle-next cycle-prev", function () {
              var index = slide.data("cycle.opts").currSlide;
              var mixedComponent = slide.parents(".oMarketPlacesMixedComponent");
              mixedComponent.find(".mButtonContainer a").removeClass("active");
              var button = mixedComponent.find(".mButtonContainer a[relatedSlide='"+ index +"']");
              button.addClass("active");
        })
  });
};

$(document).ready(function () {
    setCardSlide();
    setActiveButton();
});





