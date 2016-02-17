var updatedAt = "Updated 2-17-2016";
var metas = document.getElementsByTagName('meta');
var num;
var scrolling = false;
var OGheight = null;
var OGheight2 = null;
var OGheight3 = null;
if (navigator.userAgent.match(/iPhone/i)) {
  for (num=0; num<metas.length; num++) {
    if (metas[num].name == "viewport") {
      metas[num].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
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

function notReady() {
  alert("Whoops! This link is not yet set up. Apologies for any inconvenience this may cause.");
}

function loadFunction() {
  try {
    document.getElementById("updatedAt").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ updatedAt;
    OGheight = $("#experiences").position().top;
    OGheight2 = $("#achievements").position().top;
    OGheight3 = $("#skills").position().top;
  }
  catch (e) {

  }
}

function loadFunction2() {
  document.getElementById("updatedAt").innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+ updatedAt;
}

$(window).scroll(function() {
  try {
    if (!scrolling) {
      /*if ($(this).scrollTop() > $("#skills").position().top && $("#skills").css('position') != 'fixed') {
        console.log("Here");
        $("#skills").css({'position':'fixed', 'top':'0px', 'background-color':'#ffffff', 'width':'90%', 'padding':'0', 'margin':'0'});      }
      }
      else if ($(this).scrollTop() > $("#achievements").position().top && $("#achievements").css('position') != 'fixed') {
        $("#achievements").css({'position':'fixed', 'top':'0px', 'background-color':'#ffffff', 'width':'90%', 'padding':'0', 'margin':'0'});
      }
      else if ($(this).scrollTop() > $("#experiences").position().top && $("#experiences").css('position') != 'fixed') {
        $("#experiences").css({'position':'fixed', 'top':'0px', 'background-color':'#ffffff', 'width':'90%', 'padding':'0', 'margin':'0'});
      }
      if ($(this).scrollTop() < OGheight3 && $("#achievements").css('position') == 'fixed') {
        $("#skills").css({'position':'static', 'top':'0px'});
      }
      if ($(this).scrollTop() < OGheight2 && $("#achievements").css('position') == 'fixed') {
        $("#achievements").css({'position':'static', 'top':'0px'});
      }
      if ($(this).scrollTop() < OGheight && $("#experiences").css('position') == 'fixed') {
        $("#experiences").css({'position':'static', 'top':'0px'});
      }*/
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
