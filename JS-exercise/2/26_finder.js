function finder(str, op) {
  // 여기에 코드를 작성하세요
  let count = 0;
  for (let i = 0; i < str.length; i = i + 1) {
    if (str[i] === op) {
      count = count + 1;
    }
  }
  return count;
}
