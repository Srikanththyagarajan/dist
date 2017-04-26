// Animation directives

angular.module("animations", ["config"])

    // SHOW-HIDE animation for the sticky menu
    .directive("stickyShowAnimation", [function () {
        return {
            strict: "A",
            scope: {
                show: "=stickyShowAnimation"
            },
            link: function (scope, element) {
                element.css("visibility", "hidden");
                scope.$watch(function () { return element.height(); }, function (height) {
                    element.css("top", -height - 5 + "px");
                });
                scope.$watch("show", function (show) {
                    if (show) {
                        element.css("visibility", "visible");
                        element.velocity("stop").velocity({ top: "0px" }, 700);
                    } else {
                        element.velocity("stop").velocity({ top: -element.height() - 5 + "px" }, { duration: 300, visibility: "hidden" });
                    }
                });
            }
        }
    }])

    // SHOW-HIDE directive for the loading indicatior
    .directive("loader", ["animationConfig", function (animationConfig) {
        return {
            strict: "A",
            scope: {
                loader: "=",
                fade: "@",
                rps: "@"
            },
            link: function (scope, element) {
                element.hide();
                $(element).css("display", "inline-block");
                var rps = scope.rps ? scope.rps : animationConfig.loaderRps;
                var fade = (scope.fade == undefined) ? true : scope.$eval(scope.fade);
                scope.$watch("loader", function (val) {
                    if (val) {
                        $(element).show().velocity("stop");
                        if (fade) {
                            element.velocity({ rotateZ: 0 }, { duration: 0 });
                            element.velocity({ opacity: 1 }, { duration: 300, queue: false }).css("opacity", 1);
                        }
                        element.velocity({ rotateZ: 360 }, { duration: 1000 / rps, easing: "linear", loop: true });
                    } else {
                        if (fade) {
                            element.velocity({ opacity: 0 }, {
                                duration: 1000,
                                queue: false,
                                complete: function() {
                                    element.velocity("stop");
                                }
                            });
                        } else {
                            element.css("opacity", 0);
                            element.velocity("stop");
                        }
                    }
                });
            }
        }
    }])

    // On load fade in image
    // Example: <img data-fading-in-image src="image.jpg">
    .directive("fadingInImage", function () {
        return {
            restrict: "A",
            link: function (scope, element) {
                $(element).hide();
                element.bind("load", function () {
                    $(element).fadeIn();
                });
            }
        }
    });
