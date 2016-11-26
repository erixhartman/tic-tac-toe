$(function(){

var winConditions = [['#one', '#two', '#three'], ['#four', '#five', '#six'], ['#seven', '#eight', '#nine'],
 ['#one', '#four', '#seven'], ['#two', '#five', '#eight'], ['#three', '#six', '#nine'],
 ['#one', '#five', '#nine'], ['#three', '#five', '#seven'], ]

function check() {
  for (var i = 0; i < winConditions.length; i++) {
    if ($(winConditions[i][0]).hasClass('red') && $(winConditions[i][1]).hasClass('red') && $(winConditions[i][2]).hasClass('red')) {
      setTimeout(function(){alert("Kurt Wins!"); }, 100);
      $('.board div').removeClass('avail')
      return
  } else if ($(winConditions[i][0]).hasClass('blue') && $(winConditions[i][1]).hasClass('blue') && $(winConditions[i][2]).hasClass('blue')) {
      setTimeout(function(){alert("Kermit Wins!"); }, 100);
      $('.board div').removeClass('avail')
      return
    }
  }
  if (($('.red').length + $('.blue').length) === 9) {
    setTimeout(function(){alert("Tie Game!"); }, 100);
  }
}

  var moves = 0;
  $('.tile').on("click touch", function() {
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

  $('button').on("click touch", function() {
    moves = 0
    $('.board div').removeClass('red')
    $('.board div').removeClass('blue')
    $('.board div').addClass('avail')
  })

});
