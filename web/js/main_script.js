(function($) {
'use strict';
	
		var stamina = $(window);

    /*-------------------------------------------------------------------------*
     *                   change Menu background on scroll                      *
     *-------------------------------------------------------------------------*/
		stamina.on('scroll', function () {
		  var menu_area = $('.menu-area');
		  if (stamina.scrollTop() > 0) {
			  menu_area.addClass('sticky-menu');
		  } else {
			  menu_area.removeClass('sticky-menu');
		  }
		});

    /*-------------------------------------------------------------------------*
     *                   Navigation                                            *
     *-------------------------------------------------------------------------*/
		$(document).on('click', '.navbar-collapse.in', function (e) {
		  if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			  $(this).collapse('hide');
		  }
		});

		$('body').scrollspy({
		  target: '.navbar-collapse',
		  offset: 195
		});

    /*-------------------------------------------------------------------------*
     *                   Smooth scroll to anchor                               *
     *-------------------------------------------------------------------------*/
		$('a.smooth_scroll').on("click", function (e) {
		  e.preventDefault();
		  var anchor = $(this);
		  $('html, body').stop().animate({
			  scrollTop: $(anchor.attr('href')).offset().top - 50
		  }, 400);
		});

    /*-------------------------------------------------------------------------*
     *                  Portfolio                                              *
     *-------------------------------------------------------------------------*/
      $('.portfolio').mixItUp();

    /*-------------------------------------------------------------------------*
     *                   Scroll-to-top                                         *
     *-------------------------------------------------------------------------*/	
		stamina.on( 'scroll', function () {
			var top_top = $('#scroll-to-top');
			if (stamina.scrollTop() > 500) {
				top_top.fadeIn();
			} else {
				top_top.fadeOut();
			}
		});

})(jQuery);