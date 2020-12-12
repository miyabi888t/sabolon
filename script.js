$(document).ready(function() {
    $('.drawer').drawer();
  });


  jQuery('a[href^="#"]').click(function() {
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });


  new WOW().init();