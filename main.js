jQuery.noConflict();
jQuery(function($){
    // 页面loading 
    function loader() {
	    $(window).on('load', function() { 
		    $(".loader").fadeOut(); 
		    $("#preloder").delay(400).fadeOut("slow");
	    });
    }
    loader();
    $(document).ready(function () {
        var devicePixelRatio = window.devicePixelRatio;
       // alert(devicePixelRatio)
        /*汉堡包导航滑入滑出*/
        $('.responsive').click(function (event) {
            $('.menu-list').slideToggle(400);
            $('.header-section>nav>p').slideToggle(400);
		    event.preventDefault();
        })

    /*-------------
      swiper
    --------------*/
    var owl = $('.owl-carousel');
    owl.owlCarousel({
      loop: true,
      items: 1,
      animateOut: 'fadeOut',
      autoplay: true,   
      autoplayTimeout: 1000,
      autoplayHoverPause: true,
      nav: true,            
    })
    })
})