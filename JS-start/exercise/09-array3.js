const classmates1 = ["철수", "영희", "훈이"];
const classmates2 = ["민지", "민수"];

// 배열 2개 연결하기 _ concat
classmates1.concat(classmates2); // ["철수", "영희", "훈이", "민지", "민수"]

// 배열을 문자로 만들기 _ join
classmates.join(", "); // 철수, 영희, 훈이
classmates.join("와 "); // 철수와 영희와 훈이

// 배열 분리하기 _ splice
const classmates = ["철수", "영희", "훈이"];
classmates.splice(0, 1); // ["철수"]

// 배열에서 원하는 요소만 뽑아내기 _ filter
classmates.filter((data) => data === "영희"); // ["영희"]
classmates.filter((data) => data !== "영희"); // ["철수", "훈이"]

// 배열에서 모든 요소 변경하기 _ map
classmates.map((data) => data + "어린이"); // ["철수어린이", "영희어린이", "훈이어린이"]
