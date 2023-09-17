// **`문제 설명`**

// 주어진 변수 array과 object의 데이터 타입을 확인하세요.

// **`입력 인자`**

// - X

// **`주의 사항`**

// - 배열과 객체는 어떤 타입으로 나오나요?
// - 배열과 객체를 더 정확하게 구분하려면 Array.isArray()를 사용해보세요.

let array = [];
let object = {};

Array.isArray(array);
Array.isArray(object);

console.log(typeof array); // object
console.log(typeof object); // object
console.log(Array.isArray(array)); // true
console.log(Array.isArray(object)); // false
