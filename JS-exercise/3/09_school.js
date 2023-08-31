function school(arr) {
  // 여기에 코드를 작성하세요
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    const studentObj = arr[i];
    if (studentObj.school === "코드초등학교") {
      answer.push(studentObj.name);
    }
  }
  return answer;
}
