var $gallery ='#gallery';


//sclick function to open the gallery

$('#future').click(function(){
  $('.slides-wrapper').show();
  $('#content').fadeOut(500);
  $('#name').fadeOut(500);
  $('#future').fadeOut(500);
  // $('#social-buttons').fadeOut(500);

});

$(function(){

// gallery div
  $('.slides-wrapper').slick({
    dots:true,
    adaptiveHeight:true,
    infinite:true,

});
});
