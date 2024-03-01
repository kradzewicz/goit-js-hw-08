import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const video = document.querySelector('#vimeo-player');
const player = new Player(video);

const onPlay = time => {
  const currentTime = JSON.stringify(time.seconds);
  localStorage.setItem('videoplayer-current-time', currentTime);
};

const throttleTimer = throttle(onPlay, 1000);

player.on('timeupdate', throttleTimer);
player.setCurrentTime(
  JSON.parse(localStorage.getItem('videoplayer-current-time'))
);
