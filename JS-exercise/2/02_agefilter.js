function ageFilter(age) {
  // 여기에 코드를 작성하세요.
  if (age >= 20) {
    return "성인";
  } else if (age <= 7) {
    return "어린이";
  } else {
    return "학생";
  }
}
ageFilter(30);
ageFilter(20);
ageFilter(19);
ageFilter(8);
ageFilter(7);
