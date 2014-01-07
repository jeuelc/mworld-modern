/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundMegaCities.pause(); bgsoundMegaCities.currentTime = 0; 
});

$('.menubtnMegacities').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnMegacities').css('background-position', '0px -90px');
    }, 300);
  var housingpos = $('.menuhousing').position();
  if(housingpos.left == -234) {
    $('.menuhousing').animate({'left':'-334px','opacity':0}, 500, "easeInBack", function() { $('.menuhousing').css({'left':'-660px'}); });
    $('.homebtnholder').animate({'left':'3px','opacity':0}, 500, "easeInBack", function() { $('.homebtnholder').css({'left':'-93px'}); });
    $('.mpbtnholder').animate({'left':'80px','opacity':0}, 500, "easeInBack", function() { $('.mpbtnholder').css({'left':'-93px'}); });
    $('.cpbtnholder').animate({'left':'153px','opacity':0}, 500, "easeInBack", function() { $('.cpbtnholder').css({'left':'-93px'}); });
    $('.infobtnholder').animate({'left':'222px','opacity':0}, 500, "easeInBack", function() { $('.infobtnholder').css({'left':'-93px'}); });
    $('.credsbtnholder').animate({'left':'288px','opacity':0}, 500, "easeInBack", function() { $('.credsbtnholder').css({'left':'-93px'}); });
  } else {
    $('.menuhousing').css({'opacity':1});
    $('.credsbtnholder').css({'opacity':1});
    $('.infobtnholder').css({'opacity':1});
    $('.cpbtnholder').css({'opacity':1});
    $('.mpbtnholder').css({'opacity':1});
    $('.homebtnholder').css({'opacity':1});
    $('.menuhousing').animate({'left':'-234px'}, 1000, "easeInOutBack");
    $('.credsbtnholder').animate({'left':'368px'}, 1000, "easeInOutBack");
    $('.infobtnholder').animate({'left':'302px'}, 1100, "easeInOutBack");
    $('.cpbtnholder').animate({'left':'233px'}, 1200, "easeInOutBack");
    $('.mpbtnholder').animate({'left':'160px'}, 1300, "easeInOutBack");
    $('.homebtnholder').animate({'left':'83px'}, 1400, "easeInOutBack");
  }
});

$('.homebtnMegacities').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnMegacities').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnMegacities').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnMegacities').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnMegacities').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnMegacities').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnMegacities').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnMegacities').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnMegacities').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnMegacities').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnMegacities').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnMegacities').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bMegacities').position();
  if (botsposition.left == 1024) {
    $('.bMegacities').css({'opacity':1});
    $('.plMegacities').css({'opacity':1});
    $('.fMegacities').css({'opacity':1});
    $('.bMegacities').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plMegacities').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fMegacities').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bMegacities').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bMegacities').css({'left':'1024px'}); });
    $('.plMegacities').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plMegacities').css({'left':'1024px'}); });
    $('.fMegacities').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fMegacities').css({'left':'1024px'}); });
  }
});

$('.rwMegacities').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwMegacities').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsMegacities').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsMegacities').css('background-position-y', '-73px');
    }, 300);
});

$('.fwMegacities').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwMegacities').css('background-position-y', '-73px');
    }, 300);
});