// est parmeter는 함수의 매개변수(parameter)를 배열로 전달 받는 방식

const foo = function (one, two, ...rest) {
  console.log(rest);
};

foo(1, 2, 3, 4, 5); // [ 3, 4, 5 ]

//rest 매개변수에는 앞선 두개의 데이터를 제외한 나머지 데이터가 배열의 형태로 담기게 됩니다
//또한 rest parameter도 매개변수임은 다르지 않기에 원하는 이름으로 사용할 수 있습니다.

const foo2 = function (one, two, ...arr) {
  console.log(arr);
  // rest 파라미터 또한, 매개변수이기 때문에 임의의 변수명 지정 가능
};

foo2(1, 2, 3, 4, 5); // [ 3, 4, 5 ]
