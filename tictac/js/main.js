$(function(){

 function check(){
    if ($('#one').hasClass("red") && $('#two').hasClass("red") && $('#three').hasClass("red")) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($('#four').hasClass("red") && $('#five').hasClass("red") && $('#six').hasClass("red")) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($('#seven').hasClass("red") && $('#eight').hasClass("red") && $('#nine').hasClass("red")) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($('#one').hasClass("red") && $('#four').hasClass("red") && $('#seven').hasClass("red")) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($('#two').hasClass("red") && $('#five').hasClass("red") && $('#eight').hasClass("red")) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($('#three').hasClass("red") && $('#six').hasClass("red") && $('#nine').hasClass("red")) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($('#one').hasClass("red") && $('#five').hasClass("red") && $('#nine').hasClass("red")) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($('#three').hasClass("red") && $('#five').hasClass("red") && $('#seven').hasClass("red")) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($('#one').hasClass("blue") && $('#two').hasClass("blue") && $('#three').hasClass("blue")) {
      alert("Kermit Wins");
      $('.board div').removeClass('avail')
    } else if ($('#four').hasClass("blue") && $('#five').hasClass("blue") && $('#six').hasClass("blue")) {
      alert("Kermit Wins");
      $('.board div').removeClass('avail')
    } else if ($('#seven').hasClass("blue") && $('#eight').hasClass("blue") && $('#nine').hasClass("blue")) {
      alert("Kermit Wins");
      $('.board div').removeClass('avail')
    } else if ($('#one').hasClass("blue") && $('#four').hasClass("blue") && $('#seven').hasClass("blue")) {
      alert("Kermit Wins");
      $('.board div').removeClass('avail')
    } else if ($('#two').hasClass("blue") && $('#five').hasClass("blue") && $('#eight').hasClass("blue")) {
      alert("Kermit Wins");
      $('.board div').removeClass('avail')
    } else if ($('#three').hasClass("blue") && $('#six').hasClass("blue") && $('#nine').hasClass("blue")) {
      alert("Kermit Wins");
      $('.board div').removeClass('avail')
    } else if ($('#one').hasClass("blue") && $('#five').hasClass("blue") && $('#nine').hasClass("blue")) {
      alert("Kermit Wins");
      $('.board div').removeClass('avail')
    } else if ($('#three').hasClass("blue") && $('#five').hasClass("blue") && $('#seven').hasClass("blue")) {
      alert("Kermit Wins");
      $('.board div').removeClass('avail')
    } else if (($('.red').length + $('.blue').length) === 9) {
      alert("Tie Game!");
      $('.board div').removeClass('avail')
    }
  }

  var moves = 0;
  $('.tile').on('click', function() {
    if (moves % 2 === 1 && (!$(this).hasClass('red')) && (!$(this).hasClass('blue')) && ($(this).hasClass('avail'))) {
    moves++;
    console.log(moves);
    $(this).addClass('red');
    check()
  } else if (moves % 2 === 0 && (!$(this).hasClass('red')) && (!$(this).hasClass('blue')) && ($(this).hasClass('avail'))) {
    moves++;
    console.log(moves);
    $(this).addClass('blue');
    check()
  }
  });



  $('button').on('click', function() {
    moves = 0
    $('.board div').removeClass('red')
    $('.board div').removeClass('blue')
    $('.board div').addClass('avail')

  })

});
