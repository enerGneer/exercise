// 객체들을 배열에 담아서 선언하기
const classmates = [
  {
    name: "철수", // 1번째 객체
    age: 8,
    school: "다람쥐초등학교",
  },
  {
    name: "영희", // 2번째 객체
    age: 8,
    school: "다람쥐초등학교",
  },
  {
    name: "훈이", // 3번째 객체
    age: 7,
    school: "토끼초등학교",
  },
];

// 위 객체들을 깔끔하게 한줄로 적기
const classmates = [
  { name: "철수", age: 8, school: "다람쥐초등학교" },
  { name: "영희", age: 8, school: "다람쥐초등학교" },
  { name: "훈이", age: 7, school: "토끼초등학교" },
];

// 배열안의 객체에서 뽑아내기
classmates[0].name; // 철수
classmates[0].age; // 8
classmates[0].school; // 다람쥐초등학교

// 배열 안의 객체에서 원하는 객체(8살 이상)만 뽑아내기
classmates.filter((data) => data.age >= 8);

// classmates = [
//    { name: "철수", age: 8, school: "다람쥐초등학교" },
//    { name: "영희", age: 8, school: "다람쥐초등학교" },
// ]
