// import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
  //   const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');
};
const videoplayerCurrentTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(videoplayerCurrentTime);

// throttle(() => {
//   // localStorage.setItem(videoplayerCurrentTime);
//   onPlay;
// }, 5000),
player.on('timeupdate', throttle(onPlay, 1000));
