const classmate = ["은정", "혜원", "재훈", "예봄", "정훈"];

classmate[0];
// 결과 은정
classmate[1];
// 결과 혜원
classmate[2];
// 결과 재훈
classmate[3];
// 결과 예봄
classmate[4];
// 결과 정훈

// 없는 데이터 위치를 끄집어내보겠습니다.
classmate[5];
// 결과 undefined

// "다슬" 이라는 데이터를 포함하고 있는지 확인해보겠습니다.
classmate.includes("다슬");
// 결과 false

//"다슬"이라는 데이터를 추가해보겠습니다.
classmate.push("다슬");
// 결과 ["은정","혜원","재훈","예봄","정훈","다슬"]

//"다슬"이라는 데이터를 빼보겠습니다.
classmate.pop();
// 결과 ["은정","혜원","재훈","예봄","정훈"]

//classmate의 길이를 구해보겠습니다.
classmate.length;
//결과 5
