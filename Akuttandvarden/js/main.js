$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $("#current-year").text((new Date()).getFullYear());
  AOS.init({
    duration: 1000
  });
});

$('.nav-button').click(function(e) {
  $('#tablist a[href="' + e.target.attributes.href.value + '"]').tab('show');

  $('html, body').animate({
      scrollTop: $(window).height() - 50
  }, 500);
});

$(".navbar").on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $(".navbar-collapse").collapse('hide');

  $('html, body').animate({
      scrollTop: $(window).height() - 50
  }, 500);
});

$("#chatform").submit(function(e) {
  e.preventDefault();
  $("#chatsubmit").attr("disabled", true);
  $("#chatsubmit")
  .find('[data-fa-i2svg]')
  .toggleClass('fas fa-calendar-alt')
  .toggleClass('fa-circle-notch fa-spin');
  $.ajax({
    type: "POST",
    url: 'kontaktaoss.php',
    data: $("#chatform").serialize(),
    success: function(data)
    {
      $("#chatsubmit")
      .find('[data-fa-i2svg]')
      .toggleClass('fas fa-calendar-alt')
      .toggleClass('fa-circle-notch fa-spin');
      $("#chatform :input").attr("disabled", true);
      $("#Chatbutton").toggleClass('chat-shrink');
      $("#Chatbutton").toggleClass('chat-shrink-hover');
      $("#Chatbutton").toggleClass('chat-expand');
      $("#Chatbutton").css({ 'cursor' : 'pointer' });
      $("#Chatbutton").find(".chat-content").hide();
      $("#Chatbutton").find(".chat-icon").fadeIn(200);
      expanded = false;
      var response = JSON.parse(data);
      if (response.success == true) {
        $('#success').modal('toggle');
      } else if (response.success == false) {
        $('#fail').modal('toggle');
      }
    }
  });
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

$("#Chatbutton, #OpenChat").click(function() {
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
