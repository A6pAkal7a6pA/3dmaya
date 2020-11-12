$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__nav-menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
  $('.program__content, .block-prog__right').click(function (event) {
    $('.retract', this).toggleClass('active');
  });
  $('.slider__body').slick({
    appendArrows: $('.block-arrows__images'),
    prevArrow: "<img class='btn btn-prev slick-prev' src='images/prev-arrow.png' alt=''>",
    nextArrow: "<img class='btn btn-next slick-next' src='images/next-arrow.png' alt=''>",
    arrows: true,
    dots: false,
    // adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    // autoplay: true, 
    // autoplaySpeed: 3000,
    // draggable: true,
    // swipe: true,
    // touchThreshold: 10,
    // touchMove: true,
    // waitForAnimate: true,
    // centerMode: false,
    variableWidth: false,

    // fade: false,
    // appendDots:$('.needclass'),  
  });
  $(".slider").on('afterChange', function (event, slick, currentSlide) {
    $('.block-arrows__body span').text(currentSlide + 1 );
  });

  $('.schedule__column img').click(function (event) {
    $('.schedule__colum-text').toggleClass('active');
  });
});
