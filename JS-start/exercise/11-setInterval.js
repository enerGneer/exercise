// setInterval 예제
setInterval(function () {
  const now = new Date();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  console.log(minutes + "분" + seconds + "초"); // 16분 11초
  // 16분 12초
}, 1000); // 16분 13초
// 16분 14초
//	  ...
