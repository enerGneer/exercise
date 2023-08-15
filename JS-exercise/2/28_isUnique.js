function isUnique(str) {
  // 여기에 코드를 작성하세요
  let temp = "";
  for (let i = 0; i < str.length; i = i + 1) {
    if (temp.includes(str[i])) {
      return true;
    }
    temp = temp + str[i];
  }
  return false;
}
