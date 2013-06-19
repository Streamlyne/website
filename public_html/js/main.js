
window.onload = function(event) {
  $('#sl-background').css('top', $('.navbar').css('height'));
};

var animateTo = function(selector) {
  var position;
  if (selector === 'top') {
    position = 0;
  } else {
    position = $(selector).offset().top - 95;
  }
  $('html, body').animate({scrollTop: position }, 1000);
}
