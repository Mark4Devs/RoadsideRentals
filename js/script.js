var exec=!0;$(document).ready((function(){$(".main-slider").owlCarousel({items:1,nav:!1,loop:!0,autoplay:!0,mouseDrag:!1,touchDrag:!1,dots:!0,margin:0,animateOut:"bounceOutDown",animateIn:"pulse"}),$(".comments-slider").owlCarousel({items:3,nav:!1,loop:!0,autoplay:!1,mouseDrag:!0,touchDrag:!0,dots:!0,margin:25,responsive:{320:{items:1},500:{items:3}}})})),$(document).ready((function(){$(".faq-btn").on("click",(function(){$(this).next().slideToggle(400).siblings(".faq-answer").slideUp(),$(this).toggleClass("active"),$(this).children(".fa-solid").toggleClass("active")})),$(".navbar-toggler").on("click",(function(){$(".navigation-container").toggleClass("active"),$(".header-menu-container").toggleClass("active"),$(".circle-left").toggleClass("active"),$(".circle-right").toggleClass("active")}))})),$((function(){$("a").click((function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var target=$(this.hash);if((target=target.length?target:$("[name="+this.hash.slice(1)+"]")).length)return $("html,body").animate({scrollTop:target.offset().top},500),!1}}))})),window.matchMedia("all and (min-width: 921px)").matches&&$(window).on("scroll",(function(){var homeTop=$(".home-page").offset().top,homeHeight=$(".home-page").outerHeight(),aboutTop=$(".about-page").offset().top,aboutHeight=$(".about-page").outerHeight(),processTop=$(".process-page").offset().top,processHeight=$(".process-page").outerHeight(),offersTop=$(".offers-page").offset().top,offersHeight=$(".offers-page").outerHeight(),commentsTop=$(".testimonials-page").offset().top,commentsHeight=$(".testimonials-page").outerHeight(),faqTop=$(".faq-page").offset().top,faqHeight=$(".faq-page").outerHeight(),windowHeight=$(window).height(),scrollTop=$(this).scrollTop();scrollTop>homeTop+homeHeight-windowHeight-500&&scrollTop<homeHeight-500?$(".nav-item:nth-of-type(1) .nav-link").addClass("active"):$(".nav-item:nth-of-type(1) .nav-link").removeClass("active"),scrollTop>aboutTop+aboutHeight-windowHeight-500&&exec?($(".number-count-value").each((function(){var $this=$(this);jQuery({count:0}).animate({count:$this.text()},{duration:4e3,step:function(){$this.text(Math.ceil(this.count))}})})),$(".about-image").addClass("animate-in"),$(".about-info").addClass("animate-in"),$(".heading-undercover-about").addClass("animate"),$(".heading.about").addClass("animate"),exec=!1):scrollTop>aboutTop+aboutHeight-windowHeight-500&&scrollTop<aboutTop+aboutHeight-windowHeight+500?$(".nav-item:nth-of-type(2) .nav-link").addClass("active"):$(".nav-item:nth-of-type(2) .nav-link").removeClass("active"),scrollTop>processTop+processHeight-windowHeight-500&&($(".heading-undercover-process").addClass("animate"),$(".heading.process").addClass("animate"),$(".stage").addClass("animate"),$(".process-container").addClass("animate"),$(".stages-content").addClass("animate-in"),$(".process-image-container").addClass("animate-in"),$(".process-image-text").addClass("animate")),scrollTop>offersTop+offersHeight-windowHeight-500&&($(".heading-undercover-offers").addClass("animate"),$(".heading.offers").addClass("animate"),$(".offers-heading-container .text").addClass("animate"),$(".offers-heading-container .rent-link").addClass("animate"),$(".offer-main").addClass("animate"),$(".offer").addClass("animate")),scrollTop>offersTop+offersHeight-windowHeight-500&&scrollTop<offersTop+offersHeight-windowHeight+500?$(".nav-item:nth-of-type(3) .nav-link").addClass("active"):$(".nav-item:nth-of-type(3) .nav-link").removeClass("active"),scrollTop>commentsTop+commentsHeight-windowHeight-500&&($(".heading-undercover-testimonials").addClass("animate"),$(".heading.testimonials").addClass("animate")),scrollTop>faqTop+faqHeight-windowHeight-500&&($(".heading-undercover-faq").addClass("animate"),$(".heading.faq").addClass("animate"),$(".faq-block").addClass("animate-in"),$(".faq-block.image").addClass("animate-in"))})),$(document).ready((function(){window.matchMedia("all and (max-width: 920px) and (min-height: 950px)").matches&&($(".number-count-value").each((function(){var $this=$(this);jQuery({count:0}).animate({count:$this.text()},{duration:4e3,step:function(){$this.text(Math.ceil(this.count))}})})),$(".about-image").addClass("animate-in"),$(".about-info").addClass("animate-in"),$(".heading-undercover-about").addClass("animate"),$(".heading.about").addClass("animate"),$(".heading-undercover-process").addClass("animate"),$(".heading.process").addClass("animate"),$(".stage").addClass("animate"),$(".process-container").addClass("animate"),$(".stages-content").addClass("animate-in"),$(".process-image-container").addClass("animate-in"),$(".process-image-text").addClass("animate"),$(window).on("scroll",(function(){var homeTop=$(".home-page").offset().top,homeHeight=$(".home-page").outerHeight(),aboutTop=$(".about-page").offset().top,aboutHeight=$(".about-page").outerHeight(),offersTop=$(".offers-page").offset().top,offersHeight=$(".offers-page").outerHeight(),commentsTop=$(".testimonials-page").offset().top,commentsHeight=$(".testimonials-page").outerHeight(),faqTop=$(".faq-page").offset().top,faqHeight=$(".faq-page").outerHeight(),windowHeight=$(window).height(),scrollTop=$(this).scrollTop();scrollTop>homeTop+homeHeight-windowHeight-500&&scrollTop<homeHeight-100?$(".nav-item:nth-of-type(1) .nav-link").addClass("active"):$(".nav-item:nth-of-type(1) .nav-link").removeClass("active"),scrollTop>aboutTop+aboutHeight-windowHeight+800&&scrollTop<aboutTop+aboutHeight-windowHeight+1200?$(".nav-item:nth-of-type(2) .nav-link").addClass("active"):$(".nav-item:nth-of-type(2) .nav-link").removeClass("active"),scrollTop>offersTop+offersHeight-windowHeight&&($(".heading-undercover-offers").addClass("animate"),$(".heading.offers").addClass("animate"),$(".offers-heading-container .text").addClass("animate"),$(".offers-heading-container .rent-link").addClass("animate"),$(".offer-main").addClass("animate"),$(".offer").addClass("animate")),scrollTop>offersTop+offersHeight-windowHeight+500&&scrollTop<offersTop+offersHeight-windowHeight+1e3?$(".nav-item:nth-of-type(3) .nav-link").addClass("active"):$(".nav-item:nth-of-type(3) .nav-link").removeClass("active"),scrollTop>commentsTop+commentsHeight-windowHeight&&($(".heading-undercover-testimonials").addClass("animate"),$(".heading.testimonials").addClass("animate")),scrollTop>faqTop+faqHeight-windowHeight&&($(".heading-undercover-faq").addClass("animate"),$(".heading.faq").addClass("animate"),$(".faq-block").addClass("animate-in"),$(".faq-block.image").addClass("animate-in"))}))),window.matchMedia("(max-width: 920px) and (max-height: 500px)").matches&&$(window).on("scroll",(function(){var homeTop=$(".home-page").offset().top,homeHeight=$(".home-page").outerHeight(),aboutTop=$(".about-page").offset().top,aboutHeight=$(".about-page").outerHeight(),processTop=$(".process-page").offset().top,processHeight=$(".process-page").outerHeight(),offersTop=$(".offers-page").offset().top,offersHeight=$(".offers-page").outerHeight(),commentsTop=$(".testimonials-page").offset().top,commentsHeight=$(".testimonials-page").outerHeight(),faqTop=$(".faq-page").offset().top,faqHeight=$(".faq-page").outerHeight(),windowHeight=$(window).height(),scrollTop=$(this).scrollTop();scrollTop>homeTop+homeHeight-windowHeight-500&&scrollTop<homeHeight-100?$(".nav-item:nth-of-type(1) .nav-link").addClass("active"):$(".nav-item:nth-of-type(1) .nav-link").removeClass("active"),scrollTop>aboutTop+aboutHeight-windowHeight-500&&exec?($(".number-count-value").each((function(){var $this=$(this);jQuery({count:0}).animate({count:$this.text()},{duration:4e3,step:function(){$this.text(Math.ceil(this.count))}})})),$(".about-image").addClass("animate-in"),$(".about-info").addClass("animate-in"),$(".heading-undercover-about").addClass("animate"),$(".heading.about").addClass("animate"),exec=!1):scrollTop>aboutTop+aboutHeight-windowHeight-100&&scrollTop<aboutTop+aboutHeight-windowHeight+200?$(".nav-item:nth-of-type(2) .nav-link").addClass("active"):$(".nav-item:nth-of-type(2) .nav-link").removeClass("active"),scrollTop>processTop+processHeight-windowHeight-200&&($(".heading-undercover-process").addClass("animate"),$(".heading.process").addClass("animate"),$(".stage").addClass("animate"),$(".process-container").addClass("animate"),$(".stages-content").addClass("animate-in"),$(".process-image-container").addClass("animate-in"),$(".process-image-text").addClass("animate")),scrollTop>offersTop+offersHeight-windowHeight-300&&($(".heading-undercover-offers").addClass("animate"),$(".heading.offers").addClass("animate"),$(".offers-heading-container .text").addClass("animate"),$(".offers-heading-container .rent-link").addClass("animate"),$(".offer-main").addClass("animate"),$(".offer").addClass("animate")),scrollTop>offersTop+offersHeight-windowHeight-200&&scrollTop<offersTop+offersHeight-windowHeight+200?$(".nav-item:nth-of-type(3) .nav-link").addClass("active"):$(".nav-item:nth-of-type(3) .nav-link").removeClass("active"),scrollTop>commentsTop+commentsHeight-windowHeight-500&&($(".heading-undercover-testimonials").addClass("animate"),$(".heading.testimonials").addClass("animate")),scrollTop>faqTop+faqHeight-windowHeight-500&&($(".heading-undercover-faq").addClass("animate"),$(".heading.faq").addClass("animate"),$(".faq-block").addClass("animate-in"),$(".faq-block.image").addClass("animate-in"))})),window.matchMedia("all and (max-width: 825px) and (max-height: 950px)").matches&&$(window).on("scroll",(function(){var homeTop=$(".home-page").offset().top,homeHeight=$(".home-page").outerHeight(),aboutTop=$(".about-page").offset().top,aboutHeight=$(".about-page").outerHeight(),offersTop=$(".offers-page").offset().top,offersHeight=$(".offers-page").outerHeight(),windowHeight=$(window).height(),scrollTop=$(this).scrollTop();scrollTop>homeTop+homeHeight-windowHeight-500&&scrollTop<homeHeight-100?$(".nav-item:nth-of-type(1) .nav-link").addClass("active"):$(".nav-item:nth-of-type(1) .nav-link").removeClass("active"),scrollTop>aboutTop+aboutHeight-windowHeight+500&&scrollTop<aboutTop+aboutHeight-windowHeight+800?$(".nav-item:nth-of-type(2) .nav-link").addClass("active"):$(".nav-item:nth-of-type(2) .nav-link").removeClass("active"),scrollTop>offersTop+offersHeight-windowHeight+400&&scrollTop<offersTop+offersHeight-windowHeight+800?$(".nav-item:nth-of-type(3) .nav-link").addClass("active"):$(".nav-item:nth-of-type(3) .nav-link").removeClass("active")})),window.matchMedia("all and (max-width: 500px) and (max-height: 920px)").matches&&$(window).on("scroll",(function(){var homeTop=$(".home-page").offset().top,homeHeight=$(".home-page").outerHeight(),aboutTop=$(".about-page").offset().top,aboutHeight=$(".about-page").outerHeight(),processTop=$(".process-page").offset().top,processHeight=$(".process-page").outerHeight(),offersTop=$(".offers-page").offset().top,offersHeight=$(".offers-page").outerHeight(),commentsTop=$(".testimonials-page").offset().top,commentsHeight=$(".testimonials-page").outerHeight(),faqTop=$(".faq-page").offset().top,faqHeight=$(".faq-page").outerHeight(),windowHeight=$(window).height(),scrollTop=$(this).scrollTop();scrollTop>homeTop+homeHeight-windowHeight-500&&scrollTop<homeHeight-500?$(".nav-item:nth-of-type(1) .nav-link").addClass("active"):$(".nav-item:nth-of-type(1) .nav-link").removeClass("active"),scrollTop>aboutTop+aboutHeight-windowHeight-200&&exec?($(".number-count-value").each((function(){var $this=$(this);jQuery({count:0}).animate({count:$this.text()},{duration:4e3,step:function(){$this.text(Math.ceil(this.count))}})})),$(".about-image").addClass("animate-in"),$(".about-info").addClass("animate-in"),$(".heading-undercover-about").addClass("animate"),$(".heading.about").addClass("animate"),exec=!1):scrollTop>aboutTop+aboutHeight-windowHeight-200&&scrollTop<aboutTop+aboutHeight-windowHeight+500?$(".nav-item:nth-of-type(2) .nav-link").addClass("active"):$(".nav-item:nth-of-type(2) .nav-link").removeClass("active"),scrollTop>processTop+processHeight-windowHeight-500&&($(".heading-undercover-process").addClass("animate"),$(".heading.process").addClass("animate"),$(".stage").addClass("animate"),$(".process-container").addClass("animate"),$(".stages-content").addClass("animate-in"),$(".process-image-container").addClass("animate-in"),$(".process-image-text").addClass("animate")),scrollTop>offersTop+offersHeight-windowHeight-800&&($(".heading-undercover-offers").addClass("animate"),$(".heading.offers").addClass("animate"),$(".offers-heading-container .text").addClass("animate"),$(".offers-heading-container .rent-link").addClass("animate"),$(".offer-main").addClass("animate"),$(".offer").addClass("animate")),scrollTop>offersTop+offersHeight-windowHeight-800&&scrollTop<offersTop+offersHeight-windowHeight+500?$(".nav-item:nth-of-type(3) .nav-link").addClass("active"):$(".nav-item:nth-of-type(3) .nav-link").removeClass("active"),scrollTop>commentsTop+commentsHeight-windowHeight-500&&($(".heading-undercover-testimonials").addClass("animate"),$(".heading.testimonials").addClass("animate")),scrollTop>faqTop+faqHeight-windowHeight-500&&($(".heading-undercover-faq").addClass("animate"),$(".heading.faq").addClass("animate"),$(".faq-block").addClass("animate-in"),$(".faq-block.image").addClass("animate-in"))}))}));