// preloader animation
/*
var $preloader = $('.preloader-container'),
    $svg_anm = $preloader.find('#bodymovin');
$svg_anm.delay(2500).fadeOut();
$preloader.delay(3000).fadeOut('slow');
*/

// menu animation

$('.menu-item').not('.lang').on('mouseenter', function() {
    $(this).addClass('active-menu-item');
    $('.menu-item').not(this).css('opacity', '.55');
}).on('mouseleave', function() {
    $('.menu-item').removeClass('active-menu-item');
    $('.menu-item').css('opacity', '');
});

// menu scroll to section

$('.menu-item a[href^="#"]').on("click.smoothscroll", function(e) {
    e.preventDefault();
    var i = this.hash,
        t = $(i);
    $("html, body").animate({ scrollTop: t.offset().top }, 500, "swing", function() {
        window.location.hash = i;
    });
});

// Lang popup show/hide

$('.current-lang').on('click', function(e) {
    $('.current-lang').toggleClass('lang-active ');
    $('.lang-toggle').toggleClass('toggle-active');
});

// Lang popup hide by click on body

$(document).on('click', function(e) {
    if (!$(e.target).closest(".lang").length && $('.current-lang').hasClass('lang-active')) {
        $('.current-lang').removeClass('lang-active');
        $('.lang-toggle').removeClass('toggle-active');
    }
});

// build type swiper

var build_type_swiper = new Swiper('.build-type', {
    slidesPerView: 3,
    nextButton: ".next-slide",
    prevButton: ".prev-slide",
    onSlideChangeStart: function() {
        $('.swiper-slide-next').addClass('active-color');
    },
    onInit: function() {
        $('.swiper-slide-next').addClass('active-color');
    },
    breakpoints: {
        1259: {
            slidesPerView: 2
        },
        639: {
            slidesPerView: 1
        }
    }
});


//add types from json

$.ajax({
    dataType: 'json',
    url: 'json/types-data.json',
    success: function(data) {
        for (var i = 0; data.length > i; i++) {
            build_type_swiper.appendSlide(['<div class="swiper-slide" data-type-build-swiper="' + data[i].type + '"><div class="slide-content" data-type-build="' + data[i].type + '"><div class="slide-img-wrap"><img src="' + data[i].type_src + '" alt="build-type"></div><div class="slide-text">' + data[i].type_txt + '</div></div></div>']);
            build_type_swiper_popup.appendSlide(['<div class="swiper-slide" data-type-build-swiper="' + data[i].type + '"><div class="slide-content" data-type-build="' + data[i].type + '"><div class="slide-img-wrap"><img src="' + data[i].type_src + '" alt="build-type"></div><div class="slide-text">' + data[i].type_txt + '</div></div></div>']);
        }
    }
});


//add types general

var build_type_swiper_popup = new Swiper('.build-type-popup-swiper', {
    slidesPerView: 1,
    nextButton: ".next-popup-slide",
    prevButton: ".prev-popup-slide",
    keyboardControl: true,
    onSlideChangeStart: function(e) {
        $('.swiper-slide-next').addClass('active-color');
        var this_type = e.activeIndex;
        $.ajax({
            dataType: 'json',
            url: 'json/types-data.json',
            success: function(data) {
                $('.swiper-slide-next').addClass('active-color');
                $('.type-popup-details').html('');
                $('.type-popup-right').find('.type-popup-img-1').attr('src', '');
                $('.type-popup-right').find('.type-popup-img-2').attr('src', '');
                $('.type-popup-details').append(data[this_type].details);
                $('.type-popup-right').find('.type-popup-img-1').attr('src', data[this_type].scheme_1_src);
                $('.type-popup-right').find('.type-popup-img-2').attr('src', data[this_type].scheme_2_src);
            }
        });

    },
    onInit: function() {
        $('.swiper-slide-next').addClass('active-color');
    },
    breakpoints: {
        1259: {
            slidesPerView: 1
        },
        639: {
            slidesPerView: 1
        }
    }
});

