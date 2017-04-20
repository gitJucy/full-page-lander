var $gallery ='#gallery';
$(function(){


//sclick function to open the gallery

$('#future').click(function(){
  $('.slides-wrapper').delay(1000).fadeIn(1000);
  $('#content').fadeOut(500);
  $('#name').fadeOut(500);
  $('#future').fadeOut(500);
  // $('#social-buttons').fadeOut(500);

});


//galery div
$(document).ready(function(){
  $('.slides-wrapper').slick({
    adptiveHeight: true,
    dots:true,
    centerMode:true
  });
});
