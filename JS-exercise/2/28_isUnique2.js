function isUnique(str) {
  // 여기에 코드를 작성하세요
  for (let i = 0; i < str.length; i = i + 1) {
    for (let j = 0; j < str.length; j = j + 1) {
      if (i !== j) {
        if (str[i] === str[j]) {
          return true;
        }
      }
    }
  }
  return false;
}
