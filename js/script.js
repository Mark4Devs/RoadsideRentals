/*index page script*/
 
var exec = true;
/*sliders scripts*/ 
$(document).ready(function(){
  //main banner slider
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

  //testimonials slider
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
});
/*sliders scripts*/

$(document).ready(function() {
  //frequently asked questions accordion
  $('.faq-btn').on('click', function() { 
    $(this).next().slideToggle(400).siblings('.faq-answer').slideUp();
    $(this).toggleClass('active');
    $(this).children('.fa-solid').toggleClass('active');
  });
  //mobile navigation dots
  $('.navbar-toggler').on('click', function() { 
    $('.navigation-container').toggleClass('active');
    $('.header-menu-container').toggleClass('active');
    $('.circle-left').toggleClass('active');
    $('.circle-right').toggleClass('active'); 
  }); 
});

/*smooth scroll on link click*/ 
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
/*smooth scroll on link click*/  

/*content animations for laptops/desktops*/ 
if (window.matchMedia('all and (min-width: 921px)').matches){
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
    //home section active link
    if(scrollTop > ((homeTop+homeHeight-windowHeight)-500) && scrollTop < (homeHeight - 500)){
      $('.nav-item:nth-of-type(1) .nav-link').addClass('active'); 
    }else{ 
      $('.nav-item:nth-of-type(1) .nav-link').removeClass('active');
    }
    /*about us page animations*/
    if (scrollTop > ((aboutTop+aboutHeight-windowHeight)-500) && exec){
      //count numbers
      $('.number-count-value').each(function () {
        var $this = $(this);
        jQuery({ count: 0 }).animate({ count: $this.text() }, {
          duration: 4000, 
          step: function () {
            $this.text(Math.ceil(this.count));
          }
        })
      }); 
      //about us page content animations
      $('.about-image').addClass('animate-in');
      $('.about-info').addClass('animate-in');
      $('.heading-undercover-about').addClass('animate');
      $('.heading.about').addClass('animate'); 
      exec = false; 
    }
    //about us page active link
    else if(scrollTop > ((aboutTop+aboutHeight-windowHeight)-500) && scrollTop < ((aboutTop+aboutHeight-windowHeight)+500)){
      $('.nav-item:nth-of-type(2) .nav-link').addClass('active'); 
    }else{ 
      $('.nav-item:nth-of-type(2) .nav-link').removeClass('active');
    } 
    /*about us page animations*/ 

    /*process page animations*/
    if (scrollTop > ((processTop+processHeight-windowHeight)-500)){  
      $('.heading-undercover-process').addClass('animate');
      $('.heading.process').addClass('animate'); 
      $('.stage').addClass('animate'); 
      $('.process-container').addClass('animate'); 
      $('.stages-content').addClass('animate-in'); 
      $('.process-image-container').addClass('animate-in'); 
      $('.process-image-text').addClass('animate'); 
    }
    /*process page animations*/

    /*best offers page animations*/ 
    if (scrollTop > ((offersTop+offersHeight-windowHeight)-500)){  
      $('.heading-undercover-offers').addClass('animate');
      $('.heading.offers').addClass('animate');
      $('.offers-heading-container .text').addClass('animate'); 
      $('.offers-heading-container .rent-link').addClass('animate');
      $('.offer-main').addClass('animate');
      $('.offer').addClass('animate'); 
    }
    // best offers page active link
    if(scrollTop > ((offersTop+offersHeight-windowHeight)-500) && scrollTop < ((offersTop+offersHeight-windowHeight)+500)){
      $('.nav-item:nth-of-type(3) .nav-link').addClass('active'); 
    }else{
      $('.nav-item:nth-of-type(3) .nav-link').removeClass('active');
    }
    /*best offers page animations*/ 

    /*testimonials page animations*/ 
    if (scrollTop > ((commentsTop+commentsHeight-windowHeight)-500)){  
      $('.heading-undercover-testimonials').addClass('animate');
      $('.heading.testimonials').addClass('animate');
    }
    /*testimonials page animations*/ 

    /*frequently asked queestions page animations*/ 
    if (scrollTop > ((faqTop+faqHeight-windowHeight)-500)){  
      $('.heading-undercover-faq').addClass('animate');
      $('.heading.faq').addClass('animate');
      $('.faq-block').addClass('animate-in');
      $('.faq-block.image').addClass('animate-in');
    }
    /*frequently asked queestions page animations*/  
  });
}

