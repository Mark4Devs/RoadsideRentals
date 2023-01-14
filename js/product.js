$(document).ready(function(){
    $(".product-slider").owlCarousel({
        items: 3,
        autoplay: false, 
        loop: true,
        center: true,
        margin: 15,
        nav: true,
        navText : ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"] 
    });
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
          // breakpoint from 0 up
          320 : {
            items: 1
          },
          500 : {
            items: 3
          }
      }
    });
    $('.navbar-toggler').on('click', function() { 
      $('.navigation-container').toggleClass('active');
      $('.header-menu-container').toggleClass('active');
      $('.circle-left').toggleClass('active');
      $('.circle-right').toggleClass('active'); 
    }); 
});
$('.product-item').click(function(){
    var attr = $(this).children().attr('src');
    $('.preview-img').children().attr('src', attr)     
})
$(function() {
    $('a').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 500); 
          return false;
        }
      }
    });
}); 
$(document).ready(function() {
    $('.heading-undercover-product').addClass('animate');
    $('.heading-undercover-product').on("animationend", function(){
        $(this).css('opacity', '1');
    });
    $('.heading.product').addClass('animate');
    $('.heading.product').on("animationend", function(){
        $(this).css('opacity', '1');
    }); 
});