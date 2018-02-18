$(function() {
    var isMobile = window.matchMedia("only screen and (max-width: 1024px)");
    $('a[href*=#]').on('click', function(e) {
        e.preventDefault();
        $('nav a').removeClass('active');
        $(this).addClass('active');
        if (isMobile.matches) {
          $('html, body').animate({
              scrollTop: $($(this).attr('href')).offset().top-60
          }, 500, 'linear');
          $('.navbar-collapse').removeClass('in');
        }else{

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top-93
        }, 500, 'linear');
      }
    });
});
$(window).scroll(function() {
if($(this).scrollTop() <= $('#home').offset().top) {

    $('nav a').removeClass('active');
  }
    else if ($(this).scrollTop() < $('#what').offset().top) {
		    $('nav a').removeClass('active');
        $('nav a[href="#what"]').addClass('active');
      }else if($(this).scrollTop() < $('#how').offset().top) {
		    $('nav a').removeClass('active');
        $('nav a[href="#how"]').addClass('active');
    }
    else if($(this).scrollTop() < $('#features').offset().top) {
      $('nav a').removeClass('active');
      $('nav a[href="#features"]').addClass('active');
  }

});
