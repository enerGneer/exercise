const obj = {
  name: "otter",
  gender: "male",
  favoriteFood: {
    first: "sushi",
    second: "hamburger",
  },
};

const copy = JSON.stringify(obj);

console.log(copy);
// {"name":"otter","gender":"male","favoriteFood":{"first":"sushi","second":"hamburger"}}

const deepCopy = JSON.parse(copy);

console.log(deepCopy);

/*
	{
		name: "otter",
		gender: "male",
	  favoriteFood: {
			first: "sushi",
			second: "hamburger"
	  }
	}
*/
// 원본 객체와는 전혀 다른 주소값을 가진 객체가 생성
