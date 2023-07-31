// includes() 메서드는 하나의 문자열이 다른 문자열에 포함되어 있는지를 판별하고, 결과를 true 또는 false 로 반환합니다. 검색 시 대소문자를 구분합니다.
function verify(id, password) {
  // 	id와 password가 아래의 조건을 모두 충족하는지 확인하여, 모두 충족한다면 true를 충족하지 못한다면 false를 리턴하는 함수를 완성해 주세요.

  // - id는 4글자 이상이어야 합니다.
  // - password는 8글자 이상이어야 합니다.
  // - password는 “!”를 포함하고 있어야 합니다.
  if (id.length > 4 && password.length > 8 && password.includes("!")) {
    return true;
  } else {
    return false;
  }
}
verify("energneer", "!abcdefg!");
verify("energneer", "abcdefg");
verify("에너지", "abcdefg");
