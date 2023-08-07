function moneyCollector(str) {
  // 매개변수 str이 들어옵니다. str은 문자열 타입 데이터입니다. 해당 문자열 내에 존재하는 달러 기호($)를 찾아 해당 달러 기호의 인덱스 값을 리턴하는 함수를 완성해 주세요. 만약 달러 기호가 존재하지 않는다면, ‘찾을 수 없음’이라는 문자열을 리턴해야 합니다.

  let result = "찾을 수 없음";

  for (i = 0; i < str.length; i++) {
    if (str[i] === "$") {
      result = i;
    }
  }
  return result;
}
moneyCollector("이 물건은 5$ 입니다.");
moneyCollector("이 물건은 5,000₩ 입니다.");
moneyCollector("1$");

//기호가 존재하지 않는 경우엔? 을 어케할지 고민이었는데 걍 디폴트를 그걸로해두고 걍 없으면 출력하면 그만이엇던 것이다..
