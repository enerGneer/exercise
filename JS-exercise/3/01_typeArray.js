function typeArray(arr) {
  // 여기에 코드를 작성하세요
  const answer = [];
  for (let i = 0; i < arr.length; i = i + 1) {
    if (Array.isArray(arr[i])) {
      answer.push("array");
    } else {
      answer.push(typeof arr[i]);
    }
  }
  return answer;
}
