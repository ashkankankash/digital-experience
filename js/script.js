function postLead() {
  function isValidEmail(email) {
    if (typeof email !== 'string') return false;

    // Trim und leere Eingabe abfangen
    email = email.trim();
    if (!email) return false;

    // Gängiger, relativ robuster Regex für Frontend-Validierung
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    return emailRegex.test(email);
  }
  let formsHasError = false;

  $('.form .form-field').removeClass('has-error');
  $('.formValidMail').addClass('hideMe');


  if(!$("input.name").val().trim()) {
      formsHasError = true;
      $('.form-field.name').addClass('has-error');
  }

  if ($("input.email").val() === '') {

    formsHasError = true;
    $('.form-field.email').addClass('has-error');
    $('.formValidMail').addClass('hideMe');
  }else if (!isValidEmail( $("input.email").val() )) {
      formsHasError = true;
      $('.formValidMail').removeClass('hideMe');
      $('.form-field.email').addClass('has-error');
  }
  if(!$("input.subject").val().trim()) {
      formsHasError = true;
      $('.form-field.subject').addClass('has-error');
  }

  if(!$("#fieldTextarea").val().trim()) {
      formsHasError = true;
      $('.form-field.message').addClass('has-error');
  }


  if(formsHasError) {
      console.log('fehler');
      $([document.documentElement, document.body]).animate({ scrollTop: $(".form").offset().top}, 700);
  }
  if (!formsHasError) {
    console.log('success');
    $('.form .form-field').removeClass('has-error');
    $('.form .form-field').addClass('hideMe');
    $('.formValidMail').addClass('hideMe');

    $([document.documentElement, document.body]).animate({
      scrollTop: $(".form").offset().top
    }, 700);
    $('#success').removeClass('hideMe');
    const w = $(window).width();
    if (w > 960) {
      const height3 = $('.contact .cm1').outerHeight();
      $(".contact .cm2 form").css('min-height', height3);
    }
    $('.cm2').addClass('aktive');
  }

}
$(".form").on("submit", function(e) {
    e.preventDefault();
    postLead();
});


$('.item5').on('click', function() {
  $(this).toggleClass('active');
  $(this).parents('body').toggleClass('darkMode');
});
