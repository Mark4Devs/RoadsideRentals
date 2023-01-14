/*Cars in selected category script*/ 

$(document).ready(function() {
  //mobile navigation dots and menu show/hide
  $('.navbar-toggler').on('click', function() { 
    $('.navigation-container').toggleClass('active');
    $('.header-menu-container').toggleClass('active');
    $('.circle-left').toggleClass('active');
    $('.circle-right').toggleClass('active'); 
  });

  //page animations
  $('.heading-undercover-cars').addClass('animate');
  $('.heading.cars').addClass('animate');

  // show/hide filters
  $('#btnFilters').on('click', function() { 
    $('.filters-heading').next().slideToggle(400).siblings('.filters-content').slideUp();
  }); 
});