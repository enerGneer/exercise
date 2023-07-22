function calculatefunction(num1, num2, op) {
  // 여기에 코드를 작성하세요
  return eval(`${num1}${op}${num2}`);
}
//eval() 은 인자로 받은 코드를 caller의 권한으로 수행하는 위험한 함수
