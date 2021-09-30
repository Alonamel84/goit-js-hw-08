// import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

// player.on('play', function () {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(function (title) {
//   console.log('title:', title);
// });

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  //   const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');
};
const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');
player
  .setCurrentTime(videoplayerCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

document.addEventListener(
  'timeupdate',
  throttle(() => {
    localStorage.setItem(videoplayerCurrentTime);
  }, 5000),
);

player.on('timeupdate', onPlay);
