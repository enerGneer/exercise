function idxString(num) {
  // 여기에 코드를 작성하세요
  let isPositive = true;
  if (num < 0) {
    num = -num;
    isPositive = false;
  }
  let answer = "0";
  for (let i = 1; i <= num; i++) {
    if (isPositive === false) {
      answer = answer + "-" + i;
    } else {
      answer = answer + i;
    }
  }
  return answer;
}
