let timer = 180;
setInterval(function () {
  timer = timer - 1;
  const minutes = Math.floor(timer / 60);
  const seconds = timer - minutes * 60;
  console.log(minutes + ":" + seconds);
}, 1000);
