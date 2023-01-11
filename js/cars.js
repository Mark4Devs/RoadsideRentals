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
    $('.heading-undercover-cars').addClass('animate');
    $('.heading-undercover-cars').on("animationend", function(){
        $(this).css('opacity', '1');
    });
    $('.heading.cars').addClass('animate');
    $('.heading.cars').on("animationend", function(){
        $(this).css('opacity', '1');
    }); 
});