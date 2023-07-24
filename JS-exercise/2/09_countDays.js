function countDays(month) {
  // 여기에 코드를 작성하세요.
  // 31일인 달 1 3 5 7 8 10 12
  // 윤년인 경우 2월은 29일
  // 30일인 달 나머지
}
countDays(1);
countDays(2);
countDays(3);
countDays(4);
countDays(5);
countDays(6);
countDays(7);
countDays(8);
countDays(9);
countDays(10);
countDays(11);
countDays(12);

//이걸 어케 처리하냐! 하고있엇는데

function countDays(month) {
  // 여기에 코드를 작성하세요
  if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    return 31;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    return 30;
  } else {
    return 29;
  }
}
//일케 개무식하게 처리해서 좀 어이없어짐 ㅡㅡ 이게 맞는거냐
