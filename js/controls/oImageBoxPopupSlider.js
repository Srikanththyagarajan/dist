var createImageModalSlider = function() {

    $('.oSliderImagesContainer .mLink-block__img > .mImage img.aImage, .oSliderImagesContainer .mLink-block__img span i').on('click', function(event) {
        event.stopPropagation();
        $component = $(this).parents(".oSliderImagesContainer");

        var $parent = $(this).parents(".mImage-block");
        var $modal = $component.next('.modal__slider');
        var $slid = $modal.find('.min');
        $_index = $component.children('.mImage-block').index($parent);
        _arr = [];
        $component.find('.mImage-block').each(function(){
            var $_image = $(this).find('.mImage img').attr('data-image');
            var $_description = $(this).find('.mDescription').html();
            if($_description == undefined){
                $_description = "";
            }
            var $_using = '<div class="oImageSlider__item"> <div class="oImageSlider__image"> <img src="'+$_image+'" alt="" /></div> <div class="oImageSlider__description">'+$_description+'</div></div>';

            _arr.push($_using);
        });

        var itemElements = $modal.find('.oImageSlider__item').size();

        if(itemElements <= 0){
            for(element=0; element < _arr.length; element++ ){
                $slid.cycle('add', _arr[element]);
            }
        }

        $modal.css('display','block');
        $slid.cycle('goto',$_index - 1);
        $('body').append('<div class="overlayBack"></div>');
        $('body').css('overflow','hidden');
        $modal.delay(600).queue(function(next) {
            $(this).removeClass('noViewable');
            next();
        });

    });

    $('body').on('click','.overlayBack, .b-close',function(){
        if (typeof ($component) !== "undefined") {
            var $modal = $component.next('.modal__slider');
            $('.overlayBack').remove();
            $modal.css('display','none');
            $modal.addClass('noViewable');
            $('body').css('overflow','visible');
        }
    });

    $(document).keyup(function(e){

        if(e.which == 27){
            var $modal = $component.next('.modal__slider');
            $('.overlayBack').remove();
            $modal.css('display','none');
            $modal.css('display','none');
            $modal.addClass('noViewable');
            $('body').css('overflow','visible');

        }
    });

};

$(document).ready(function () {
    createImageModalSlider();
});