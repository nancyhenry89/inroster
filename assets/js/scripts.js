$(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 1024px)");
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        if (isMobile.matches) {
          $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top-60
          }, 500, 'linear');
        }else{

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-93
        }, 500, 'linear');
      }
    });

});
