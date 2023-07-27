function ratingDetail(num) {
  // 여기에 코드를 작성하세요
  let grade;
  if (num > 100 || num < 0) {
    return "잘못된 입력입니다";
  }
  if (num === 100) {
    return "A+";
  }
  if (num >= 90) {
    grade = "A";
  } else if (num >= 80) {
    grade = "B";
  } else if (num >= 70) {
    grade = "C";
  } else if (num >= 60) {
    grade = "D";
  } else if (num >= 0) {
    grade = "등급 미달";
  }

  if (grade !== "등급 미달") {
    const extra = num % 10;
    if (extra <= 3) {
      grade += "-";
    } else if (extra >= 7) {
      grade += "+";
    }
  }
  return grade;
}
