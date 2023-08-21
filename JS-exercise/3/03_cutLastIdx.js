function cutLastIdx(arr) {
  // 여기에 코드를 작성하세요
  const result = [...arr];
  result.pop();
  return [arr, result];
}
