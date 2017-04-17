$window = $(window);
$window.scroll(function() {
  $scroll_position = $window.scrollTop();
    if ($scroll_position > 60) { // if body is scrolled down by 300 pixels
        $('#footer').addClass('sticky');

        // to get rid of jerk
        header_height = $('#footer').innerHeight();
        $('body').css('padding-top' , header_height);
    } else {
        $('body').css('padding-top' , '0');
        $('#footer').removeClass('sticky');
    }
 });