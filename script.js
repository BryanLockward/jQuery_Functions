$(document).ready(function(){

  $('#hide').click(
    function(){
      $("#hidden").hide();
    })

  $("#show").click(function(){
    $("#shown").show();
  })

  $("#toggle").click(function(){
    $("#tog").toggle();
  })

  $("#slideUp").click(function(){
    $("#slide").slideUp();
  })

  $("#slideDown").click(function(){
    $("#slide").slideDown();
  })

  $("#slideTog").click(function(){
    $("#slidetoggle").slideToggle();
  })

  $("#fadeIn").click(function(){
    $("#fade").fadeIn();
  })

  $("#fadeOut").click(function(){
    $("#fade").fadeOut();
  })

  $("#addclass").click(function(){
    $('.classchange').addClass('newclass')
  })

  $('h2').hover(
    function(){
      $(this).css('color','#AEEE00');
    },
    function(){
      $(this).css('color','white');
    })

    $('#para').before("Hello");
    $('#para').after("ITS GREAT");

  });
