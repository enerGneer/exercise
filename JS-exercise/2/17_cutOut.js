function cutOut(str, num) {
  // 임의의 문자열(str)과 수(num)를 입력받아, str의 맨 앞부터 num개만큼의 문자를 제거하고 남은 글자를 리턴하는 함수를 완성해 주세요.
  return str.slice(num);
}
cutOut("Javascript", 4);
cutOut("Coding", 0);
cutOut("abcdefg", 4);
cutOut("latte is horse", 9);

//num만 쓰면 num부터 끝까지 슬라이스
