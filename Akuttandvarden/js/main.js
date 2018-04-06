$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $("#current-year").text((new Date()).getFullYear());
  AOS.init({
    duration: 1000
  });
});

$('.nav-button').click(function(e) {
  $('#tablist a[href="' + e.target.attributes.href.value + '"]').tab('show');
});

$(".navbar").on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $(".navbar-collapse").collapse('hide');

  $('html, body').animate({
      scrollTop: $(window).height() - 50
  }, 500);
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
