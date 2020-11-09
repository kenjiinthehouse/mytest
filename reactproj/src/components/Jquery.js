import $ from 'jquery';
// global vars
var players = [],
  current = 0;
function onYouTubeIframeAPIReady(data) {
  $('[data-trailer]').each(function () {
    var player,
      id = $(this).data('trailer');

    $(this).html(
      '<iframe id="player_' +
        id +
        '" src="https://www.youtube.com/embed/' +
        id +
        '?enablejsapi=1&autohide=1&showinfo=0&theme=light" frameborder="0" allowfullscreen></iframe>'
    );

    player = new YT.Player('player_' + id, {
      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    players.push(player);
  });
}

function onPlayerStateChange(event) {
  var player = players[current];

  switch (event.data) {
    case YT.PlayerState.ENDED:
      player.stopVideo();
      player.seekTo(0);
      $('.card-movie--playing').removeClass('card-movie--playing');
      $('[data-play]').removeClass('is-playing');
      break;
  }
}



$(function () {
  $('[data-play]').on('click', function () {
    var $card = $('.card-movie--active'),
      player = players[$card.index()];

    if ($card.hasClass('card-movie--playing')) {
      $(this).toggleClass('is-playing');
      player.pauseVideo();
    } else {
      $(this).toggleClass('is-playing');
      player.playVideo();
    }

    $card.toggleClass('card-movie--playing');
  });

  $('[data-navigation] li').on('click', function () {
    // remove current stuff
    players[current].pauseVideo();
    $('.card-movie:eq(' + current + ')').removeClass(
      'card-movie--playing card-movie--active'
    );
    $('[data-play]').removeClass('is-playing');
    // assign new current
    current = $(this).index();
    $(this).addClass('is-active').siblings().removeClass('is-active');
    $('.card-movie:eq(' + current + ')').addClass('card-movie--active');
  });
});
module.exports.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady; //匯出函式
module.exports.onPlayerStateChange = onPlayerStateChange; //匯出函式
