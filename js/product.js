/*Car preview page script*/

//mobile navigation dots and menu show/hide
$(document).ready(function(){
  $('.navbar-toggler').on('click', function() { 
    $('.navigation-container').toggleClass('active');
    $('.header-menu-container').toggleClass('active');
    $('.circle-left').toggleClass('active');
    $('.circle-right').toggleClass('active'); 
  }); 
});

//page animations
$(document).ready(function() {
  $('.heading-undercover-product').addClass('animate');
  $('.heading.product').addClass('animate');
});

/*Sliders*/
$(document).ready(function(){
  //car preview slider
  $(".product-slider").owlCarousel({
    items: 3,
    autoplay: false, 
    loop: true,
    center: true,
    margin: 15,
    nav: true,
    navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"] 
  });
  //comments about car slider 
  $(".comments-slider").owlCarousel({
    items: 3,
    nav: false,
    loop: true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    dots: true,
    margin: 25,
    responsive : {
      320 : {
        items: 1
      },
      500 : {
        items: 3
      }
    }
  });
  //image source onclick change
  $('.product-item').click(function(){
    var attr = $(this).children().attr('src');
    $('.preview-img').children().attr('src', attr)     
  })
});
/*Sliders*/