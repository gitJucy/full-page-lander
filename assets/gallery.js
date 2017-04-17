var $gallery ='#gallery';
$(function(){


//sclick function to open the gallery

$('#future').click(function(){
  $('#slides').delay(1000).fadeIn(1000);
  $('.slides-wrapper').delay(1000).fadeIn(1000);
  $('#content').fadeOut(500);
  $('#name').fadeOut(500);
  $('#future').fadeOut(500);
  // $('#social-buttons').fadeOut(500);



//galery div
$(function(){
      $("#slides").slidesjs({
        width: 940,
        height: 528,
      });
    });
  $(function(){
    $('#slides').slidesjs({
      navigation: {
        active:true,
        effect:"slide"
      }
    });
  })
    $(function(){
    $("#slides").slidesjs({
      pagination: {
        active: true,
        effect: "slide"
      }
    });
  });
  $(function(){
  $("#slides").slidesjs({
    play: {
      active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      effect: "slide",
        // [string] Can be either "slide" or "fade".
      interval: 5000,
        // [number] Time spent on each slide in milliseconds.
      auto:true,
        // [boolean] Start playing the slideshow on load.
      swap: true,
        // [boolean] show/hide stop and play buttons
      pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      restartDelay: 2500
        // [number] restart delay on inactive slideshow
    }
  });
});
  });
});

//  animate the slide from margin-left
//return to first slaid after reaching the end.
// });
