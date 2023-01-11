var exec = true;
$(document).ready(function(){
    $(".main-slider").owlCarousel({
        items: 1,
        nav: false,
        loop: true,
        autoplay: true,
        mouseDrag: false,
        touchDrag: false,
        dots: true,
        margin: 0,
        animateOut: 'bounceOutDown',
        animateIn: 'pulse'
    });
    $(".comments-slider").owlCarousel({
      items: 3,
      nav: false,
      loop: true,
      autoplay: false,
      mouseDrag: true,
      touchDrag: true,
      dots: true,
      margin: 25
  });
});
$(document).ready(function() {
  $('.faq-btn').on('click', function() { 
    $(this).next().slideToggle(400).siblings('.faq-answer').slideUp();
    $(this).toggleClass('active');
    $(this).children('.fa-solid').toggleClass('active');
  });
}); 
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

$(window).on('scroll',function() {
  var homeTop = $('.home-page').offset().top,
  homeHeight = $('.home-page').outerHeight(),
  aboutTop = $('.about-page').offset().top,
  aboutHeight = $('.about-page').outerHeight(),
  processTop = $('.process-page').offset().top,
  processHeight = $('.process-page').outerHeight(),
  offersTop = $('.offers-page').offset().top,
  offersHeight = $('.offers-page').outerHeight(),
  commentsTop = $('.testimonials-page').offset().top,
  commentsHeight = $('.testimonials-page').outerHeight(),
  faqTop = $('.faq-page').offset().top,
  faqHeight = $('.faq-page').outerHeight(), 
  windowHeight = $(window).height(),
  scrollTop = $(this).scrollTop();
  if(scrollTop > ((homeTop+homeHeight-windowHeight)-500) && scrollTop < (homeHeight - 500)){
    $('.nav-item:nth-of-type(1) .nav-link').addClass('active'); 
  }else{ 
    $('.nav-item:nth-of-type(1) .nav-link').removeClass('active');
  }
  if (scrollTop > ((aboutTop+aboutHeight-windowHeight)-500) && exec){
    $('.number-count-value').each(function () {
      var $this = $(this);
      jQuery({ count: 0 }).animate({ count: $this.text() }, {
        duration: 4000, 
        step: function () {
          $this.text(Math.ceil(this.count));
        }
      })
    });
    $('.about-image').addClass('animate-in');
    $('.about-info').addClass('animate-in');
    $('.about-image').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.about-info').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.heading-undercover-about').addClass('animate');
    $('.heading-undercover-about').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.heading.about').addClass('animate');
    $('.heading.about').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    exec = false; 
  }else if(scrollTop > ((aboutTop+aboutHeight-windowHeight)-500) && scrollTop < ((aboutTop+aboutHeight-windowHeight)+500)){
    $('.nav-item:nth-of-type(2) .nav-link').addClass('active'); 
  }else{ 
    $('.nav-item:nth-of-type(2) .nav-link').removeClass('active');
  }
  if (scrollTop > ((processTop+processHeight-windowHeight)-500)){  
    $('.heading-undercover-process').addClass('animate');
    $('.heading-undercover-process').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.heading.process').addClass('animate');
    $('.heading.process').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.stage').addClass('animate');
    $('.stage').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.process-container').addClass('animate');
    $('.process-container').on("animationend", function(){
      $(this).css('opacity', '1'); 
    });
    $('.stages-content').addClass('animate-in');
    $('.stages-content').on("animationend", function(){
      $(this).css('opacity', '1'); 
    });
    $('.process-image-container').addClass('animate-in');
    $('.process-image-container').on("animationend", function(){
      $(this).css('opacity', '1'); 
    });
    $('.process-image-text').addClass('animate');
    $('.process-image-text').on("animationend", function(){
      $(this).css('opacity', '1'); 
    });
  }
  if (scrollTop > ((offersTop+offersHeight-windowHeight)-500)){  
    $('.heading-undercover-offers').addClass('animate');
    $('.heading-undercover-offers').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.heading.offers').addClass('animate');
    $('.heading.offers').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.offers-heading-container .text').addClass('animate');
    $('.offers-heading-container .text').on("animationend", function(){
      $(this).css('opacity', '1');
    }); 
    $('.offers-heading-container .rent-link').addClass('animate');
    $('.offers-heading-container .rent-link').on("animationend", function(){
      $(this).css('opacity', '1');
    }); 
    $('.offer-main').addClass('animate');
    $('.offer-main').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.offer').addClass('animate');
    $('.offer').on("animationend", function(){
      $(this).css('opacity', '1'); 
    });
     
  }
  if(scrollTop > ((offersTop+offersHeight-windowHeight)-500) && scrollTop < ((offersTop+offersHeight-windowHeight)+500)){
    $('.nav-item:nth-of-type(3) .nav-link').addClass('active'); 
  }else{
    $('.nav-item:nth-of-type(3) .nav-link').removeClass('active');
  }
  if (scrollTop > ((commentsTop+commentsHeight-windowHeight)-500)){  
    $('.heading-undercover-testimonials').addClass('animate');
    $('.heading-undercover-testimonials').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.heading.testimonials').addClass('animate');
    $('.heading.testimonials').on("animationend", function(){
      $(this).css('opacity', '1');
    }); 
  }
  if (scrollTop > ((faqTop+faqHeight-windowHeight)-500)){  
    $('.heading-undercover-faq').addClass('animate');
    $('.heading-undercover-faq').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.heading.faq').addClass('animate');
    $('.heading.faq').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.faq-block').addClass('animate-in');
    $('.faq-block').on("animationend", function(){
      $(this).css('opacity', '1');
    });
    $('.faq-block.image').addClass('animate-in');
    $('.faq-block.image').on("animationend", function(){
      $(this).css('opacity', '1');
    });
  } 
});
