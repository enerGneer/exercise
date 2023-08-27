function phoneNumCutter(arr) {
  // 여기에 코드를 작성하세요
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    const phoneNumber = arr[i];
    let coveredNum = "";
    for (let j = 0; j < phoneNumber.length; j++) {
      if (j > 2 && j < 7) {
        coveredNum = coveredNum + "*";
      } else {
        coveredNum = coveredNum + phoneNumber[j];
      }
    }
    answer.push(coveredNum);
  }
  return answer;
}
