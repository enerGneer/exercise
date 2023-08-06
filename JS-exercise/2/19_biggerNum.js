function biggerNum(num1, num2) {
  // 여기에 코드를 작성하세요
  if (num1 < num2) {
    return `${num1}은(는) ${num2}보다 작습니다`;
  } else if (num1 > num2) {
    return `${num1}은(는) ${num2}보다 큽니다`;
  } else {
    return `${num1}은(는) ${num2}와 같습니다`;
  }
}
