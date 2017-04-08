// drops in elements after a delay on full DOM load
$(document).ready(function(){
// timing for the first line of text
      $('#find').hide().delay(3500).fadeIn().delay(1000).fadeOut(2000);
//timing for second larger bold word
      $('#future').hide().delay(6800).fadeIn();
//timing for social media icon bar fade in
      $('#social-buttons').hide().delay(7000).fadeIn(1000);

      $('#hint').hide().delay(10000).fadeIn();

    });
