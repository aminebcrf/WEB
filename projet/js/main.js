$(document).ready(function(){
  $('.button-collapse').sideNav();

  $('.profile_pictures').click(function(){
    inscription_change_img(this);
  });

  $('#inscription').click(function(){
    verification_inscription();
  });

  $('#login').change(function(){
    var login = $('#login').val();
    if(login.length == 0 || login.length > 24){
      $('#login').removeClass('valid');
      $('#login').addClass('invalid');
    }else{
      $('#login').removeClass('invalid');
      $('#login').addClass('valid');
    }
  });

  $('#pwd, #pwd2').change(function(){
    var pwd1 = $('#pwd').val();
    var pwd2 = $('#pwd2').val();
    if(pwd1.length == 0 || pwd1.length > 24){
      $("#pwd").removeClass('valid');
      $("#pwd").addClass('invalid');
    }else{
      $("#pwd").removeClass('invalid');
      $("#pwd").addClass('valid');
      if(pwd1===pwd2){
        $("#pwd2").removeClass('invalid');
        $("#pwd2").addClass('valid');
      }else{
        $("#pwd2").removeClass('valid');
        $("#pwd2").addClass('invalid');
      }
    }
  });
});

function inscription_change_img(e){
  $('.profile_pictures').removeClass('selected');
  $('#img').attr('value',$(e).attr('id'));
  $(e).addClass('selected');
}

function verification_inscription(){
  var login = $('#login').val();
  var pwd1 = $('#pwd').val();
  var pwd2 = $('#pwd2').val();
  var img = $('#img').val();
  if(login.length != 0 || login.length <= 24 || pwd1.length != 0 || pwd1.length <= 24 || pwd1==pwd2){
    //requete AJAX
    $.post(
      'ControlerJeu.php',
      {
        username : login,
        password : pwd1,
        image : img
      },

      function(data){

      },
    );
  }
}
