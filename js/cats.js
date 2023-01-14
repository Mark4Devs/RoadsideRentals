/*CAtegories page script*/


$(document).ready(function() {
  //mobile navigation dots and menu show/hide
  $('.navbar-toggler').on('click', function() { 
    $('.navigation-container').toggleClass('active');
    $('.header-menu-container').toggleClass('active');
    $('.circle-left').toggleClass('active');
    $('.circle-right').toggleClass('active'); 
  });
  
  //page animations
  $('.heading-undercover-cats').addClass('animate');
  $('.heading.cats').addClass('animate');
  $('.cat-item').addClass('animate');
});