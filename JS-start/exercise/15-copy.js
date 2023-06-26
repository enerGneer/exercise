// 스프레드 연산자를 사용한 값의 복사
const arr = [1, 2, 3, 4, 5];
const newArr = [...arr];

// 객체도
const obj = {
  name: "otter",
  gender: "male",
  favoriteFood: {
    first: "sushi",
    second: "hamburger",
  },
};
//  중첩 객체는 제대로 복사가 되지 않음
const newObj = { ...obj };

obj.name = "rabbit";
obj.gender = "female";
obj.favoriteFood.first = "cold noodle";

console.log(newObj);

/*
	{
		name: "otter",
		gender: "male",
	  favoriteFood: {
			first: "cold noodle",
			second: "hamburger"
	  }
	}
*/
