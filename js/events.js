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
  // spaceBetween: 130,
  // freeMode: true,
  nextButton: ".next-slide",
  prevButton: ".prev-slide",
  onSlideChangeStart: function() {
    $('.swiper-slide-next').addClass('active-color');
  },
  onInit: function() {
    $('.swiper-slide-next').addClass('active-color');
  },
});

$('.menu-item').not('.lang').on('mouseenter', function(){
	$(this).addClass('active-menu-item');
	$('.menu-item').not(this).css('opacity', '.55');
}).on('mouseleave', function(){
	$('.menu-item').removeClass('active-menu-item');
	$('.menu-item').css('opacity', '');
});