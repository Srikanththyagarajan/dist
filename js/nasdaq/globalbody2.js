/*! Sidr - v1.2.1 - 2013-11-06
 * https://github.com/artberri/sidr
 * Copyright (c) 2013 Alberto Varela; Licensed MIT */
(function(e){var t=!1,i=!1,n={isUrl:function(e){var t=RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i");return t.test(e)?!0:!1},loadContent:function(e,t){e.html(t)},addPrefix:function(e){var t=e.attr("id"),i=e.attr("class");"string"==typeof t&&""!==t&&e.attr("id",t.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-id-$1")),"string"==typeof i&&""!==i&&"sidr-inner"!==i&&e.attr("class",i.replace(/([A-Za-z0-9_.\-]+)/g,"sidr-class-$1")),e.removeAttr("style")},execute:function(n,s,a){"function"==typeof s?(a=s,s="sidr"):s||(s="sidr");var r,d,l,c=e("#"+s),u=e(c.data("body")),f=e("html"),p=c.outerWidth(!0),g=c.data("speed"),h=c.data("side"),m=c.data("displace"),v=c.data("onOpen"),y=c.data("onClose"),x="sidr"===s?"sidr-open":"sidr-open "+s+"-open";if("open"===n||"toggle"===n&&!c.is(":visible")){if(c.is(":visible")||t)return;if(i!==!1)return o.close(i,function(){o.open(s)}),void 0;t=!0,"left"===h?(r={left:p+"px"},d={left:"0px"}):(r={right:p+"px"},d={right:"0px"}),u.is("body")&&(l=f.scrollTop(),f.css("overflow-x","hidden").scrollTop(l)),m?u.addClass("sidr-animating").css({width:u.width(),position:"absolute"}).animate(r,g,function(){e(this).addClass(x)}):setTimeout(function(){e(this).addClass(x)},g),c.css("display","block").animate(d,g,function(){t=!1,i=s,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),v()}else{if(!c.is(":visible")||t)return;t=!0,"left"===h?(r={left:0},d={left:"-"+p+"px"}):(r={right:0},d={right:"-"+p+"px"}),u.is("body")&&(l=f.scrollTop(),f.removeAttr("style").scrollTop(l)),u.addClass("sidr-animating").animate(r,g).removeClass(x),c.animate(d,g,function(){c.removeAttr("style").hide(),u.removeAttr("style"),e("html").removeAttr("style"),t=!1,i=!1,"function"==typeof a&&a(s),u.removeClass("sidr-animating")}),y()}}},o={open:function(e,t){n.execute("open",e,t)},close:function(e,t){n.execute("close",e,t)},toggle:function(e,t){n.execute("toggle",e,t)},toogle:function(e,t){n.execute("toggle",e,t)}};e.sidr=function(t){return o[t]?o[t].apply(this,Array.prototype.slice.call(arguments,1)):"function"!=typeof t&&"string"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.sidr"),void 0):o.toggle.apply(this,arguments)},e.fn.sidr=function(t){var i=e.extend({name:"sidr",speed:200,side:"left",source:null,renaming:!0,body:"body",displace:!0,onOpen:function(){},onClose:function(){}},t),s=i.name,a=e("#"+s);if(0===a.length&&(a=e("<div />").attr("id",s).appendTo(e("body"))),a.addClass("sidr").addClass(i.side).data({speed:i.speed,side:i.side,body:i.body,displace:i.displace,onOpen:i.onOpen,onClose:i.onClose}),"function"==typeof i.source){var r=i.source(s);n.loadContent(a,r)}else if("string"==typeof i.source&&n.isUrl(i.source))e.get(i.source,function(e){n.loadContent(a,e)});else if("string"==typeof i.source){var d="",l=i.source.split(",");if(e.each(l,function(t,i){d+='<div class="sidr-inner">'+e(i).html()+"</div>"}),i.renaming){var c=e("<div />").html(d);c.find("*").each(function(t,i){var o=e(i);n.addPrefix(o)}),d=c.html()}n.loadContent(a,d)}else null!==i.source&&e.error("Invalid Sidr Source");return this.each(function(){var t=e(this),i=t.data("sidr");i||(t.data("sidr",s),"ontouchstart"in document.documentElement?(t.bind("touchstart",function(e){e.originalEvent.touches[0],this.touched=e.timeStamp}),t.bind("touchend",function(e){var t=Math.abs(e.timeStamp-this.touched);200>t&&(e.preventDefault(),o.toggle(s))})):t.click(function(e){e.preventDefault(),o.toggle(s)}))})}})(jQuery);
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



window.onload = function () {
    var tcm = location.hash.replace("#", "").replace("!", "").replace("/", "");
    if (tcm != '') {
        $("a[href^='#" + tcm + "']").click();
    }
};
// General configuration module

angular.module("config", [])

    // Configuration for the Homepage
    .value("homepageConfig", {
        highlights: {
            // highlights news refresh time
            refreshTime: 15 // minutes
        }
    })

    // Default animation parameters for VelocityUI
    .value("animationConfig", {
        duration: 400, // for fadeIn an fadeOut effects
        loaderRps: 0.5 // loader indicator rotations pers seconds value
    })

    // Common configuration
    .value("commonConfig", {
        useLocalProxy: true,
        localProxyUrl: "/webproxy/proxy",
        // OMX Link service URLs
        dataFeedProxy: "http://www.nasdaqomx.com/webproxy/DataFeedProxyIRC1.aspx",
        proxyURLRealtime: "http://www.nasdaqomx.com/webproxy/DataFeedProxyIR.aspx",
        // Google API key is used to get youtube video data (title, description, duration)
        youtubeAPIKey: "AIzaSyBuzM-AHC_ipflHocDQjy7jI2e9CN6VmrY"
    })

    // NordPoolSpot feeds
    .value("nordpoolspotConfig", {
        pressReleases: "https://cns.omxgroup.com/cds/rss?username=NordPool10&companyId=2485&categories=288&maxresults=20",
        exchange: "https://cns.omxgroup.com/cds/rss?username=NordPool10&companyId=2485&categories=371&maxresults=20",
        operationalMessages: "https://cns.omxgroup.com/cds/rss?username=NordPool10&companyId=2485&categories=369&maxresults=20"
    })

    // Blog Landing page
    .value("blogConfig", {
        jsonUrl: "/blog.json?src=ambition"
    })

    // Market Indexes service (common for stock market graph and today's activity block)
    .value('marketindexesServiceConfig', {
        requestUrl: '/webproxy/JSPP/proxy.asmx/Index',
        requestParams: {
            mode: 'stock',
            // All available indexes
            symbol: ['SPX', 'IXIC', 'IXNDX', 'INDU', 'RUT', 'RUi', 'NIK/O', 'OMXN40'],
            page: 'xml',
            partner: 'qnetwork',
            domain: 'nasdaq',
            path: 'quotedll/quote.dll'
        }
    })

    // Market Indexes (in Today's Activity block)
    .value('marketindexesConfig', {
        // Visible indexes, order matters
        symbols: ["IXIC", "IXNDX", "OMXN40", "INDU", "SPX", "NIK/O"],
        // Refresh period
        refreshTime: 15 // minutes
    })

    // Stock Market Graph
    .value('stockmarketConfig', {
        requestUrl: '/webproxy/JSPP/proxy.asmx/Index',
        requestParams: {
            partner: 'qnetwork',
            domain: 'nasdaq',
            path: 'aspx/IndexData.ashx'
        },
        // Available graphs
        symbols: ["IXIC", "IXNDX", "INDU", "SPX", "RUT"],
        // cache time for each index graph
        graphCacheTime: 1, // minutes
        // Data refresh time
        refreshTime: 15 // minutes
    })

    // Decliners Advancers
    .value('declinersAdvancersConfig', {
        requestUrl: '/webproxy/JSPP/proxy.asmx/Index',
        requestParams: {
            mkttype: 'xml',
            exchange: 'NASDAQ',
            path: 'extended-trading/mostactive-xml.aspx',
            domain: 'nasdaq'
        },
        // Number of visible items
        itemsCount: 8,
        // Data refresh time
        refreshTime: 15 // minutes
    })

    // Social Networks (Homepage Social block)
    .value('socialConfig', {
        facebook: {
            community: "http://www.facebook.com/NASDAQ",
            api: "https://www.facebook.com/feeds/page.php?id=13881287428&format=rss20"
        },
        twitter: {
            community: "https://twitter.com/NASDAQ",
            api: "https://www.nasdaqomxnordic.com/WebAPI/api/TwitterFeed/UserTimeline?list=en&app=corp&count=1&callback=JSON_CALLBACK"
        },
        googlePlus: {
            community: "https://plus.google.com/115745144664442295460",
            api: "https://www.googleapis.com/plus/v1/people/115745144664442295460/activities/public?alt=json&key=AIzaSyAIAoLEWqGH2dfq9tNsSKyYyfuHaNTLqN4&callback=JSON_CALLBACK"
        },
        tumblr: {
            community: "http://nasdaq.tumblr.com/",
            api: "http://nasdaq.tumblr.com/api/read/json?&num=1&callback=JSON_CALLBACK"
        },
        refreshTime: 15 // minutes
    })

    // Market Bell Ceremonies landing page
    .value("marketbellConfig", {
        ceremonies: "https://www.nasdaqomxnordic.com/WebAPI/api/Nomx/Ceremonies",
        latest: "https://www.nasdaqomxnordic.com/WebAPI/api/Nomx/LatestCeremony",
        search: "https://www.nasdaqomxnordic.com/WebAPI/api/Nomx/SearchCeremonies"
    })

    // Market Notices 
    .value("marketNoticesConfig", {
        requestUrl: "http://mediacafe.globenewswire.com/news-remote/query.action" // news src URL
    })

//Chi-x Market summary
.value("chi-x-Config", {
    jsonUrl: "/JsonData/GetMarketSectionForChiX"
})
angular.module("commonModule", ["ngAnimate", "velocity.ui", "ngTouch", "config", "duScroll", "ngSanitize", "animations"])
    //------------------------------
    // COMMON FACTORY
    .factory("mainFactory", ["ngVelocityConfig", "animationConfig", function (ngVelocityConfig, animationConfig) {

        // Velocity UI animations https://github.com/rosslavery/velocity-ui-angular
        // Sets velocity default duration from config file
        ngVelocityConfig.duration = animationConfig.duration;

        // Common set of functions
        return {

            // Get screen mode (mobile or desktop)
            screenMode: function () {
                var size = 991; // max mobile width
                return ((window.innerWidth > 0) ? window.innerWidth : screen.width) <= size ? 'mobile' : 'desktop';
            },

            // Custom method for addThis social sharing feature.
            addThisShare: function (shareUrl, shareTitle, shareImage) {
                if (!shareTitle)
                    shareTitle = document.title;
                if (!shareUrl)
                    shareUrl = document.URL;
                addthis.update('share', 'url', shareUrl);
                if (shareTitle)
                    addthis.update('share', 'title', shareTitle);
                if (shareImage)
                    addthis.update('share', 'image', shareImage);
            },

            // Determine iOS system (iPad, iPhone, iPod)
            isIOS: navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false,

            // Determine webkit browser
            isWebKit: (/webkit/.test(navigator.userAgent.toLowerCase())),

            // Strips a string from HTML, text without tags
            stripHtml: function (str) {
                var div = document.createElement("div");
                div.innerHTML = str;
                return div.textContent || div.innerText || "";
            },

            // Checks if a value exists in an array
            inArray: function (needle, haystack) {
                var length = haystack.length;
                for (var i = 0; i < length; i++) {
                    if (haystack[i] == needle) return true;
                }
                return false;
            }
        }
    }])

    /* FILTERS */

    // Cut out part of a sting.
    // By default, a word will not be truncated. Set the optional boolean after the character count to true.
    // Example: {{ text | characters :25 : true }}
    // Used in: Insights Highlights Social block, Blog landing page, Latest Ceremony carousel, Market Bell Ceremonies landing page.
    .filter('characters', function () {
        return function (input, chars, breakOnWord) {
            if (isNaN(chars)) return input;
            if (chars <= 0) return '';
            if (input && input.length > chars) {
                input = input.substring(0, chars);

                if (!breakOnWord) {
                    var lastspace = input.lastIndexOf(' ');
                    //get last space
                    if (lastspace !== -1) {
                        input = input.substr(0, lastspace);
                    }
                } else {
                    while (input.charAt(input.length - 1) === ' ') {
                        input = input.substr(0, input.length - 1);
                    }
                }
                return input + '...';
            }
            return input;
        };
    })

    // Remove whitespace from both sides of a string.
    // Example: {{ text |  trim }}
    // Used in: Latest Ceremony carousel, Market Bell Ceremonies landing page, Market Bell Ceremony detailed page.
    .filter('trim', function () {
        return function (str) {
            if (!str)
                return "";
            return str.trim();
        }
    })

    // Convert Nasdaq symbol into the link, for example "(Nasdaq: ETSY)" becomes "(Nasdaq: <a href="http://www.nasdaq.com/symbol/etsy">ETSY</a>)"
    // Recommendation: Insert at the last position of the filters chain {{ text | filter1 | filterN | nasdaqSymbols }}
    // Example: {{ descriptivetext | nasdaqSymbols }}
    // Used in: Market Bell Ceremony detailed page.
    .filter('nasdaqSymbols', function () {
        return function (str) {
            if (!str)
                return "";
            var re = /\(Nasdaq:(.*?)\)/gim;
            return str.replace(re, function(v, symbol) {
                return "(Nasdaq: <a href=\"http://www.nasdaq.com/symbol/" + symbol.toLowerCase() + "\" target=\"_blank\">" + symbol + "</a>)";
            });
        }
    })

    // Inserts HTML line breaks <br> instead all newlines in a string. maxbr parameted sets max count of <br> tags which will be inserted.
    // Example: {{ text | nl2br : 2 }}
    // Used in: Market Bell Ceremony detailed page.
    .filter('nl2br', function () {
        return function (msg, maxbr) {
            if (!msg)
                return "";
            var breakTag = "<br>";
            msg = (msg + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
            if (maxbr) {
                var re = new RegExp("(<br>(\\s+)*){"+(parseInt(maxbr)+1)+",}", 'gmi');
                msg = msg.replace(re, "<br>".repeat(maxbr));
            }
            return (msg);
        }
    })

    // Linkify is a filter for finding URLs in plain-text and converting them to HTML links. It works with all valid URLs and text which starts with www..
    // Example: {{ text | linkify }}
    // Used in: Market Bell Ceremony detailed page.
    .filter("linkify", function () {
        return function (inputText) {
            if (!inputText)
                return inputText;
            var pattern = /(\b((https?:\/\/)|(www\.))([-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|]))/gim;
            return inputText.replace(pattern, function (v, wholeMatch, p2, http, www, text) {
                if (www)
                    return '<a href="http://www.' + text + '" target="_blank">www.' + text + '</a>';
                else {
                    return '<a href="' + http + text + '" target="_blank">' + text + '</a>';;
                }
            });
        }
    })

    // Extracts parts of an array. Use the first argument to specify start element of an array and the second argument as the end element.
    // Example: ... ng-repeat="item in array | slice : 0 : 4"
    // Used in: Market Bell Ceremonies landing pade, Blog landing pages and in the other pages with ng-repeat directive.
    .filter('slice', function () {
        return function (arr, start, end) {
            return (arr || []).slice(start, end);
        };
    })

    // This filter allows to use moment.js functions, for instance formatting/converting dates directly in HTML pages.
    // Example: {{ date | moment: 'tz' : 'Europe/Stockholm' | moment : 'format' : "YYYY-MM-DD HH:mm:ss" }}
    // Used in: Nord Pool Spot, Market Prices
    .filter('moment', [function () {
            return function (date, method) {
                var momented = moment(date);
                return momented[method].apply(momented, Array.prototype.slice.call(arguments, 2));
            };
        }
    ])

    /* DIRECTIVES */

    // Wrapper to jQuery Backstretch plugin https://github.com/srobbin/jquery-backstretch
    // Example: <div data-bkstretch="/static/img/list.jpg" data-fade="500">...</div>
    // Used in: homepage and pages with carousels, banners and special design elements
    // Commented by @authx
    /*.directive("bkstretch", ["$timeout", function ($timeout) {
        return {
            restrict: 'A',
            scope: {
                "bkstretch": "@bkstretch",
                "fade": "@?"
            },
            link: function (scope, element) {
                // force reset on window resize to fix wrong behavior on some types of browsers
                $(window).resize(function () {
                    setTimeout(function () { 
                        console.log('element', element);
                        $(element).backstretch("resize"); }, 700);
                });
                scope.$watch("bkstretch", function (v) {
                    $timeout(function () {
                        var fade = scope.fade ? parseInt(scope.fade) : 0;
                        $(element).backstretch(v, { fade: fade });
                        $(element).on("backstretch.after", function (e, instance) {
                            $timeout(function () {
                                instance.$container.backstretch("resize");
                            }, fade + 50);
                        });
                    });
                });
            }
        };
    }])*/

    /* Adobe Analytics track form */
    .directive("trackForm", ["mainFactory", function (mf) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                var form = element.prev("form");
                // track form view event
                window.s.trackData({ 'pageName': document.title, 'events': 'event26', 'eVar26': attrs.trackForm }, 'o', 'form view');
                form.submit(function () {
                    // track form submit event
                    window.s.trackData({ 'pageName': document.title, 'events': 'event27', 'eVar27': attrs.trackForm }, 'o', 'form submit');
                });
                element.remove();
            }
        }
    }])

    // Custom HTML placeholder with a special behavior. Replaces standard HTML placeholder.
    // Example: <input data-search-placeholder data-short-text="Search" data-long-text="What are you searching for" data-placeholder-class="search_placeholder" type="text">
    // Optional attributes: "short-text" - placeholder text shows in mobile view, "long-text" - text shows in desktop view, "placeholder-class" - specifies css class for placeholder element
    // Used in: main search form, Market Bell Ceremony landing page, Blog landing page and other pages with different types of HTML forms
    .directive("searchPlaceholder", ["$timeout", "mainFactory", function ($timeout, mf) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                var placeholderElement = $("<div></div>").insertAfter(element);
                placeholderElement.css({ userSelect: 'none' });
                placeholderElement.text(attrs.searchPlaceholder);
                placeholderElement.css("position", "absolute");
                placeholderElement.addClass(attrs.placeholderClass);

                var changeText = function() {
                    (mf.screenMode() == "mobile") ? placeholderElement.text(attrs.shortText) : placeholderElement.text(attrs.longText);
                }

                if (attrs.shortText || attrs.longText) {
                    changeText();
                    $(window).resize(function() { changeText(); });
                }

                element.on("keydown", function () {
                    $timeout(function () {
                        if (element.val())
                            placeholderElement.hide();
                    }, 10);

                });
                placeholderElement.on("click", function () {
                    element.focus();
                });
                scope.$watch(function () { return $(element).val(); }, function (val) {
                    val ? placeholderElement.hide() : placeholderElement.show();
                });

                element.on("change keyup paste", function () {
                    if (element.val()) {
                        placeholderElement.hide();
                    } else {
                        placeholderElement.show();
                    }
                });
                element.siblings(".b-close").on("mouseup", function () {
                    placeholderElement.show();
                });
            }
        }
    }])

    // Wrapper to jQuery FlexSlider plugin https://github.com/woothemes/FlexSlider
    // Example:  <div data-slider="slides" data-slideshow-speed="10000"><ul class="slides">...
    // "slider" attribute determines animation type "fade" or "slide"
    // "slideshow-speed" - slideshow speed in ms
    // "current-slide" - sets the initial slide number
    // "refresh" - reinits slider when the value is changed (refresh="someValue")
    // "items" - for instance, array of images used in the inner scope of the directive
    // Used in: Rotating Show Case, different types of carousels
    .directive("slider", ["$timeout", function ($timeout) {
        return {
            restrict: 'A',
            scope: {
                items: "=?",
                currentSlide: "=",
                slideshow: "@",
                refresh: "@"
            },
            template: function (element) {
                return element.innerHTML;
            },
            link: function (scope, element, attrs) {
                scope.slideshow = scope.slideshow ? scope.$eval(scope.slideshow) : true;
                var currentSlide = attrs.currentSlide ? parseInt(scope.currentSlide) : 0;
                var sliderOptions = {
                    animation: attrs.slider,
                    slideshowSpeed: attrs.slideshowSpeed,
                    slideshow: scope.slideshow,
                    itemWidth: '100%',
                    directionNav: true,
                    controlNav: true,
                    startAt: currentSlide,
                    start: function (slider) {
                        // fix bug with the last black slide
                        $timeout(function () {
                            $(slider).find("[data-bkstretch]").each(function () {
                                $(this).backstretch($(this).data("bkstretch"));
                            });
                        }, 10);
                    },
                    after: function (slider) {
                        $timeout(function () {
                            $(slider).find("[data-bkstretch]").each(function () {
                                $(this).backstretch("resize");
                            });
                        }, 10);
                        if (attrs.currentSlide) {
                            scope.currentSlide = slider.currentSlide;
                        }
                    }
                };
                scope.$watch("items", function () {
                    $timeout(function () {                     
                        if ($(element).parent().hasClass("hero-speciality"))
                        {
                            sliderOptions.smoothHeight = true;
                            if (parseInt($(element).parent().attr('slides-count')) == 1)
                            {
                                sliderOptions.directionNav = false;
                                sliderOptions.controlNav = false;
                                sliderOptions.touch = false;
                            }
                        }                       
                        element.flexslider(sliderOptions);
                        if ($(element).parent().hasClass("hero-speciality")) {
                            $(window).resize(function () {
                                setTimeout(function () {
                                    $(element).find('.flex-viewport').css('height', $(element).find('.flex-active-slide').height());
                                }, 1000);
                            });
                            $(window).load(function () {
                                setTimeout(function () {
                                    $(element).find('.flex-viewport').css('height', $(element).find('.flex-active-slide').height());
                                }, 1000);
                            });
                        }
                    });

                }, true);
                scope.$watch("refresh", function () {
                    $(window).resize();
                });
            }
        }
    }])

    // Scroll to top button directive
    .directive("scrollUpButton", [function () {
        return {
            link: function ($scope, element) {
                var fadeOffset = 300;
                function showHide() {
                    var scrollTop = $(window).scrollTop();
                    var start = 400;
                    var end = start + fadeOffset;
                    // change an element opacity
                    if ((scrollTop > start) && (scrollTop < end)) {
                        $(element).show();
                        var opacity = ((scrollTop - start) / fadeOffset);
                        $(element).css('opacity', opacity);
                    }
                    if (scrollTop < start) {
                        $(element).hide();
                    } else {
                        $(element).show();
                    }
                    if (scrollTop > end) {
                        $(element).css('opacity', 1);
                    }
                }
                function horizontalPosition() {
                    if ($(window).width() < 1390) {
                        $(element).css("right", "15px");
                    } else {
                        var marRight = $("div.wripper").offset().left - 62;
                        $(element).css("right", marRight);
                    }
                }
                showHide();
                horizontalPosition();
                $(window).on("scroll resize", function () {
                    showHide();
                    horizontalPosition();
                });
                $(element).on("click", function () {
                    $(document).scrollTopAnimated(0);
                });
            }
        }
    }])

    // Simple scroll to top by clicking on the element
    .directive("animatedScrollUp", [
        function () {
            return {
                restrict: "A",
                link: function (scope, element) {
                    $(element).on("click", function () {
                        $(document).scrollTopAnimated(0);
                    });
                }
            }
        }
    ])

    // Submit the closest form by clicking on the element
    .directive("clickSubmit", [function () {
        return {
            restrict: 'A',
            template: function (elem) { return elem.html(); },
            link: function (scope, element) {
                $(element).on("click", function () {
                    $(this).closest("form").submit();
                });
            }
        }
    }])

    // Special text input element with animated open/close feature, special behavior for mobile and desktop view
    // Used in: Blog landing page, Market Bell Ceremonies landing page
    .directive("scrollingSearch", ["mainFactory", "$timeout", function (mf, $timeout) {
        var inputsFocus = [];
        return {
            restrict: "A",
            template: function (element) {
                return element.innerHTML;
            },
            scope: {
                search: "=scrollingSearch",
                postForm: "=go",
                opened: "=searchOpened",
                switchFocus: "=switchFocus"
            },

            controller: function ($scope, $element, $attrs) {
                $timeout(function () {
                    // define dom elements
                    var button = $(".active-button", $element);
                    var form = $($element);
                    var input = $("input", $element);
                    if ($attrs.switchFocus !== undefined)
                        inputsFocus.push(input);
                    var close = $(".input-group-addon", $element);
                    var buttonClickEvent;

                    // init open/close state
                    $scope.opened = $scope.search ? true : false;

                    // init and reset on resize screen mode (desktop or mobile)
                    $scope.screenMode = mf.screenMode();
                    $(window).resize(function () {
                        $scope.screenMode = mf.screenMode();
                    });

                    $timeout(function () {
                        $scope.$watch("opened", function (opened) {
                            if ($scope.screenMode == "mobile") {
                                if (opened) {
                                    // open search form
                                    form.addClass("search-active");
                                    // todo replace .blog-page element by something the closest
                                    var inputWidth = $(".finger-banner").outerWidth() - button.outerWidth() - 1;
                                    button.siblings(".input-group").stop(false, true).animate({ width: inputWidth }, 200, 'swing', function () {
                                        close.show();
                                    });
                                    if (buttonClickEvent)
                                        $timeout(function () { input.focus(); }, 100);
                                } else {
                                    button.siblings(".input-group").stop(false, true).animate({ width: 0 }, 200, 'swing', function () {
                                        close.parents(".filter-search").removeClass("search-active");
                                    });
                                    // clear search variable
                                    $scope.search = "";
                                    close.hide();
                                }
                            } else {
                                if (opened) {
                                } else {
                                    $scope.search = "";
                                    close.hide();
                                }
                            }
                            // reset button click event
                            buttonClickEvent = false;
                        });
                    }, 20);

                    $scope.$watch("screenMode", function (screenMode) {
                        if (screenMode == "desktop") {
                            form.children(".input-group").stop(false, true).removeAttr("style");
                            form.removeClass("search-active");
                            if (!$scope.search)
                                close.hide();
                            else
                                close.show();
                        } else {
                            if ($scope.search) {
                                $scope.opened = true;
                            }
                        }
                    });

                    $scope.$watch("search", function (search) {
                        if ($scope.screenMode == "desktop") {
                            if (search) {
                                close.show();
                            } else {
                                close.hide();
                            }
                        }
                    });

                    // action on click button (close form in mobile view or go search)
                    $scope.buttonAction = function (event) {
                        buttonClickEvent = event ? true : false;
                        if ($scope.screenMode == "mobile") {
                            if ($scope.opened) {
                                $scope.postForm(event);
                            } else {
                                $scope.opened = true;
                            }
                        } else {
                            $scope.postForm(event);
                        }
                    }

                    // action on click close element
                    $scope.closeForm = function () {
                        $scope.opened = false;
                        $scope.search = "";
                        $timeout(function () { $scope.postForm(); });

                    }

                    // update .input-group width on resize window
                    $(window).resize(function () {
                        if ($scope.opened && ($scope.screenMode == "mobile")) {
                            form.addClass("search-active");
                            var inputWidth = $(".finger-banner").outerWidth() - button.outerWidth() - 1;
                            button.siblings(".input-group").outerWidth(inputWidth);
                            close.show();
                        }
                    });

                    $scope.$watch("switchFocus", function (v) {
                        var isFocus = false;
                        angular.forEach(inputsFocus, function (input) {
                            if (input.is(":focus")) {
                                isFocus = true;
                                input.blur();
                            }
                        });
                        //                        if (isFocus && v) {
                        //                            $timeout(function() {
                        //                                input.focusWithoutScrolling();
                        //                            }, 500);
                        //                        }
                    });
                });
            }
        }
    }])
    
    // Sets focus on input element when value changed to true
    .directive("focusMe", function ($timeout) {
        return {
            scope: { trigger: "=focusMe" },
            link: function (scope, element) {
                scope.$watch('trigger', function (value) {
                    if (value === true) {
                        $timeout(function () {
                            element[0].focus();
                            scope.trigger = false;
                        });
                    }
                });
            }
        };
    })

    // HEADER MENU DIRECTIVE
    .directive("header", ["$timeout", function ($timeout) {
        return {
            scope: true,
            controller: function ($scope, $element, $attrs) {

                /* MENU ITEMS SELECTION */
                var re = "^(/)?(.*?)(/index\.(html|htm|aspx|asp))?(/)?$";
                var locPath = (new RegExp(re, "gi")).exec(window.location.pathname)[2] + "/";
                $.each($(".navbar-nav li a"), function (i, a) {
                    var aPath = (new RegExp(re, "gi")).exec(a.pathname)[2] + "/";
                    if (new RegExp("^" + aPath + "(/?)(.*)", "gi").exec(locPath))
                        $(a.parentNode).addClass("an_active active");
                });

                var header = $element;
                var $dynamicPanel = $(".dynamic_panel", header);
                $scope.activePanel = false;
                var showTimeout = $attrs.timeout ? $attrs.timeout : 300;
                // don't apply timeout on touchscreens
                if (Modernizr.touch) {
                    showTimeout = 0;
                }

                $scope.$watch("activePanel", function (newVal, oldVal) {
                    if (newVal) {
                        if (oldVal == false) {
                            $dynamicPanel.addClass('open-menu').show(0, function () {
                                $('[data-label = ' + $scope.activePanel + ']', header).stop(true, true).slideDown('100', 'easeInOutSine', function () {
                                    $(this).addClass('drop-active');
                                    $dynamicPanel.height($(this).outerHeight());
                                });
                            });
                        } else {
                            $('.panel_state[data-label !=' + $scope.activePanel + ']', header).removeClass('drop-active').stop(false, true).fadeOut(100);
                            $('.panel_state[data-label =' + $scope.activePanel + ']', header).stop(false, true).fadeIn(200, 'swing', function () {
                                $("#dynamic_panel").height($(".drop-active").outerHeight());
                            }).addClass('drop-active');
                        }
                    } else {
                        $dynamicPanel.removeClass("open-menu").stop(true, true).slideUp(300, 'easeInOutSine', function () {
                            $(".navbar-nav li", header).removeClass("active");
                            $('.an_active', header).addClass("active");
                            $('.panel_state').stop(false, true).fadeOut().removeClass("drop-active");
                            $(this).height(0);
                        });
                    }
                });
                var dynamicMouseIn, navbarMouseIn;
                // close menu if a mouse cursor went out from the .navbar or dynamic-panel
                $dynamicPanel.on("mouseleave", function() {
                    dynamicMouseIn = false;
                    $timeout(function () {
                        if (navbarMouseIn) return;
                        $scope.activePanel = false;
                        $scope.$apply();
                    });
                });
                $dynamicPanel.on("mouseenter", function () { dynamicMouseIn = true;});
                $(".navbar-nav", header).on("mouseleave", function() {
                    navbarMouseIn = false;
                    $timeout(function () {
                        if (dynamicMouseIn) return;
                        $scope.activePanel = false;
                        $scope.$apply();
                    });
                });
                $(".navbar-nav", header).on("mouseenter", function() { navbarMouseIn = true;});


                // close menu on outside tap
                $(document).on('touchstart click', function (event) {
                    function isOutside(el) {
                        if (!(el.is(event.target)) && (el.has(event.target).length === 0))
                            return true;
                        else
                            return false;
                    }
                    if (isOutside($dynamicPanel) && isOutside($(".navbar-nav", header))) {
                        $scope.activePanel = false;
                        if (!$scope.$$phase) {
                            $scope.$apply();
                        }
                    }
                });
                // hide menu on esc press
                $(document).keyup(function (e) {
                    if (e.keyCode == 27) {
                        $scope.activePanel = false;
                        $scope.$apply();
                    }
                });
                var menuShowTimeout;
                $scope.changePanel = function (panel, $event) {
                    if (!$scope.activePanel && Modernizr.touch) {
                        $event.preventDefault();
                    }
                    var el = $(angular.element($event.target)).closest("li");

                    if (!$scope.activePanel || ($scope.activePanel != panel)) {
                        $(".navbar-nav li", header).removeClass("active");
                        $(el).addClass("active");
                    }
                    if (!$scope.activePanel) {
                        if (menuShowTimeout)
                            $timeout.cancel(menuShowTimeout);
                        menuShowTimeout = $timeout(function () {
                            if ($(el).hasClass('active')) {
                                $scope.activePanel = panel;
                                $scope.$apply();
                            }
                        }, showTimeout);
                    } else
                        $scope.activePanel = panel;
                    $(el).on("mouseleave", function () {
                        if (!$scope.activePanel) {
                            $timeout.cancel(menuShowTimeout);
                            $(".navbar-nav li", header).removeClass("active");
                            $('.an_active').addClass("active");
                        }
                    });
                }
            }
        };
    }])

    // Fixes backgdround behavior in block elements
    // Used in: sub-nav, four columns containers etc.
    .directive("eyebrowBlock", [function () {
        return {
            restrict: "C",
            scope: true,
            link: function (scope, element) {
                var blockWidth = element.children(".eyebrow").width() + 20;
                element.children(".eyebrow_line").css({ "left": blockWidth, "display": "block" });
                element.show();
            }
        }
    }])

    // Blog article tile, Market Bell event tile
    // Used in: Blog landing page, Market Bell Ceremonies landing page
    .directive("blogTile", ["$timeout", "mainFactory", function ($timeout, mf) {
        return {
            restrict: 'A',
            template: function (elem) { return elem.html(); },
            link: function (scope, element, attrs) {
                element.css("opacity", 0);
                var $info = element.find(".blog-info");
                var $desc = element.find(".blog-desc");
                var $image = element.find(".blog-image");
                $timeout(function () {
                    var img = new Image();
                    img.src = attrs.blogTile;

                    $(img).on("load error", function () {
                        $image.css("background-image", "url(" + attrs.blogTile.replace(/\(/g, "\\(").replace(/\)/g, "\\)") + ")");
                        element.velocity("transition.fadeIn", { duration: 700 });
                    });
                    var setAnimation = function () {
                        $info.css("bottom", "");
                        var elBottom = $info.css("bottom");

                        if (mf.screenMode() == "desktop") {
                            scope.charsCount = attrs.descrLengthDesktop ? attrs.descrLengthDesktop : 2000;
                            // set show info animation for desktop mode
                            element.hover(function () {
                                $info.velocity("stop").velocity({ bottom: '0' }, 500, "easeInOutSine");
                                $desc.velocity("stop").css("opacity", 0).velocity({ opacity: 1 }, 1000, "easeInOutSine");
                            }, function () {
                                $info.velocity("stop").velocity({ bottom: elBottom }, 500, "easeInOutSine");
                                $desc.velocity("stop").velocity({ opacity: 0 }, 1000, "easeInOutSine");
                            });
                        } else {
                            $desc.css("opacity", 1);
                            $info.css("bottom", 0);
                            scope.charsCount = attrs.descrLengthDesktop ? attrs.descrLengthDesktop : 2000;
                            element.unbind('mouseenter').unbind('mouseleave');
                        }
                    }
                    setAnimation();
                    $(window).resize(function () { setAnimation(); });
                });
            }
        }
    }])

    /* FACTORIES AND SERVICES */

    // Google feed loader factory
    .factory("feedLoader", ["$resource", function ($resource) {
        return $resource('http://ajax.googleapis.com/ajax/services/feed/load', {}, {
            fetch: { method: 'JSONP', params: { v: '1.0', callback: 'JSON_CALLBACK' } }
        });
    }])

    // Loads rss feed data as json
    // Used in: homepage social feed, nordpoospot feed
    .service("feed", ["$q", "feedLoader", function ($q, feedLoader) {
        function load(url, num) {
            var deferred = $q.defer();
            feedLoader.fetch({ q: url, num: num }, {}, function (data) {
                var feed = data.responseData.feed;
                // parse date
                angular.forEach(feed.entries, function (entry) {
                    entry.publishedDate = moment(entry.publishedDate, "ddd, D MMM YYYY HH:mm:ss ZZ")._d;
                });
                deferred.resolve(feed);
            }, function () {
                deferred.reject("Error while recieving data");
            });
            return deferred.promise;
        }
        return load;
    }]);

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
  def: 'easeOutQuad',
  swing: function (x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function (x, t, b, c, d) {
    return c*(t/=d)*t + b;
  },
  easeOutQuad: function (x, t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
  },
  easeInOutQuad: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
  },
  easeInCubic: function (x, t, b, c, d) {
    return c*(t/=d)*t*t + b;
  },
  easeOutCubic: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
  },
  easeInOutCubic: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
  },
  easeInQuart: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
  },
  easeOutQuart: function (x, t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
  },
  easeInOutQuart: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
  },
  easeInQuint: function (x, t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
  },
  easeOutQuint: function (x, t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
  },
  easeInOutQuint: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
  },
  easeInSine: function (x, t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
  },
  easeOutSine: function (x, t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
  },
  easeInOutSine: function (x, t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  },
  easeInExpo: function (x, t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function (x, t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function (x, t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function (x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
  },
  easeOutCirc: function (x, t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
  },
  easeInOutCirc: function (x, t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
  },
  easeInElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
  },
  easeOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
  },
  easeInOutElastic: function (x, t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
  },
  easeInBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
  },
  easeOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
  },
  easeInOutBack: function (x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
  },
  easeInBounce: function (x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
  },
  easeOutBounce: function (x, t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
  },
  easeInOutBounce: function (x, t, b, c, d) {
    if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
  }
});
