$(function(){"use strict";var counter=false,screenShotSlider,screenShotSlider__2,testimonialsSlider,clientLogoSlider,statisticsCounter=$('.timer');function startCounter(){if(statisticsCounter.length&&!counter){var windowScroll=$(window).scrollTop(),timerPosition=statisticsCounter.offset().top,windowHeight=$(window).height();if(windowScroll-timerPosition+windowHeight>=0){counter=statisticsCounter.countTo();}}}
startCounter();$(".appsLand-links > li > a, .scrollLink").on('click',function(e){var className=$(this).attr("href");console.log(className);if(className.charAt(0)==="#"){e.preventDefault();var hash=this.hash,scrollTopOffset=$(hash).offset().top;$('html, body').animate({scrollTop:scrollTopOffset},500);}});$(".scrollToTop").on('click',function(e){$('html, body').animate({scrollTop:0},500);});function activeNavBar(){if($(window).scrollTop()>0){$(".appsLand-navbar").addClass("active-navbar");}else{$(".appsLand-navbar").removeClass("active-navbar");}}
activeNavBar();screenShotSlider=new Swiper('.swiper-container',{pagination:'.swiper-pagination',effect:'coverflow',grabCursor:false,centeredSlides:true,slidesPerView:'auto',nextButton:'.screenShots__style-1__btn-next',prevButton:'.screenShots__style-1__btn-prev',paginationClickable:true,spaceBetween:40,initialSlide:0,loop:true,shadow:false,coverflow:{rotate:30,stretch:0,depth:100,modifier:1,shadow:false}});screenShotSlider__2=new Swiper('.screenshots-slider-container__2',{pagination:'.swiper-pagination',centeredSlides:true,slidesPerView:'auto',paginationClickable:true,nextButton:'.screenShots__style-2__btn-next',prevButton:'.screenShots__style-2__btn-prev',loop:true,effect:'cube',grabCursor:true,cube:{shadow:false,slideShadows:true,shadowOffset:20,shadowScale:1}});testimonialsSlider=new Swiper('.testimonials-slider-container',{pagination:'.testimonials-slider-pagination',effect:'flip',grabCursor:true,nextButton:'.testimonials-slider-button-next',prevButton:'.testimonials-slider-button-prev',loop:true});clientLogoSlider=new Swiper('.clientLogos-slider-container',{slidesPerView:6,loop:true,breakpoints:{991:{slidesPerView:4},640:{slidesPerView:3},480:{slidesPerView:2},320:{slidesPerView:1}}});$(".option-template-menu-open").on("click",function(){$(this).parent().toggleClass("active");});$(".color-list a").on('click',function(e){e.preventDefault();$(".color-list li").removeClass("active");$(this).parent().addClass("active");$("#color-option").attr("href",$(this).attr("href"));});$('.dropdown').hover(function(){$(this).addClass("open");},function(){$(this).removeClass("open");});$(".menu-toggle").on("click",function(){$('.appsLand-navbar').toggleClass("mobile-menu-active");});function footerHeight(){$("body").css({"paddingBottom":$(".apps-footer").height()+"px"});}
$(window).on("load",function(){$('#myModal').on('hidden.bs.modal',function(){$('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"'+'stopVideo'+'","args":""}','*');});footerHeight();$(".loading").animate({"opacity":0},500,function(){$(this).remove();});new WOW().init();$('[data-toggle="tooltip"]').tooltip();});$(window).on("scroll",function(){activeNavBar();startCounter();if($(window).scrollTop()>1000){$(".scrollToTop").addClass("active");}else{$(".scrollToTop").removeClass("active");}});$(window).on("resize",function(){footerHeight();});});