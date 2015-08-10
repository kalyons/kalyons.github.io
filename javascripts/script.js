var metas = document.getElementsByTagName('meta');
var i;
var scrolling = false;
var OGheight = null;
var OGheight2 = null;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}

function loadFunction() {
  OGheight = $("#experiences").position().top;
  OGheight2 = $("#achievements").position().top;
}

$(window).scroll(function() {
  try {
    if (!scrolling) {
      if ($(this).scrollTop() > $("#achievements").position().top && $("#achievements").css('position') != 'fixed') {
        //$("#experiences").css({'position':'static', 'top':'0px'});
        $("#achievements").css({'position':'fixed', 'top':'0px', 'background-color':'#ffffff', 'width':'90%', 'padding':'0', 'margin':'0'});
      }
      else if ($(this).scrollTop() > $("#experiences").position().top && $("#experiences").css('position') != 'fixed') {
        $("#experiences").css({'position':'fixed', 'top':'0px', 'background-color':'#ffffff', 'width':'90%', 'padding':'0', 'margin':'0'});
      }
      if ($(this).scrollTop() < OGheight2 && $("#achievements").css('position') == 'fixed') {
        $("#achievements").css({'position':'static', 'top':'0px'});
      }
      if ($(this).scrollTop() < OGheight && $("#experiences").css('position') == 'fixed') {
        $("#experiences").css({'position':'static', 'top':'0px'});
      }
      $height = window.innerHeight / 2 - 40;
    }
  }
  catch (e) {

  }
});

function goToTop() {
  $('#toTop').fadeOut();
  scrolling = true;
  $('html,body').animate({ scrollTop: 0 }, 'slow', function () {

  });
  scrolling = false;
}
