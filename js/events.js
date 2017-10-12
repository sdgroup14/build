var $preloader = $('.preloader-container'),
  $svg_anm = $preloader.find('#bodymovin');
$svg_anm.delay(2500).fadeOut();
$preloader.delay(3000).fadeOut('slow');






$('.current-lang').on('click', function(e) {
  $('.current-lang').toggleClass('lang-active ');
  $('.lang-toggle').toggleClass('toggle-active');
});

$(document).on('click', function(e) {
  if (!$(e.target).closest(".lang").length && $('.current-lang').hasClass('lang-active')) {
    $('.current-lang').removeClass('lang-active');
    $('.lang-toggle').removeClass('toggle-active');
  }
})

var swiper = new Swiper('.build-type', {
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
      // spaceBetween: 10
    },
    639: {
      slidesPerView: 1
      // spaceBetween: 10
    }

  }
});


$.ajax({
  dataType: 'json',
  url: 'json/types-data.json',
  success: function(data) {
    for (var i = 0; data.length > i; i++) {
      swiper.appendSlide(['<div class="swiper-slide"><div class="slide-content" data-type-build="' + data[i].type + '"><div class="slide-img-wrap"><img src="' + data[i].type_src + '" alt="build-type"></div><div class="slide-text">' + data[i].type_txt + '</div></div></div>']);
      swiper1.appendSlide(['<div class="swiper-slide"><div class="slide-content" data-type-build="' + data[i].type + '"><div class="slide-img-wrap"><img src="' + data[i].type_src + '" alt="build-type"></div><div class="slide-text">' + data[i].type_txt + '</div></div></div>']);
    }
  }
});



var swiper1 = new Swiper('.build-type-popup-swiper', {
  slidesPerView: 1,
  nextButton: ".next-popup-slide",
  prevButton: ".prev-popup-slide",
  onSlideChangeStart: function(e) {
    $('.swiper-slide-next').addClass('active-color');
       // $('.type-popup-details').html('');
       //  $('.type-popup-right').find('.type-popup-img-1').attr('src', '');
       //  $('.type-popup-right').find('.type-popup-img-2').attr('src', '');

  var this_type = e.activeIndex;
  $.ajax({
    dataType: 'json',
    url: 'json/types-data.json',
    success: function(data) {
        // swiper1.slideTo(this_type, 1);
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
      // spaceBetween: 10
    },
    639: {
      slidesPerView: 1
      // spaceBetween: 10
    }

  }
});

$('.build-type').on('click', '.slide-content', function() {
 $('.type-popup-details').html('');
        $('.type-popup-right').find('.type-popup-img-1').attr('src', '');
        $('.type-popup-right').find('.type-popup-img-2').attr('src', '');


  var this_type = $(this).attr('data-type-build') - 1;
  $.ajax({
    dataType: 'json',
    url: 'json/types-data.json',
    success: function(data) {
        swiper1.slideTo(this_type, 1);
        $('.type-popup-details').append(data[this_type].details);
        $('.type-popup-right').find('.type-popup-img-1').attr('src', data[this_type].scheme_1_src);
        $('.type-popup-right').find('.type-popup-img-2').attr('src', data[this_type].scheme_2_src);
    }
  });

  $('.type-popup').addClass('show-type-popup');
  $('.type-popup-wrapper').addClass('show-type-popup-wrapper');
  $('html, body').addClass('hidden-oflw');
});


$('.type-popup-close').on('click', function() {
  $('.type-popup').removeClass('show-type-popup');
  $('.type-popup-wrapper').removeClass('show-type-popup-wrapper');
  $('html, body').removeClass('hidden-oflw');

          $('.type-popup-details').html('');
        $('.type-popup-right').find('.type-popup-img-1').attr('src', '');
        $('.type-popup-right').find('.type-popup-img-2').attr('src', '');
});


$('.menu-item').not('.lang').on('mouseenter', function() {
  $(this).addClass('active-menu-item');
  $('.menu-item').not(this).css('opacity', '.55');
}).on('mouseleave', function() {
  $('.menu-item').removeClass('active-menu-item');
  $('.menu-item').css('opacity', '');
});

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

// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8
//   });
// }

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

$('.btn-type-add').on('click', function() {
  $('.plan-number-item').addClass('checked').attr('data-item-check', '1');
  $('.plan-marker').addClass('active').attr('data-visible', '1');
  $('.plan-type-item').addClass('active-all').attr('data-check', '1');
});

$('.btn-type-clear').on('click', function() {
  $('.plan-number-item').removeClass('checked').attr('data-item-check', '0');
  $('.plan-marker').removeClass('active').attr('data-visible', '0');
  $('.plan-type-item').removeClass('active-all').attr('data-check', '0');
});





var photo_l = $('.gallery-thumbs').find('.swiper-slide').length;

var galleryTop = new Swiper('.gallery-top', {
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  spaceBetween: 0,
  // loop: true,
  slidesPerView: 2,
  breakpoints: {
    1259: {
      slidesPerView: 1
      // loop: true,
    }
  }
});

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 0,
  // centeredSlides: true,
  // loop: true,
  touchRatio: 0.2,
  slidesPerView: 2,
  slideToClickedSlide: true,
  breakpoints: {
    1259: {
      slidesPerView: 1,
      // loop: true,
    }
  }
});

galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;


$('.gallery-thumbs').on('click', '.swiper-slide-active', function() {
  if (window.matchMedia("(min-width: 1260px)").matches) {

    $('.swiper-button-prev').click();
  }
});


$(document).on('scroll', function() {

  var top = $(document).scrollTop();
  // if(top > $('.s1').height() - ($('.call-ico').height() / 2) ){
  //   // $('.call-btn-container').addClass('move-to-bottom');
  // }

  if (top > $('.s8').offset().top - $(window).height() + $('.s8').height() && $('.call-ico').attr('data-call-open') != 1) {
    $('.call-ico').attr('data-call-open', '1');
    OpenCall($('.call-ico'));
  }
});

$('.menu-item a[href^="#"]').on("click.smoothscroll", function(e) {
  e.preventDefault();
  var i = this.hash,
    t = $(i);
  $("html, body").animate({ scrollTop: t.offset().top }, 500, "swing", function() {
    window.location.hash = i;
  });
});

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



(function() {
  $('.plan-map-container').panzoom({
    $zoomIn: $(".zoom-in"),
    $zoomOut: $(".zoom-out"),
    $reset: $(".zoom-reset"),
    startTransform: 'scale(1)',
    increment: 0.1,
    minScale: 1,
    maxScale: 3,
    contain: 'invert',
    //    focal: {
    //     clientX: $('.plan').width() / 2,
    //     clientY: $('.plan').height() / 2
    // }
  })
})();

$('.plan-settings').on('click', function() {
  $('.plan-scheme-container').addClass('show-settings');
});

$('.plan-close').on('click', function() {
  $('.plan-scheme-container').removeClass('show-settings');
});

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

// $('.menu-btn').queueAddClass('active').delay(180).queueAddClass('hide-line');
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