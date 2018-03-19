$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $("#current-year").text((new Date()).getFullYear());
  AOS.init({
    duration: 1000
  });
});

$(".navbar").on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $(".navbar-collapse").collapse('hide');

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top - 50
  }, 500);
});
