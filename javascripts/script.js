var metas = document.getElementsByTagName('meta');
var i;
var scrolling = false;
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

$(window).scroll(function() {
  if (!scrolling) {
    if ($(this).scrollTop() > 400) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
    $height = window.innerHeight / 2;
  }
});

function goToTop() {
  $('#toTop').fadeOut();
  scrolling = true;
  $('html,body').animate({ scrollTop: 0 }, 'slow', function () {

  });
  scrolling = false;
}
