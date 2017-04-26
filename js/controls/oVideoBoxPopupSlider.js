
var setMaxHeight = function () {
    $(".oVideoBoxPopupSliderDynamic").each(function () {
        var maxHeight = 0;
        $(this).find(".oVideoSlider__item").each(function () {
            var element = $(this);
            var elementHeight = element.height();
            maxHeight = elementHeight > maxHeight ? elementHeight : maxHeight;
        });

        $(this).find(".oVideoSlider").height(maxHeight + "px");
    })
};

var createModalCarousel = function (component) {
    var desktopVideoIndex = -1;
    var mobileVideoIndex = -1;

    var description = '';

    var desktop_video_data_array = [];
    var mobil_video_data_array = [];

    $(component).find(".oVideoSlider__item:not(.cycle-sentinel)").each(function () {
        var videoItemContainer = $(this);
        var isMobile = videoItemContainer.parent().hasClass("mobileView");
        if (!isMobile) {
            videoItemContainer.find(".carouselModal").each(function () {
                var index = desktopVideoIndex + 1;
                var video_data_item = { videoUrl: "", title: "", description: "", youtubeId: "", iframeId: "" };
                var videoChild = $(this);
                video_data_item.youtubeId = videoChild.find('.video-embedded').attr('data-videoid');
                video_data_item.title = ""; // videoChild.find('.aHeading').html();
                video_data_item.videoUrl = videoChild.find('iframe').attr('src') + "&autoplay=1";
                if (videoChild.find('.aBody').html()) {
                    video_data_item.description = videoChild.find('.aBody').html();
                } else {
                    video_data_item.description = '';
                }

                desktop_video_data_array.push(video_data_item);
                var playButton = videoChild.find(".blocker i");
                playButton.off("click");
                playButton.on("click", function () {
                    showModal(desktop_video_data_array, index);
                });
                desktopVideoIndex++;
            });
        } else {
            videoItemContainer.find(".carouselModal").each(function (index) {
                var index = mobileVideoIndex + 1;
                var video_data_item = { videoUrl: "", title: "", description: "", youtubeId: "", iframeId: "" };
                var videoChild = $(this);
                video_data_item.youtubeId = videoChild.find('.video-embedded').attr('data-videoid');
                video_data_item.title = ""; // videoChild.find('.aHeading').html();
                video_data_item.videoUrl = videoChild.find('iframe').attr('src') + "&autoplay=1";
                if (videoChild.find('.aBody').html()) {
                    video_data_item.description = videoChild.find('.aBody').html();
                } else {
                    video_data_item.description = '';
                }

                mobil_video_data_array.push(video_data_item);
                var playButton = videoChild.find(".blocker i");
                playButton.off("click");
                playButton.on("click", function () {
                    showModal(mobil_video_data_array, index);
                });
                mobileVideoIndex++;
            });
        }
    });
};

