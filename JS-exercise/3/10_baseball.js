function baseball(arr) {
  // 여기에 코드를 작성하세요
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    const playerObj = arr[i];
    if (playerObj["team"] === "코드어벤저스" && playerObj["part"] === "야구") {
      count = count + 1;
    }
  }
  return count;
}