// add type popup

$('.build-type').on('click', '.slide-content', function() {
    $('.type-popup-details').html('');
    $('.type-popup-right').find('.type-popup-img-1').attr('src', '');
    $('.type-popup-right').find('.type-popup-img-2').attr('src', '');


    var this_type = $(this).attr('data-type-build');
    console.log();
    $.ajax({
        dataType: 'json',
        url: 'json/types-data.json',
        success: function(data) {
            build_type_swiper_popup.slideTo($('.build-type-popup-swiper').find('.swiper-slide').filter('[data-type-build-swiper="' + this_type + '"]').index(), 1);
            $('.type-popup-details').append(data[this_type].details);
            $('.type-popup-right').find('.type-popup-img-1').attr('src', data[this_type].scheme_1_src);
            $('.type-popup-right').find('.type-popup-img-2').attr('src', data[this_type].scheme_2_src);
        }
    });

    $('.type-popup').addClass('show-type-popup');
    $('.type-popup-wrapper').addClass('show-type-popup-wrapper');
    $('html, body').addClass('hidden-oflw');
});


//Close types + scheme by esc

$(document).keyup(function(e) {
    if (e.keyCode == 27 && $('.type-popup-wrapper').hasClass('show-type-popup-wrapper') && !$('.type-popup-img-wrapper').hasClass('active')) {
        $('.type-popup').removeClass('show-type-popup');
        $('.type-popup-wrapper').removeClass('show-type-popup-wrapper');
        $('html, body').removeClass('hidden-oflw');
    }
    if (e.keyCode == 27 && $('.type-popup-img-wrapper').hasClass('active')) {
        $('.type-popup-img-wrapper').removeClass('active');
    }
});

//Close types by click

$('.type-popup-close').on('click', function() {
    $('.type-popup').removeClass('show-type-popup');
    $('.type-popup-wrapper').removeClass('show-type-popup-wrapper');
    $('html, body').removeClass('hidden-oflw');

    $('.type-popup-details').html('');
    $('.type-popup-right').find('.type-popup-img-1').attr('src', '');
    $('.type-popup-right').find('.type-popup-img-2').attr('src', '');
});


//Close/open types scheme 

$('.type-popup-img-wrapper').on('click', function() {
    $(this).toggleClass('active');
});


//call btn manipulation

function OpenCall(btn) {
    if (window.matchMedia("(min-width: 640px)").matches) {
        btn.addClass('active').attr('data-call-open', '1');
        $('.call-content').addClass('active');
        setTimeout(function() {
            $('.call-btn-txt').addClass('active');

        }, 300)
    }
}

function CloseCall() {
    if (window.matchMedia("(min-width: 640px)").matches) {
        $('.call-btn-txt').removeClass('active');
        $('.call-content').removeClass('active');

        setTimeout(function() {
            $('.call-ico').removeClass('active');
        }, 300)
    }
}

$('.call-ico').on('click', function() {
    OpenCall($(this));
});

$('.call-close').on('click', function() {
    CloseCall();
});


$(document).on('scroll', function() {
    var top = $(document).scrollTop();
    if (top > $('.s8').offset().top - $(window).height() + $('.s8').height() && $('.call-ico').attr('data-call-open') != 1) {
        $('.call-ico').attr('data-call-open', '1');
        OpenCall($('.call-ico'));
    }
});

// send user msg and close

$('body').on('click', '#callmsg', function() {
    if ($('#msgName').val() != '' && $('#msgPhone').val() != '') {
        data = new Object;
        data.name = $('#msgName').val();
        data.phone = $('#msgPhone').val();
        var senddata = '';
        senddata = JSON.stringify(data);
        $.ajax({
            type: "POST",
            url: '/call.php',
            data: senddata,
            success: function(e) {
                CloseCall();
            }
        });
    }
});

