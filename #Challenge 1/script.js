 //  =========NOTIFICATION-POPUP=============

/*  var notificationPopp = document.getElementById("notification-popup");
 var showPopup = document.getElementsByClassName("notification-poppup");
 notificationPopp.onclick = function() {
   showPopup.style.display = "block";
 } */
 
 var sidebarItems = document.getElementsByClassName("sidebar-items");
 
 for (var a = 0; a < sidebarItems.length; a++) {
   sidebarItems[a].onclick = function() {
     var activeClass = document.getElementsByClassName("active");
     activeClass[0].className = activeClass[0].className.replace(" active", "");
     this.className += " active";
   }
 }

 $(document).ready(function(){
   $('#notification-popup').click ( function () {
       $('.notification-poppup').toggle();
       $('.notification-count').toggle();
     });
    /*  $('.notification-poppup').mouseleave ( function () {
       $('.notification-poppup').hide();
       $('.notification-count').show();
   });
 */


  //  $('.notification-poppup').hide();
  //  $('#notification-popup').hover(function(){
  //    $('.notification-poppup').show().fadeOut(7000);
  //    $('.notification-count').hide();
  // })
//  =========THEME=============
  $('#theme').click(function(){
     $('.costomize-theme').css({
       "display": "block"
     })
   })
   $('#exit').click(function(){
    $('.costomize-theme').hide();
   })
   //  =========BG-COLOR=============

   $('.bg-1').click(function(){
     $('body').css({
      "background-color": "white",
       "color": "black"
     })
   $('#bg2').click(function(){
     $('body').css({
      "background-color": "hsl(252, 30%, 17%)",
       "color": "black"
     })
   })
   })
   $('.bg-3').click(function(){
     $('body').css({
      "background-color": "hsl(252, 30%, 10%)",
      "color": "black"
     })
   })

    //  =========COLOR=============
    $('.color-1').click(function(){
      $('body').css({
        "color": "hsl(252, 75%, 60%)"
      })
    })
    $('.color-2').click(function(){
      $('body').css({
        "color": "hsl(52, 75%, 60%)"
      }).addClass('choose-color .active')
    })
    $('.color-3').click(function(){
      $('body').css({
        "color": "hsl(352, 75%, 60%)"
      }).addClass('choose-color .active')
    })
    $('.color-4').click(function(){
      $('body').css({
        "color": "hsl(152, 75%, 60%)"
      }).addClass('choose-color .active')
    })
    $('.color-5').click(function(){
      $('body').css({
        "color": "hsl(202, 75%, 60%)"
      }).addClass('choose-color .active')
    })
    // ======FONT SIZE=============
    $('font-size-1').click(function(){
      $('body').css({
        "font-size": "smaller"
      }).addClass('choose-size .active')
    })
    $('font-size-2').click(function(){
      $('body').css({
        "font-size": "small"
      }).addClass('choose-size .active')
    })
    $('font-size-3').click(function(){
      $('body').css({
        "font-size": "medium"
      }).addClass('choose-size .active')
    })
    $('font-size-4').click(function(){
      $('body').css({
        "font-size": "larg"
      }).addClass('choose-size .active')
    })
    $('font-size-5').click(function(){
      $('body').css({
        "font-size": "larger"
      }).addClass('choose-size .active')
    })
 })