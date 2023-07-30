function whatIsLong(str1, str2, str3) {
  // 임의의 문자열 3개를 입력받아, 가장 긴 문자열을 리턴하는 함수를 완성하세요
  // 가장 긴 문자열이 두개 이상일 경우 가장 마지막에 찾은 문자열을 리턴해주세요.
  let answer = str1; // a에 1을 넣는다
  if (str2.length > answer.length) {
    answer = str2; // 2가 a보다 크면 2를 넣는다
  }
  if (str3.length > answer.length) {
    answer = str3; // 3이 a보다 크면 3을 넣는다
  }
  return answer; //a를 리턴한다
}
