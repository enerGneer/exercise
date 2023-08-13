function league(str) {
  // 여기에 코드를 작성하세요
  const answer = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      answer.push(str[i] + str[j]);
    }
  }
  return answer;
}
