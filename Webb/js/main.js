$(function () {
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
