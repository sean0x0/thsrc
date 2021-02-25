window.onload = function () {
    let images = [
        '../img/main-shaped-1.png',
        '../img/main-shaped-2.png',
        '../img/main-shaped-3.png',
        '../img/main-shaped-bg.png',
    ];

    images.forEach((src) => {
        preload(src);
    })
}

let preload = src => {
    let img = new Image();
    img.src = src;
}  

  var main = $('main').position();
  var navHeight = $('#nav').height() + 100;

$('.cd-scroll').on('click', function (e) {


  $('html').animate({ scrollTop: main.top - navHeight }, 1000,);

})

$(window).on('scroll', function (event) {

  var scrollTop = $(this).scrollTop();

 

  /*
  $('.crossfade').css({
    opacity: function() {
      var elementHeight = $(this).height();
      return 0 + (elementHeight - scrollTop) / elementHeight;
    }
  });*/

  var yOffset = window.pageYOffset;
  var width = $(window).width();
  var breakpoint = 150;
  
  if (yOffset > breakpoint) {
    $("#nav").addClass('active');
    $("#nav-gradient").addClass('show');
    $(".navbar-toggler").removeClass('d-none');
    $(".navbar-nav").removeClass('d-lg-none');

    $('.crossfade').css( "opacity", "0" );
    

    
  } else {
    $("#nav").removeClass('active');
    $("#nav-gradient").removeClass('show');
    $(".navbar-toggler").addClass('d-none');
    $(".navbar-nav").addClass('d-lg-none');
    $('.crossfade').css( "opacity", "1" );
    

    
   
  }

  /*if (width < 768) {

    $("#nav").addClass('active');

  } else {
    $("#nav").removeClass('active');
  }*/
  

  /*if ($(window).scrollTop() > $(window).height()){
    $("#nav").addClass('active');
    $("#nav-gradient").addClass('show');
    $('.navbar-nav').velocity({ opacity: [ 1, "easeInSine", 0 ], delay: 1200, duration: 1000 });
    
  }else{
    $("#nav").removeClass('active');
    $("#nav-gradient").removeClass('show');
    
    
  }*/

});

