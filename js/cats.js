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
  $('.navbar-toggler').on('click', function() { 
    $('.navigation-container').toggleClass('active');
    $('.header-menu-container').toggleClass('active');
    $('.circle-left').toggleClass('active');
    $('.circle-right').toggleClass('active'); 
  }); 
    $('.heading-undercover-cats').addClass('animate');
    $('.heading-undercover-cats').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.heading.cats').addClass('animate');
    $('.heading.cats').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.cat-item').addClass('animate');
    $('.cat-item').on("animationend", function(){
      $(this).css('opacity', '1');
    });

});