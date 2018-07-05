// Animate Smooth Scroll
$('#view-work').on('click', function() {
  const description = $('#description').position().top;

  $('html, body').animate(
    {
      scrollTop: description
    },
    900
  );
});

$('#sign-up').on('click', function() {
  const signUpFrame = $('#sign-up-frame').position().top;

  $('html, body').animate(
    {
      scrollTop: signUpFrame
    },
    900
  );
});