(function() {

  'use strict';

  $('.close-menu').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass('in');
  });

  $('.open-menu').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('in');
  });

  $('.carousel').slick({
    dots: false,
    speed: 200,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });

})();
