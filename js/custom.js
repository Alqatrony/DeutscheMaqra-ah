  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*0.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        } else {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*0.5;
        $('.list-progress .inner').css('height', MainTimelineContainerBottom + 'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      timeline.each(function(index, elem){
        isScrollIntoView(elem, index);
      });
    });
  
  })(window.jQuery);


  document.addEventListener('DOMContentLoaded', () => {
    function animateCounter(id, end, duration) {
      const obj = document.getElementById(id);
      let start = 0;
      const range = end - start;
      let current = start;
      const increment = end > start ? 1 : -1;
      const stepTime = Math.abs(Math.floor(duration / range));
  
      const timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  
    // Only run counter animations if the elements exist
    const studentsCounter = document.getElementById('students-counter');
    const hafithCounter = document.getElementById('hafith-counter');
    const scheickCounter = document.getElementById('scheick-counter');

    if (studentsCounter) animateCounter('students-counter', 100, 2000);
    if (hafithCounter) animateCounter('hafith-counter', 50, 2000);
    if (scheickCounter) animateCounter('scheick-counter', 25, 2000);
  });

  // Handle language dropdown selection
  $('.dropdown-item').on('click', function() {
    const selectedLang = $(this).text().toLowerCase();
    if (selectedLang.includes('العربية')) {
      switchLanguage('ar');
    } else if (selectedLang.includes('deutsch')) {
      switchLanguage('de');
    }
  });

  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });

    $(window).on('scroll', function(){
      function isScrollIntoView(elem, index) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(window).height()*0.5;
        if(elemBottom <= docViewBottom && elemTop >= docViewTop) {
          $(elem).addClass('active');
        } else {
          $(elem).removeClass('active');
        }
        var MainTimelineContainer = $('#vertical-scrollable-timeline')[0];
        var MainTimelineContainerBottom = MainTimelineContainer.getBoundingClientRect().bottom - $(window).height()*0.5;
        $('.list-progress .inner').css('height', MainTimelineContainerBottom + 'px');
      }
      var timeline = $('#vertical-scrollable-timeline li');
      timeline.each(function(index, elem){
        isScrollIntoView(elem, index);
      });
    });
  
  })(window.jQuery);