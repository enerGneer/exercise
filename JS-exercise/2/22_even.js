function even(num) {
  // 여기에 코드를 작성하세요
  if (num < 0) {
    num = -num;
  }

  let answer = true;
  for (let i = num; i >= 0; i = i - 2) {
    if (i === 1) {
      answer = false;
    }
  }
  return answer;
}
