function wordFinder(str) {
  // 여기에 코드를 작성하세요
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  let onlyLower = "";

  for (let i = 0; i < str.length; i++) {
    let temp = str[i];
    if (upper.includes(str[i])) {
      const targetIndex = upper.indexOf(str[i]);
      temp = lower[targetIndex];
    }
    onlyLower = onlyLower + temp;
  }

  let temp = "";
  const answer = {};
  for (let i = 0; i < onlyLower.length; i++) {
    if (onlyLower[i] === " " || i === onlyLower.length - 1) {
      if (i === onlyLower.length - 1) {
        temp = temp + onlyLower[i];
      }
      if (answer[temp] === undefined) {
        answer[temp] = 1;
      } else {
        answer[temp]++;
      }
      temp = "";
    } else if (lower.includes(onlyLower[i])) {
      temp = temp + onlyLower[i];
    }
  }

  return answer;
}
