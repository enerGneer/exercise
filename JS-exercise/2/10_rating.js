function rating(num) {
  // 여기에 코드를 작성하세요
  let grade;
  if (num > 100 || num < 0) {
    return "잘못된 입력입니다";
  }
  if (num >= 90) {
    grade = "A등급";
  } else if (num >= 80) {
    grade = "B등급";
  } else if (num >= 70) {
    grade = "C등급";
  } else if (num >= 60) {
    grade = "D등급";
  } else if (num >= 0) {
    grade = "등급 미달";
  }

  return grade;
}
