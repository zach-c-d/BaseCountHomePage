// Animate Smooth Scroll
$('#view-work').on('click', function() {
  const images = $('#description').position().top;

  $('html, body').animate(
    {
      scrollTop: images
    },
    900
  );
});