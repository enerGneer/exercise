// 스프레드 연산자를 사용한 값의 복사
const arr = [1, 2, 3, 4, 5];
const newArr = [...arr];

// 객체도
const obj = {
  name: "otter",
  gender: "male",
};

const newObj = { ...obj };
