$(function () {
  $(window).scrollTop(0);
  $('[data-toggle="tooltip"]').tooltip();
  $("#current-year").text((new Date()).getFullYear());
  AOS.init({
    duration: 1000
  });
});

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $(".navbar-collapse").collapse('hide');

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 50
  }, 500);
});

$(".card").click(function() {
  window.open($(this).attr("href"));
  return false;
});

$("#Chatbutton").find(".chat-content").hide();
$("#Chatbutton").find(".chat-content").removeClass('d-none');

var expanded = false;

$("#Closechat").click(function(e) {
  $("#Chatbutton").toggleClass('chat-shrink');
  $("#Chatbutton").toggleClass('chat-shrink-hover');
  $("#Chatbutton").toggleClass('chat-expand');
  $("#Chatbutton").css({ 'cursor' : 'pointer' });

  $("#Chatbutton").find(".chat-content").hide();

  $("#Chatbutton").find(".chat-icon").fadeIn(200);
  expanded = false;
  e.stopPropagation();
});

$("#Chatbutton").click(function() {
  if (expanded == false) {
    $("#Chatbutton").toggleClass('chat-shrink');
    $("#Chatbutton").toggleClass('chat-shrink-hover');
    $("#Chatbutton").toggleClass('chat-expand');
    $("#Chatbutton").css({ 'cursor' : 'auto' });

    $("#Chatbutton").find(".chat-icon").hide();

    $("#Chatbutton").find(".chat-content").fadeIn(200);
    expanded = true;
  }
});

$("#form").submit(function(e) {
  e.preventDefault();
  $("#submit").attr("disabled", true);
  $("#submit")
  .find('[data-fa-i2svg]')
  .toggleClass('fa-paper-plane')
  .toggleClass('fa-circle-notch fa-spin');
  $.ajax({
    type: "GET",
    url: 'https://script.google.com/macros/s/AKfycbzJH3aI9X3yTKYEm_ILLVwXkfQ4S32rvdrYRXZ7pnRyHzaKMYoN/exec',
    data: $("#form").serialize(),
    success: function(data)
    {
      $('#success').modal('toggle');
      $("#form :input").attr("disabled", true);
      $("#submit")
      .find('[data-fa-i2svg]')
      .toggleClass('fa-paper-plane')
      .toggleClass('fa-circle-notch fa-spin');
    }
  });
});

$("#chatform").submit(function(e) {
  e.preventDefault();
  $("#chatsubmit").attr("disabled", true);
  $("#chatsubmit")
  .find('[data-fa-i2svg]')
  .toggleClass('fa-paper-plane')
  .toggleClass('fa-circle-notch fa-spin');
  $.ajax({
    type: "GET",
    url: 'https://script.google.com/macros/s/AKfycbzJH3aI9X3yTKYEm_ILLVwXkfQ4S32rvdrYRXZ7pnRyHzaKMYoN/exec',
    data: $("#chatform").serialize(),
    success: function(data)
    {
      $('#success').modal('toggle');
      $("#chatform :input").attr("disabled", true);
      $("#chatsubmit")
      .find('[data-fa-i2svg]')
      .toggleClass('fa-paper-plane')
      .toggleClass('fa-circle-notch fa-spin');
    }
  });
});

$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > $(window).height()-100) {
	    $(".navbar").addClass("navbarbgcolor");
	  }

	  else{
		  $(".navbar").removeClass("navbarbgcolor");  	
	  }
  })
})