//videoUrl, title, description, youtubeId, iframeId
//{videoUrl: "", title: "", description: "", youtubeId: "", iframeId: ""}
var showModal = function (video_data_array, index) {

    var currentYTPlayer;
    var ytPlayerList = {};
    var currentIndex = 0;

    var mSpaces = [119, 45, 45, 45];

    var videosHtml = "";
    for (var i = 0; i < video_data_array.length; i++) {
        if (video_data_array[i].title) { // searching for title
            var info_title = '<h2 class= "aHeading">' + video_data_array[i].title + '</h2>';
        } else {
            info_title = "";
        }

        // making the iframe to inject
        var youtubeEmbed = '<div class="video-embedded" style="height: 522px;"><iframe id="' + video_data_array[i].youtubeId + '" width="100%" height="100%" src="https://www.youtube.com/embed/' + video_data_array[i].youtubeId + '?enablejsapi=1" frameborder="0"></iframe></div>';

        videosHtml += '<div class="modal-body">' +
                        '<div class="modal-inner">' +
                            '<span class="loader-white-50px  velocity-animating" data-fade="false" style="display: inline-block; transform: rotateZ(272.88deg); opacity: 0;"></span>' +
                            youtubeEmbed +
                        '</div>' +
                        '<div class="popup_des">' + video_data_array[i].description + '</div>' +
                        '<div class="background"></div>' +
                     '</div>'
    }

    // constructing the modal
    var modalContent = '<div class="modal-backdrop  in" modal-backdrop="" style="z-index: 1040;"></div>' +
                        '<div tabindex="-1" role="dialog" class="modal  in" style="z-index: 1050; display: none; opacity: 1; background-color: rgba(0, 0, 0, 0.901961);">' +
                            '<span class="loader loader-white-50px" style="display:none"></span>' +
                            '<div class="modal-dialog modal-video nasdaq-featured-modal-video" style="visibility: visible; opacity: 1; display: block;">' +
                                '<div class="aPrevArrow">' +
                                    '<i class="fa fa-angle-left"></i>' +
                                '</div>' +
                                '<div class="aNextArrow">' +
                                    '<i class="fa fa-angle-right"></i>' +
                                '</div>' +
                                '<div class="modal-content" modal-transclude="">' +
                                    '<span class="b-close ">X</span>' +
                                    '<div class="video-cycle-slideshow" data-cycle-fx="scrollHorz" data-cycle-timeout="0" data-cycle-slides="> div.modal-body" data-cycle-log="false" data-cycle-prev=".aPrevArrow" data-cycle-next=".aNextArrow">' + videosHtml + '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>';

    $('body').addClass('loaded modal-open').append(modalContent); // adding a class to the body in order to change some patterns and adding the dynamic created modal in the body
    var modal = $('.modal'); // searching for the created modal
    var alto = $(window).height(); // getting the height of the browser window
    modal.margin = 50; // establishing the margin of the modal window
    modal.top = alto; // assigning the height we get before
    // $('.modal-content').css('margin-top',alto*0.5);

    $(window).on('resize', function () {
        var alto = $(window).height();
        // getting the height in resize case
        // $('.modal-content').css('margin-top',alto*0.5);
    });

    var modal_image = modal.find('img'); // getting the height of the image
    var modal_dialog = modal.find('.modal-dialog');  // getting the wrapper
    var modal_backdrop = $('.modal-backdrop'); // getting the backdrop
    var infoblock = modal.find('.inf-block__idesc'); // getting the content of the description

    modal.fadeIn('slow', function () { // show the modal smoothly
        //hide the loader
        modal.find('.loader').remove(); // removing the loader
        modal.find('.loader-white-50px').remove(); // removing the loader wrapper
        modal_backdrop.css({
            'z-index': '1040',
            display: 'none'
        });
    });

    var callYoutubeApi = function (data_video_array, index) {
        for (var i = 0; i < data_video_array.length; i++) {
            var autoPlay = i == index ? 1 : 0;
            onYouTubeIframeAPIReady(data_video_array[i].youtubeId, autoPlay, i);
        }
    };

    function onYouTubeIframeAPIReady(youtubeId, autoplay, index) {
        var player = new YT.Player(youtubeId, {
            playerVars: { 'controls': 0 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        ytPlayerList[index, youtubeId] = player;
        currentYTPlayer = autoplay == 1 ? player : currentYTPlayer;
    };

    function stopVideo() {
        currentYTPlayer.stopVideo();
    };

    function pauseVideo() {
        currentYTPlayer.pauseVideo();
    };

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        setTimeout(function () {
            currentYTPlayer.playVideo();
        }, 1000);
    };

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    function onPlayerStateChange(event) {
        /*if (event.data == YT.PlayerState.PLAYING && !done) {
         setTimeout(stopVideo, 6000);
         done = true;
         }*/
    };

    function closeModal() { // function to close the modal window
        $('.video-cycle-slideshow').cycle('destroy');
        modal_backdrop.remove();

        modal.remove();

        $('body').removeClass('loaded modal-open');
    }

    $(document).keyup(function (event) { // using scape to close the modal
        if (event.keyCode == 27) {
            closeModal();
        }
    });

    $('span.b-close').on('click', function (event) { // using the b-close button to close the modal
        closeModal();
    });

    /*modal.on('click', function (event) { // cloase modal with click in the background
        if ($(event.target).is('.modal')) {
            closeModal();
        }
    });*/

    $('.video-cycle-slideshow').on("cycle-next", function () {
        pauseVideo();
        currentIndex = currentIndex + 1 >= video_data_array.length ? 0 : currentIndex + 1;
        var nextVideoYoutubeId = video_data_array[currentIndex].youtubeId;
        currentYTPlayer = ytPlayerList[currentIndex, nextVideoYoutubeId];
        onPlayerReady();
    });

    $('.video-cycle-slideshow').on("cycle-prev", function () {
        pauseVideo();
        currentIndex = currentIndex - 1 < 0 ? video_data_array.length - 1 : currentIndex - 1;
        var nextVideoYoutubeId = video_data_array[currentIndex].youtubeId;
        currentYTPlayer = ytPlayerList[currentIndex, nextVideoYoutubeId];
        onPlayerReady();
    });

    $('.video-cycle-slideshow').cycle({ startingSlide: index });

    currentIndex = index;
    callYoutubeApi(video_data_array, index);  // calling our youtube constructor function        

};


//Note: Close overlay only clicking in the close btn, requested by client
//$(document).ready(function () {
window.onload = function () {

    $('.blocker').on("click", function () {
        $('.modal').off("click");
    });

    setMaxHeight();

    $(window).on("resize", function () {
        setMaxHeight();
    });

    for (var i = 0; i < $(".oVideoBoxPopupSliderDynamic").length; i++) {
        var SliderObj = $(".oVideoBoxPopupSliderDynamic")[i];
        createModalCarousel(SliderObj);
    }
    $(".flexDisplay").css("display","flex");
}
//});