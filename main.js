
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000, 'easeInOutExpo');
        return false;
      }
    }
  });


  $('.nav a').on('click', function() {
    if($('.navbar-toggle').is(':visible') )
      $('.navbar-toggle').click();
  });

  $('.flip-container').on('mousedown', function() {
    $(this).focus();
  });

  var win = $(window);
  var aboutPos = $("#about").position().top;
  var portfolioPos = $("#portfolio").position().top-30;
  console.log(aboutPos);
  console.log(portfolioPos);

  win.scroll(function() {
    var yPos = win.scrollTop();
    console.log(yPos);
    if($(window).scrollTop() + $(window).height() == document.body.scrollHeight) {
      $(".active").removeClass("active");
      $("#con").addClass("active");
    } else if (yPos >= portfolioPos) {
      $(".active").removeClass("active");
      $("#por").addClass("active");
    } else {
      $(".active").removeClass("active");
      $("#ab").addClass("active");
    }
  });
  
});

