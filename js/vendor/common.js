// Common javascript functions and logic for the few components (such as Sidr side menu)
// Angular bootstrapping

// The startsWith() method determines whether a string begins with
// the characters of another string, returning true or false as appropriate.
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function (str) {
        return !this.indexOf(str);
    }
}

// The endsWith() method determines whether a string ends with
// the characters of another string, returning true or false as appropriate.
String.prototype.endsWith = function (str) {
    return (this.match(str + "$") == str);
}

// The trim() method removes whitespace from both sides of a string
if (typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
    }
}

// The contains() method determines whether one string may be 
// found within another string, returning true or false as appropriate.
String.prototype.contains = function (it) { return this.indexOf(it) != -1; }

// The repeat() method constructs and returns a new string which contains
// the specified number of copies of the string on which it was called, concatenated together.
String.prototype.repeat = function (num) {
    return new Array(num + 1).join(this);
}

// Prevent the page scrolling to the focused input
$.fn.focusWithoutScrolling = function () {
    var x = window.scrollX, y = window.scrollY;
    this.focus();
    window.scrollTo(x, y);
    return this; //chainability
};

// Returns a callback function with an argument holding
// the current amount of px an element is visible in viewport
(function ($) {
    $.fn.inViewport = function (cb) {
        return this.each(function (i, el) {
            function visPx() {
                var h = $(this).height(),
                    r = el.getBoundingClientRect(), t = r.top, b = r.bottom;
                return cb.call(el, Math.max(0, t > 0 ? h - t : (b < h ? b : h)));
            } visPx();
        });
    };
}(jQuery));

// Sorting an array on multiple columns
// from http://stackoverflow.com/a/2784879/588715
Array.prototype.alphaSort = function () {
    var itm, L = arguments.length, order = arguments;

    var alphaSort = function (a, b) {
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a == b) return 0;
        return a > b ? 1 : -1;
    }
    if (!L) return this.sort(alphaSort);

    this.sort(function (a, b) {
        var tem = 0, indx = 0;
        while (tem == 0 && indx < L) {
            itm = order[indx];
            tem = alphaSort(a[itm], b[itm]);
            indx += 1;
        }
        return tem;
    });
    return this;
};

// Sidr side menu initializing
$(document).ready(function () {
    var source = '<div><div class="close"><span class="b-close"></span></div></div>, .navbar-collapse, .footer-menu-bootom, .footer .footer-menu .social-net';
    var isCustomizedMenu = false;
    isCustomizedMenu = $('#hdnIsCustomSidebar').val();
    if (isCustomizedMenu =="true") {
        source = '<div><div class="close"><span class="b-close"></span></div></div>, #side-bar-menu, #side-bar-footer-menu-bottom .footer-menu-bootom, #side-bar-footer-social-net .social-net'
        $('#side-bar-menu').show();
    }
    $('.navbar-header').sidr({
        name: 'nasdaq-menu',
        side: 'left',
        displace: false,
        source: source,
        onOpen: function () {
            $sideMenu = $('#nasdaq-menu');
            $sideMenu.appendTo($('.wripper'));

            $('.sidr-class-close span').click(function () {
                jQuery.sidr('close', 'nasdaq-menu');
            });
        }
    });
    $(".ribbon-social p").remove();
    setTimeout(RunNavbar, 12000);

    $("a.btn").removeClass('eloqua').addClass("eloqua");

    $('#nasdaq-menu [data-evar47]').each(function (index, item) {
        $(this).attr('data-evar47', $(this).attr('data-evar47').replace('top nav', 'left nav'));
    })

    $('#nasdaq-menu .sidr-class-footer-menu-bootom--block li').each(function (index, item) {
        $(this).attr('data-evar47', 'left nav:' + $(this).text().toLowerCase());
    })
});

// ie placeholder fix
$('.header .active-button').mouseup(function (e) {
    setTimeout(function () {
        $(".header .input-group input[type='text']").focus();
        $(".header .input-group input[type='text']").blur();
    }, 10);
});

var navbar = $(".navbar-toggle");

function RunNavbar() {
    navbar.children(".icon-bar:eq(0)").stop(false, true).animate({ opacity: "0", top: "-5px" }, 300);
    navbar.children(".icon-bar:eq(1)").stop(false, true).delay(200).animate({ opacity: "0", top: "-10px" }, 300);
    navbar.children(".icon-bar:eq(2)").stop(false, true).delay(400).animate({ opacity: "0", top: "-15px" }, 300, function () {
        setTimeout(DownNavbar, 100);
    });
}

function DownNavbar() {
    navbar.children(".icon-bar").stop(false, true);
    navbar.children(".icon-bar:eq(2)").stop(false, true).animate({ opacity: "1", top: "0" }, 300);
    navbar.children(".icon-bar:eq(1)").stop(false, true).delay(200).animate({ opacity: "1", top: "0" }, 300);
    navbar.children(".icon-bar:eq(0)").stop(false, true).delay(400).animate({ opacity: "1", top: "0" }, 300, function () {
        setTimeout(RunNavbar, 6000);
    });
}

$(".modal-content").on('mouseover', function (event) {
    $(this).children(".modal-social").fadeIn();
});

// Main searchform submit
$("form.navbar-form").on("submit", function () {
    var query = $(this).find("input[name='q']").val();
    if (!query) {
        return false;
    }
    return true;
});

function submitForm(event) {
    if (event.keyCode == 13) {
        $('form.navbar-form').submit();
    }
}

// Manually initializing Angular for components specified by data-module="..." attribute
$(document).ready(function () {
    var modules = [];
    $("[data-module]").each(function (index, element) {
        modules.push($(element).data("module"));
    });
    angular.bootstrap(document.body, modules);
});

