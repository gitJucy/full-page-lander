var $gallery ='#gallery';


//click function to open the gallery

$('#future').click(function(){
  $('.slides-wrapper').delay(500).fadeIn(500);
  $('#content').fadeOut(500);
  $('#name').fadeOut(500);
  $('#future').fadeOut(500);
  // $('#social-buttons').fadeOut(500);

});

$(function(){

// gallery div
  $('.slides-wrapper').slick({

    dots:false,
    adaptiveHeight:false,
    infinite:true,

});
});
