// 비밀번호 2개를 입력받아 대소문자 구분없이 비교하는 기능을 하는 함수를 화살표 함수를 이용해 만들어야 합니다.

// 추가 조건 1. 만약 비밀번호가 8~16자리가 아니라면, "비밀번호는 8~16"자리여야 합니다" 라는 문구를 띄워야 합니다.

// 추가 조건 2. 만약 두 개의 비밀번호 값이 서로 다르면 "비밀번호를 다시 확인해주세요" 라는 문구를 띄워야 합니다.

// **`입력 인자`**

// - 입력데이터 1 - 문자열
// - 입력데이터 2 - 문자열

// **`주의 사항`**

// - 화살표 함수로 만들어야합니다.
// - 함수와 입력데이터 이름은 자유롭게 지어도 됩니다.
const validation = (password1, password2) => {
  password1 = password1.toLowerCase();
  password2 = password2.toLowerCase();

  if (password1.length < 8 || password1.length > 16) {
    console.log("비밀번호는 8~16 자리여야 합니다");
  } else if (password1 !== password2) {
    console.log("비밀번호를 다시 확인해주세요");
  } else {
    console.log("회원가입을 축하합니다");
  }
};

// result

let password1 = "a1B2c3D4";
let password2 = "A1b2C3d4";
validation(password1, password2); // true

let password3 = "1234";
let password4 = "1234";
validation(password3, password4); // "비밀번호는 8~16자리여야 합니다"

let password5 = "12345678";
let password6 = "12345679";
validation(password5, password6); // "비밀번호를 다시 확인해주세요"
