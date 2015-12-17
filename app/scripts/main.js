(function() {

  'use strict';

  // Carousel
  var items = [{
    id: 1,
    title: '1',
    description: 'Cuba esculpida em pedra natural de rio.'
  }, {
    id: 2,
    title: '2',
    description: 'Cuba esculpida em pedra natural de rio.'
  }, {
    id: 3,
    title: '3',
    description: 'Cuba esculpida em pedra natural de rio.'
  }, {
    id: 4,
    title: '4',
    description: 'Cuba esculpida em pedra natural de rio.'

  }, {
    id: 5,
    title: '5',
    description: 'Cuba esculpida em pedra natural de rio.'
  }];


  var html = items.map(function(item) {
    return '' +
      '<div>' +
        '<img src="/images/carousel/car_' + item.id + '.png"' +
             'alt="' + item.title + '"' +
             'data-id="' + item.id + '">' +
      '</div>';
  }).reduce(function(a, b) {
    return a + b;
  });

  $('.carousel').html(html);

  $('.carousel').slick({
    dots: false,
    speed: 200,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplaySpeed: 2100,
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
      breakpoint: 340,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  function bindInfo(id) {
    var item = items.filter(function(row) {
      return +row.id === +id;
    })[0];

    var innerHtml = '' +
      '<h2>' + item.title + '</h2>' +
      '<img src="/images/carousel/car_' + id + '.png" alt="' + item.title + '">' +
      '<p>' + item.description + '</p>';

    $('.popup .content').html(innerHtml);
  }

  // Popup toggler
  $('.slick-slide').on('click', 'img', function(e) {
    e.preventDefault();
    bindInfo($(this).data('id'));
    $('body').removeClass().addClass('pop-open');
  });

  $('.close-popup').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass();
  });

  // The menu toggler
  $('.close-menu').on('click', function(e) {
    e.preventDefault();
    $('body').removeClass();
  });

  $('.open-menu').on('click', function(e) {
    e.preventDefault();
    $('body').addClass('in');
  });

  // Form submission
  $('form').on('submit', function(e) {
    e.preventDefault();

    $('input[name="name"]').removeClass('error');
    $('input[name="email"]').removeClass('error');
    $('textarea[name="message"]').removeClass('error');

    var name = $('input[name="name"]').val();
    var email = $('input[name="email"]').val();
    var message = $('textarea[name="message"]').val();

    if(name.length > 0 && email.length > 0 && message.length > 0) {
      var formData = {
        name: name,
        email: email,
        message: message
      };

      $.ajax({
        url: '//formspree.io/leonardopeta@live.co.uk',
        method: 'POST',
        data: formData,
        dataType: 'json'
      }).done(function() {
        $('form').hide();
        $('.form-success').show();
      }).error(function() {
        $('form').hide();
        $('.form-error').show();
      });
    }
    else {
      if(name.length < 1) {
        $('input[name="name"]').addClass('error');
      }
      if(email.length < 1) {
        $('input[name="email"]').addClass('error');
      }
      if(message.length < 1) {
        $('textarea[name="message"]').addClass('error');
      }
    }
  });

})();
