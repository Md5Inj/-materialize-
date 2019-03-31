document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});

    M.Tabs.init(document.querySelectorAll('.tabs'), {});

    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems, {});

    
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').removeClass('scale-out');
        } else {
          $('#back-to-top').addClass('scale-out');
        }
      };
    backToTop();
    $(window).on('scroll', function() {
      backToTop();
    });
    
    $('#back-to-top').on('click', function(e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }

  $(function(){
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;

      $('html, body').animate({scrollTop: dn}, 1000);
    });
  });
});