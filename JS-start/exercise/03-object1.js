// 객체 선언하기
const classmate = {
  name: "철수",
  age: 8,
  school: "꽃샘초등학교",
};

// 객체의 값 꺼내기
classmate.name; // 철수
classmate["name"]; // 철수

// 객체의 키&값 삭제하기
delete classmate.name;
classmate = {
  age: 8,
  school: "꽃샘초등학교",
};
