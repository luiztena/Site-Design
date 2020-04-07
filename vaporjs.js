var audio = new Audio('midia/XP Critical Error Sound Effect.mp3');
audio.addEventListener('canplaythrough', function som() {
  audio.play();
});