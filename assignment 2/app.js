$('#first-name').on('input', function() {
    var email = $(this).val();
    if(email.length < 1){
        $('#fn-validator').text('This field is required.').addClass('d-block').removeClass('d-none');
    }
    else{
        $('#fn-validator').addClass('d-none').removeClass('d-block');
    }
});

$('#last-name').on('input', function() {
    var email = $(this).val();
    if(email.length < 1){
        $('#ln-validator').text('This field is required.').addClass('d-block').removeClass('d-none');
    }
    else{
        $('#ln-validator').addClass('d-none').removeClass('d-block');
    }
});

$('#email').on('input', function() {
    var email = $(this).val();
    if(email.length < 1){
        $('#email-validator').text('This field is required.').addClass('d-block').removeClass('d-none');
    }
    else{
        $('#email-validator').addClass('d-none').removeClass('d-block');
        var testExp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
        testExp.test(email) ? $('#email-validator').addClass('d-none').removeClass('d-block') : $('#email-validator').text('Invalid E-mail').addClass('d-block').removeClass('d-none');
    }
});

$('#last-name').on('input', function() {
    var email = $(this).val();
    if(email.length < 1){
        $('#ln-validator').text('This field is required.').addClass('d-block').removeClass('d-none');
    }
    else{
        $('#ln-validator').addClass('d-none').removeClass('d-block');
    }
});

$('#query').on('input', function() {
    var email = $(this).val();
    if(email.length < 1){
        $('#q-validator').text('This field is required.').addClass('d-block').removeClass('d-none');
    }
    else{
        $('#q-validator').addClass('d-none').removeClass('d-block');
    }
});

$(function () {
    $(document).scroll(function () {
      var $nav = $("#mainNav");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });