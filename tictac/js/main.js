$(function(){

var winConditions = [['#one', '#two', '#three'], ['#four', '#five', '#six'], ['#seven', '#eight', '#nine'],
 ['#one', '#four', '#seven'], ['#two', '#five', '#eight'], ['#three', '#six', '#nine'],
 ['#one', '#five', '#nine'], ['#three', '#five', '#seven'], ]

function check() {
  for (var i = 0; i < winConditions.length; i++) {
    if ($(winConditions[i][0]).hasClass('red') && $(winConditions[i][1]).hasClass('red') && $(winConditions[i][2]).hasClass('red')) {
      alert("Kurt Wins");
      $('.board div').removeClass('avail')
    } else if ($(winConditions[i][0]).hasClass('blue') && $(winConditions[i][1]).hasClass('blue') && $(winConditions[i][2]).hasClass('blue')) {
        alert("Kermit Wins");
        $('.board div').removeClass('avail')
    } else if (($('.red').length + $('.blue').length) === 9) {
      alert("Tie Game!");
    }
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
