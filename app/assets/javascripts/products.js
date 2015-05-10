$(document).on('ready page:load', function() {

  $('#search-form').submit(function(event) {
    event.preventDefault();
    var searchValue = $('#search').val();

  $.getScript('/products?search=' + searchValue);
  });

  $(window).scroll(function() {
    var url = $('.pagination span.next').children().attr('href');
    if (url && $(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      $('.pagination').text("Fetching more products...");
      return $.getScript(url);
    }
  });
});

  // $(window).on('scroll', function(event) {
  //   var self = $(this);
  //   distanceFromBottom = $(document).height() - ($(window).height() + $(window).scrollTop()) < 50
  //   fetchMore = true;

  //   if (distanceFromBottom < 50) {
  //     fetchMore = false;
  //     $.ajax ({
  //       url: $('[ref-"next"]').attr('href'),
  //       type: 'GET',
  //       dataType: 'script'
  //     }).done(function(response) {
  //       $('#products').append(response)
  //       fetchMore = true;
  //     });
  //   }
  // });