// click number of build

$('body').on('click', '.plan-number-item', function() {
    $(this).toggleClass('checked');
    if ($(this).attr('data-item-check') != 1) {
        $(this).attr('data-item-check', '1');
    } else {
        $(this).attr('data-item-check', '0');
    }

    var visible_item_type,
        data_number = $(this).attr('data-number'),
        data_type = $(this).attr('data-type'),
        item_type = $('.plan-type-item[data-plan-type="' + data_type + '"]'),
        item_number = $('.plan-marker[data-number="' + data_number + '"]');

    if (item_number.attr('data-visible') != 1) {
        item_number.addClass('active').attr('data-visible', '1');
    } else if (item_number.attr('data-visible') == 1) {
        item_number.removeClass('active').attr('data-visible', '0');
    }

    visible_item_type = $('.plan-marker[data-visible="1"]').filter('[data-type="' + data_type + '"]');

    if (item_type.attr('data-check') != 1 && visible_item_type.length) {
        item_type.addClass('active-not-all').attr('data-check', '1');
    } else if (item_type.attr('data-check') == 1 && !visible_item_type.length) {
        item_type.removeClass('active-not-all').attr('data-check', '0');
    }

    if (visible_item_type.length == $('.plan-number-item[data-type="' + data_type + '"]').length) {
        item_type.removeClass('active-not-all');
        item_type.addClass('active-all');

    } else if (visible_item_type.length != $('.plan-number-item[data-type="' + data_type + '"]').length && visible_item_type.length) {
        item_type.addClass('active-not-all');
        item_type.removeClass('active-all');
    } else if (visible_item_type.length != $('.plan-number-item[data-type="' + data_type + '"]').length && !visible_item_type.length) {
        item_type.removeClass('active-not-all');
        item_type.removeClass('active-all');
    }
});

// click type of build

$('body').on('click', '.plan-type-item', function(e) {
    e.preventDefault();
    $(this).toggleClass('active-all').removeClass('active-not-all');
    var data_type = $(this).attr('data-plan-type'),
        this_number_items = $('.plan-number-item[data-type="' + data_type + '"]'),
        this_markers = $('.plan-marker[data-type="' + data_type + '"]');

    if ($('.plan-number-item[data-type="' + data_type + '"]').length !== $('.plan-number-item[data-type="' + data_type + '"]').filter('[data-item-check="1"]').length) {
        this_number_items.addClass('checked').attr('data-item-check', '1');
        this_markers.addClass('active').attr('data-visible', '1');
    } else {
        this_number_items.removeClass('checked').attr('data-item-check', '0');
        this_markers.removeClass('active').attr('data-visible', '0');
    }
});

// open/show sseting (tablet-mobile)

$('.plan-settings').on('click', function() {
    $('.plan-scheme-container').addClass('show-settings');
});

$('.plan-close').on('click', function() {
    $('.plan-scheme-container').removeClass('show-settings');
});

// init markers

var plan_marker;

$.ajax({
    dataType: 'json',
    url: 'json/plan-data.json',
    success: function(data) {
        for (var i = 0; data.length > i; i++) {
            if (data[i].disp == 1) {
                $('.plan-map-container').append('<div class="plan-marker" data-type="' + data[i].type + '" data-number="' + data[i].number + '" style="left:' + data[i].x + '%; top: ' + data[i].y + '%;"><div class="marker-wrapper"><div class="marker-item"><span class="plan-marker-number">' + data[i].number + '</span></div></div></div>');
                $('.plan-number').append('<div class="plan-number-item" data-type="' + data[i].type + '" data-number="' + data[i].number + '">' + data[i].number + '</div>');
            }
        }
    }
});


// add all markers

$('.btn-type-add').on('click', function() {
    $('.plan-number-item').addClass('checked').attr('data-item-check', '1');
    $('.plan-marker').addClass('active').attr('data-visible', '1');
    $('.plan-type-item').addClass('active-all').attr('data-check', '1');
});