/*Tablets animations --vertical*/ 
$(document).ready(function(){
  if (window.matchMedia('all and (max-width: 920px) and (min-height: 950px)').matches){
    /*about us page animations*/
    //count numbers 
    $('.number-count-value').each(function () {
      var $this = $(this);
      jQuery({ count: 0 }).animate({ count: $this.text() }, {
        duration: 4000, 
        step: function () {
          $this.text(Math.ceil(this.count));
        }
      })
    });
    //about page content animations
    $('.about-image').addClass('animate-in');
    $('.about-info').addClass('animate-in');
    $('.heading-undercover-about').addClass('animate');
    $('.heading.about').addClass('animate'); 
    /*about us page animations*/ 

    /*process page animations*/
    $('.heading-undercover-process').addClass('animate');
    $('.heading.process').addClass('animate');
    $('.stage').addClass('animate');
    $('.process-container').addClass('animate');
    $('.stages-content').addClass('animate-in');
    $('.process-image-container').addClass('animate-in');
    $('.process-image-text').addClass('animate'); 
    /*process page animations*/ 

    $(window).on('scroll',function() {
      var homeTop = $('.home-page').offset().top,
      homeHeight = $('.home-page').outerHeight(),
      aboutTop = $('.about-page').offset().top,
      aboutHeight = $('.about-page').outerHeight(), 
      offersTop = $('.offers-page').offset().top,
      offersHeight = $('.offers-page').outerHeight(),
      commentsTop = $('.testimonials-page').offset().top,
      commentsHeight = $('.testimonials-page').outerHeight(),
      faqTop = $('.faq-page').offset().top,
      faqHeight = $('.faq-page').outerHeight(), 
      windowHeight = $(window).height(),
      scrollTop = $(this).scrollTop();

      //home page active link
      if(scrollTop > ((homeTop+homeHeight-windowHeight) -500) && scrollTop < (homeHeight) -100){
        $('.nav-item:nth-of-type(1) .nav-link').addClass('active'); 
      }else{ 
        $('.nav-item:nth-of-type(1) .nav-link').removeClass('active');
      }
      //about page active link 
      if(scrollTop > ((aboutTop+aboutHeight-windowHeight) +800) && scrollTop < ((aboutTop+aboutHeight-windowHeight) +1200)){
        $('.nav-item:nth-of-type(2) .nav-link').addClass('active'); 
      }else{ 
        $('.nav-item:nth-of-type(2) .nav-link').removeClass('active');
      } 
      /*offers page animations*/
      if (scrollTop > ((offersTop+offersHeight-windowHeight) )){  
        $('.heading-undercover-offers').addClass('animate');
        $('.heading.offers').addClass('animate');
        $('.offers-heading-container .text').addClass('animate');
        $('.offers-heading-container .rent-link').addClass('animate');
        $('.offer-main').addClass('animate');
        $('.offer').addClass('animate');
      } 
      //offers page active link
      if(scrollTop > ((offersTop+offersHeight-windowHeight)+500) && scrollTop < ((offersTop+offersHeight-windowHeight)+1000)){
        $('.nav-item:nth-of-type(3) .nav-link').addClass('active'); 
      }else{
        $('.nav-item:nth-of-type(3) .nav-link').removeClass('active');
      }
      /*offers page animations*/  

      /*testimonials page animations*/
      if (scrollTop > ((commentsTop+commentsHeight-windowHeight))){  
        $('.heading-undercover-testimonials').addClass('animate');
        $('.heading.testimonials').addClass('animate');
      }
      /*testimonials page animations*/

      /*FAQ page animations*/ 
      if (scrollTop > ((faqTop+faqHeight-windowHeight) )){  
        $('.heading-undercover-faq').addClass('animate');
        $('.heading.faq').addClass('animate');
        $('.faq-block').addClass('animate-in');
        $('.faq-block.image').addClass('animate-in');
      }
      /*FAQ page animations*/ 
    });
  } 
  /*Tablets animations --vertical*/

  /*Mobile animations --horizontal*/
  if(window.matchMedia('(max-width: 920px) and (max-height: 500px)').matches){
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

      //home page active link
      if(scrollTop > ((homeTop+homeHeight-windowHeight)-500) && scrollTop < (homeHeight - 100)){
        $('.nav-item:nth-of-type(1) .nav-link').addClass('active'); 
      }else{ 
        $('.nav-item:nth-of-type(1) .nav-link').removeClass('active');
      }

      /*about page animations*/   
      if (scrollTop > ((aboutTop+aboutHeight-windowHeight)-500) && exec){
        //number count
        $('.number-count-value').each(function () {
          var $this = $(this);
          jQuery({ count: 0 }).animate({ count: $this.text() }, {
            duration: 4000, 
            step: function () {
              $this.text(Math.ceil(this.count));
            }
          })
        });
        //about page content animations
        $('.about-image').addClass('animate-in');
        $('.about-info').addClass('animate-in');
        $('.heading-undercover-about').addClass('animate');
        $('.heading.about').addClass('animate');
        exec = false; 
      }
      //about page active link
      else if(scrollTop > ((aboutTop+aboutHeight-windowHeight)-100) && scrollTop < ((aboutTop+aboutHeight-windowHeight)+200)){
        $('.nav-item:nth-of-type(2) .nav-link').addClass('active'); 
      }else{ 
        $('.nav-item:nth-of-type(2) .nav-link').removeClass('active');
      }
      /*about page animations*/

      /*process page animations*/
      if (scrollTop > ((processTop+processHeight-windowHeight)-200)){  
        $('.heading-undercover-process').addClass('animate');
        $('.heading.process').addClass('animate');
        $('.stage').addClass('animate');
        $('.process-container').addClass('animate');
        $('.stages-content').addClass('animate-in');
        $('.process-image-container').addClass('animate-in');
        $('.process-image-text').addClass('animate'); 
      }
      /*process page animations*/

      /*offers page animations*/ 
      if (scrollTop > ((offersTop+offersHeight-windowHeight)-300)){  
        $('.heading-undercover-offers').addClass('animate');
        $('.heading.offers').addClass('animate'); 
        $('.offers-heading-container .text').addClass('animate');
        $('.offers-heading-container .rent-link').addClass('animate'); 
        $('.offer-main').addClass('animate'); 
        $('.offer').addClass('animate');  
      }
      //offers page active link 
      if(scrollTop > ((offersTop+offersHeight-windowHeight)-200) && scrollTop < ((offersTop+offersHeight-windowHeight)+200)){
        $('.nav-item:nth-of-type(3) .nav-link').addClass('active'); 
      }else{
        $('.nav-item:nth-of-type(3) .nav-link').removeClass('active');
      }
      /*offers page animations*/

      /*testimonials page animations*/
      if (scrollTop > ((commentsTop+commentsHeight-windowHeight)-500)){  
        $('.heading-undercover-testimonials').addClass('animate');
        $('.heading.testimonials').addClass('animate');
      }
      /*testimonials page animations*/

      /*FAQ page animations*/
      if (scrollTop > ((faqTop+faqHeight-windowHeight)-500)){  
        $('.heading-undercover-faq').addClass('animate'); 
        $('.heading.faq').addClass('animate'); 
        $('.faq-block').addClass('animate-in'); 
        $('.faq-block.image').addClass('animate-in'); 
      } 
      /*FAQ page animations*/
    });
  }
  /*smaller screens sizes active links*/
  if(window.matchMedia('all and (max-width: 825px) and (max-height: 950px)').matches){
    $(window).on('scroll',function() {
      var homeTop = $('.home-page').offset().top,
      homeHeight = $('.home-page').outerHeight(),
      aboutTop = $('.about-page').offset().top,
      aboutHeight = $('.about-page').outerHeight(), 
      offersTop = $('.offers-page').offset().top,
      offersHeight = $('.offers-page').outerHeight(), 
      windowHeight = $(window).height(),
      scrollTop = $(this).scrollTop();
      //home page active link
      if(scrollTop > ((homeTop+homeHeight-windowHeight) -500) && scrollTop < (homeHeight) -100){
        $('.nav-item:nth-of-type(1) .nav-link').addClass('active'); 
      }else{ 
        $('.nav-item:nth-of-type(1) .nav-link').removeClass('active');
      }
      //about page active link
      if(scrollTop > ((aboutTop+aboutHeight-windowHeight) +500) && scrollTop < ((aboutTop+aboutHeight-windowHeight)) +800){
        $('.nav-item:nth-of-type(2) .nav-link').addClass('active');  
      }else{ 
        $('.nav-item:nth-of-type(2) .nav-link').removeClass('active');
      }
      //offers page active link 
      if(scrollTop > ((offersTop+offersHeight-windowHeight)+400) && scrollTop < ((offersTop+offersHeight-windowHeight)+800)){
        $('.nav-item:nth-of-type(3) .nav-link').addClass('active'); 
      }else{
        $('.nav-item:nth-of-type(3) .nav-link').removeClass('active');
      }
    });
  }
  /*smaller screens sizes active links*/ 

  /*mobile screens animations --vertical*/
  if(window.matchMedia('all and (max-width: 500px) and (max-height: 920px)').matches){
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

      //home page active link
      if(scrollTop > ((homeTop+homeHeight-windowHeight)-500) && scrollTop < (homeHeight - 500)){
        $('.nav-item:nth-of-type(1) .nav-link').addClass('active'); 
      }else{ 
        $('.nav-item:nth-of-type(1) .nav-link').removeClass('active');
      }

      /*about page animations*/
      if (scrollTop > ((aboutTop+aboutHeight-windowHeight)-200) && exec){
        //numbers count
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
        $('.heading-undercover-about').addClass('animate'); 
        $('.heading.about').addClass('animate'); 
        exec = false; 
      }
      //about page active link
      else if(scrollTop > ((aboutTop+aboutHeight-windowHeight)-200) && scrollTop < ((aboutTop+aboutHeight-windowHeight)+500)){
        $('.nav-item:nth-of-type(2) .nav-link').addClass('active'); 
      }else{ 
        $('.nav-item:nth-of-type(2) .nav-link').removeClass('active');
      }
      /*about page animations*/

      /*process page animations*/
      if (scrollTop > ((processTop+processHeight-windowHeight)-500)){  
        $('.heading-undercover-process').addClass('animate'); 
        $('.heading.process').addClass('animate'); 
        $('.stage').addClass('animate'); 
        $('.process-container').addClass('animate'); 
        $('.stages-content').addClass('animate-in'); 
        $('.process-image-container').addClass('animate-in'); 
        $('.process-image-text').addClass('animate'); 
      }
      /*process page animations*/

      /*offers page animations*/
      if (scrollTop > ((offersTop+offersHeight-windowHeight)-800)){  
        $('.heading-undercover-offers').addClass('animate'); 
        $('.heading.offers').addClass('animate'); 
        $('.offers-heading-container .text').addClass('animate'); 
        $('.offers-heading-container .rent-link').addClass('animate'); 
        $('.offer-main').addClass('animate'); 
        $('.offer').addClass('animate'); 
      }
      // offers page active link
      if(scrollTop > ((offersTop+offersHeight-windowHeight)-800) && scrollTop < ((offersTop+offersHeight-windowHeight)+500)){
        $('.nav-item:nth-of-type(3) .nav-link').addClass('active'); 
      }else{
        $('.nav-item:nth-of-type(3) .nav-link').removeClass('active');
      }
      /*offers page animations*/

      /*testimonials page animations*/
      if (scrollTop > ((commentsTop+commentsHeight-windowHeight)-500)){  
        $('.heading-undercover-testimonials').addClass('animate');
        $('.heading.testimonials').addClass('animate');
      }
      /*testimonials page animations*/

      /*FAQ page animations*/
      if (scrollTop > ((faqTop+faqHeight-windowHeight)-500)){  
        $('.heading-undercover-faq').addClass('animate');
        $('.heading.faq').addClass('animate');
        $('.faq-block').addClass('animate-in');
        $('.faq-block.image').addClass('animate-in'); 
      } 
      /*FAQ page animations*/
    }); 
  } 
})



