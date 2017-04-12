var $gallery ='#gallery';
$(function(){


//sclick function to open the gallery

$('#future').click(function(){
  $('#gallery').delay(1000).fadeIn(1000);
  $('#content').fadeOut(500);
  $('#name').fadeOut(500);
  $('#future').fadeOut(500);
  $('#social-buttons').fadeOut(500);



//galery div
//set interval
var galleryInterval = setInterval(function() {
    setInterval(function(){
      $('#gallery .slides').animate({'margin:left':'-=500px'}, 1000);
    }, 3000);


//  animate the slide from margin-left
//return to first slaid after reaching the end.
});
});