// clear all markers

$('.btn-type-clear').on('click', function() {
    $('.plan-number-item').removeClass('checked').attr('data-item-check', '0');
    $('.plan-marker').removeClass('active').attr('data-visible', '0');
    $('.plan-type-item').removeClass('active-all').attr('data-check', '0');
});

// zoom plagin

(function() {
    $('.plan-map-container').panzoom({
        $zoomIn: $(".zoom-in"),
        $zoomOut: $(".zoom-out"),
        $reset: $(".zoom-reset"),
        startTransform: 'scale(1)',
        increment: 0.2,
        minScale: 1,
        maxScale: 2,
        contain: 'invert'
    })
})();

var cur_scale = 1;
$(".zoom-in").on('click', function() {
    cur_scale = cur_scale - 0.15;
    if (cur_scale >= 0.7) {
        $('.plan-marker').css('transform', 'scale(' + cur_scale + ')');
    }
});

$(".zoom-reset").on('click', function() {
    $('.plan-marker').css('transform', 'scale(1)');
    cur_scale = 1;
});

// gallery

var photo_th = $('.gallery-thumbs').find('.swiper-slide').length;
var photo_t = $('.gallery-top').find('.swiper-slide').length;


var galleryTop = new Swiper('.gallery-top', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    spaceBetween: 0,
    slidesPerView: 1,
    // loop: true,
    breakpoints: {
        1259: {
            slidesPerView: 1
        }
    }
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    touchRatio: 0.2,
    slidesPerView: 1,
    // loop: true,
    // loop: true,
    slideToClickedSlide: true,
    breakpoints: {
        1259: {
            slidesPerView: 1
        }
    }
});

galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;


// $('.gallery-thumbs').on('click', '.swiper-slide-active', function() {
//     if (window.matchMedia("(min-width: 1260px)").matches) {
//         $('.swiper-button-prev').click();
//     }
// });


// Mobile menu manipulation

$.fn.queueAddClass = function(className) {
    this.queue('fx', function(next) {
        $(this).addClass(className);
        next();
    });
    return this;
};

$.fn.queueRemoveClass = function(className) {
    this.queue('fx', function(next) {
        $(this).removeClass(className);
        next();
    });
    return this;
};

var menu_flag;
$('.menu-btn-wrap').on('click', function() {
    if (!menu_flag) {
        menu_flag = 1;
        $('.menu-btn__common-line').addClass('active').delay(80).queueAddClass('active-hide');
        $('.menu-btn').delay(80).queueAddClass('active-rotate');
        $('.menu-container').addClass('menu-open');
        $('.lang').addClass('hide-for-menu');
        $('html, body').addClass('hidden-oflw');
        $("html, body").animate({ scrollTop: 0 }, 100, "swing");
    } else {
        menu_flag = 0;
        $('.menu-btn').queueRemoveClass('active-rotate');
        $('.menu-btn__common-line').delay(80).queueRemoveClass('active-hide').delay(1).queueRemoveClass('active');
        $('.menu-container').removeClass('menu-open');
        $('.lang').removeClass('hide-for-menu');
        $('html, body').removeClass('hidden-oflw');
    }
});

$('.menu-link-item[href^="#"]').on("click.smoothscroll", function(e) {
    e.preventDefault();
    var i = this.hash,
        t = $(i);
    menu_flag = 0;
    $('.menu-btn').queueRemoveClass('active-rotate');
    $('.menu-btn__common-line').delay(80).queueRemoveClass('active-hide').delay(1).queueRemoveClass('active');
    $('.menu-container').removeClass('menu-open');
    $('.lang').removeClass('hide-for-menu');
    $('html, body').removeClass('hidden-oflw');
    setTimeout(function() {
        $("html, body").animate({ scrollTop: t.offset().top }, 500, "swing", function() {
            window.location.hash = i;
        });
    }, 80);
});