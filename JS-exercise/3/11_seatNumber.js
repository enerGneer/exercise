function seatNumber(row, col) {
  // 여기에 코드를 작성하세요
  const answer = [];
  for (let i = 1; i <= row * col; i = i + col) {
    const rowArr = [];
    for (let j = i; j < i + col; j++) {
      rowArr.push(j);
    }
    answer.push(rowArr);
  }
  return answer;
}