$(document).ready(function () {
    if (typeof addthis !== 'undefined') {
        if (addthis.addEventListener) {                    // For all major browsers, except IE 8 and earlier
            addthis.addEventListener('addthis.menu.share', onSharethisClick);
        } else if (addthis.attachEvent) {                  // For IE 8 and earlier versions
            addthis.attachEvent('addthis.menu.share', onSharethisClick);
        }
    }



    function onSharethisClick(e) {

        //Inform Adobe Analytics that a social media share button clicked.
        //Actual conversion/share is not guaranteed.

        if (e.data.service != null && e.data.service != "") {
            var dataObject = {
                eVar46: e.data.service.toLowerCase() + ":share",
                events: 'event46'
            }
            s.trackData(dataObject, 'o', 'Social Share');
        }
    }


    //function getChannelSection() { 
    //    var sChannelSection = window.location.pathname.split('/')[1];
    //    if (sChannelSection == undefined || sChannelSection == null || sChannelSection == "/" || sChannelSection.trim() == "") {
    //        sChannelSection = "";
    //    }
    //}


    var $document = $(document),
                    $overlayForm = $('.overlayForm'),
                    $underBody = $('#underBody'),
                    $overlay = $('#overlay'),
                    $closeOverlayLink = $('.closeOverlayLink'),
                    $showOverlay = $('.showOverlay');
    $overlayForm.each(function () {
        var $this = $(this),
            marginTop = -$this.outerHeight() / 2.25;

        $this.css({ marginTop: marginTop });
    });

    $('body').addClass('loaded');

    // Show overlay
    $document.on('click touchstart', '.showOverlay', function (e) {
        e.preventDefault();
        var iframeURl = $(this).attr('data-iframe-url');
        if (iframeURl.length > 0) {
            iframeURl = iframeURl + location.search;
            $('#overlay').fadeIn(function () {
                $('.overlayForm').addClass('active');
                $('iframe#eloquaFrame').attr('src', iframeURl);
            })
            var title = $(this).attr('data-form-title');
            if (title == "") {
                var text = $(this).text();
                title = document.title + ":" + text;
            }
            //Form Opened
            var dataObject = {
                eVar26: title.toLowerCase(),
                events: 'event26'
            }
            s.trackData(dataObject, 'o', 'form view');
        }
    });
    $(document).ready(function () {
        
        $("[data-evar47]").click(function (e) {
            var dataObject = {
                eVar47: $(this).attr("data-evar47").replace(/&amp;/g, '&'),
                events: 'event47'
            }
            s.trackData(dataObject, 'o', 'Navigation Click');
        });           
    });

    
    $(document).ready(function () {
        //B-46695 - Changes Begin - To have background video in speciality page hero slider instead of background image
        function videoResize() {
            var HeroVideos = $('.hero-videos');
            for (var i = 0; i < HeroVideos.length; i++) {
                var HeroVideo = HeroVideos[i];
                var video = $($(HeroVideo).find('video')[0]);
                video.css('width', $(HeroVideo).width())
                if (!(document.documentMode || /Edge/.test(navigator.userAgent))) {
                    video.css('height', '100%')
                }
                video.css('display', 'inline-block')              
                if ($(HeroVideo).hasClass('flex-active-slide')) /*D-57889 - Play video pnly for active slide*/
                {
                    if (video.get(0).paused) {
                        video.get(0).play()
                        video.get(0).currentTime = 0;
                    }
                }				            
            }
        }
        //B-46695 - Changes End - To have background video in speciality page hero slider instead of background image
        $(window).on("load resize", function (e) {
            setTimeout(videoResize, 1000);           
        });
    })
   

    $document.on('click touchstart', '.closeOverlayLink', function (e) {
        e.preventDefault();
        $overlayForm.removeClass('active');
        setTimeout(function () {
            $overlay.fadeOut();
        }, 500);
    });

    // Escape to close modal
    $document.keydown(function (e) {
        if (e.keyCode == 27) {
            $overlayForm.removeClass('active');
            setTimeout(function () {
                $overlay.fadeOut();
            }, 500);
        }
    });
            
    // Listener code
    var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent",
        eventer = window[eventMethod],
        messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

    eventer(messageEvent, function (e) {
        if (e.data == 'success') {
            $closeOverlayLink.trigger('click'); // Replace with action to perform when message is received from child
            //Form Submitted Successfully
            var formCompleteObject = {
                events: 'event27'
            }
            s.trackData(formCompleteObject, 'o', 'form submit');
        } 
    }, false);
});

$(document).ready(function(){
        var img = new Image();
        var timer;
        function clearTimer() {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        }
        function handleFail() {
            // kill previous error handlers
            this.onload = this.onabort = this.onerror = function () { };
            // stop existing timer
            clearTimer();
            s.prop40 = "false";
            var s_code = s.t(); if (s_code) document.write(s_code)
        }
        img.onerror = img.onabort = handleFail;
        img.onload = function () {
            clearTimer();
            s.prop40 = "true";
			var s_code = s.t(); if (s_code) document.write(s_code)
		}
        var st = "gts".split("").reverse().join("");
        img.src = "http://" + st + "?gnp.03862-4405mct_1/segamI/moc.qadsan.ssenisub-".split("").reverse().join("") + Math.random();
        /* Wait for 3 seconds to load 1px image and send info to adobe instead of waiting for long time. (In Internal network it loads well within that, in around a second) */
        timer = setTimeout(function (theImg) {
            return function () {
                handleFail.call(theImg);
            };
        }(img), 3000);
});



window.onload = function () {
    var tcm = location.hash.replace("#", "").replace("!", "").replace("/", "");
    if (tcm != '') {
        $("a[href^='#" + tcm + "']").click();
    }
};