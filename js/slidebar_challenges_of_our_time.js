/* i-C-a */
$('.menubtn').on('tap', function() {
});

$('.homebtnholder').on('tap', function() {
  $.mobile.changePage("sub-modernworld.html");
});

$('.cpbtnholder').on('tap', function() {
  $.mobile.changePage("controlpanel.html");
  mainaudiobg.play(); bgsoundChallengesOfOurTime.pause(); bgsoundChallengesOfOurTime.currentTime = 0; 
});

$('.menubtnChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.menubtnChallengesOfOurTime').css('background-position', '0px -90px');
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

$('.homebtnChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.homebtnChallengesOfOurTime').css('background-position', '0px -74px');
    }, 300);
});

$('.mpbtnChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position', '0px -3px');
  setTimeout(function() {
      $('.mpbtnChallengesOfOurTime').css('background-position', '0px -84px');
    }, 300);
});

$('.cpbtnChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.cpbtnChallengesOfOurTime').css('background-position', '0px -74px');
    }, 300);
});

$('.infobtnChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.infobtnChallengesOfOurTime').css('background-position', '0px -74px');
    }, 300);
});

$('.credsbtnChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position', '0px 0px');
  setTimeout(function() {
      $('.credsbtnChallengesOfOurTime').css('background-position', '0px -74px');
    }, 300);
});

$('.micbtnChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.micbtnChallengesOfOurTime').css('background-position-y', '-81px');
    }, 300);
  var botsposition = $('.bChallengesOfOurTime').position();
  if (botsposition.left == 1024) {
    $('.bChallengesOfOurTime').css({'opacity':1});
    $('.plChallengesOfOurTime').css({'opacity':1});
    $('.fChallengesOfOurTime').css({'opacity':1});
    $('.bChallengesOfOurTime').animate({'left':'742px'}, 1000, "easeInOutBack");
    $('.plChallengesOfOurTime').animate({'left':'808px'}, 1100, "easeInOutBack");
    $('.fChallengesOfOurTime').animate({'left':'876px'}, 1200, "easeInOutBack");
  } else {
    $('.bChallengesOfOurTime').animate({'left':'842px','opacity':0}, 500, "easeInBack", function() { $('.bChallengesOfOurTime').css({'left':'1024px'}); });
    $('.plChallengesOfOurTime').animate({'left':'908px','opacity':0}, 500, "easeInBack", function() { $('.plChallengesOfOurTime').css({'left':'1024px'}); });
    $('.fChallengesOfOurTime').animate({'left':'976px','opacity':0}, 500, "easeInBack", function() { $('.fChallengesOfOurTime').css({'left':'1024px'}); });
  }
});

$('.rwChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.rwChallengesOfOurTime').css('background-position-y', '-73px');
    }, 300);
});

$('.plpsChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.plpsChallengesOfOurTime').css('background-position-y', '-73px');
    }, 300);
});

$('.fwChallengesOfOurTime').on('tap', function() {
  $(this).css('background-position-y', '0px');
  setTimeout(function() {
      $('.fwChallengesOfOurTime').css('background-position-y', '-73px');
    }, 300);
});