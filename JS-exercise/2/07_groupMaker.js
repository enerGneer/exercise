function groupMaker(num) {
  // 여기에 코드를 작성하세요
  if (num % 3 === 0 && num % 5 === 0) {
    return "AB그룹";
  } else if (num % 3 === 0) {
    return "A그룹";
  } else if (num % 5 === 0) {
    return "B그룹";
  } else {
    return "C그룹";
  }
}
