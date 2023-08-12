function penta(num) {
  // 여기에 코드를 작성하세요
  let answer = "";
  for (let i = 5; i <= num; i = i + 5) {
    answer = answer + i;
  }
  return answer;
}
