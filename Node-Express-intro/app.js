const fs = require("fs"); // 파일 시스템 패키지 (노드 자체)
const path = require("path"); // 경로 패키지 (노드 자체)

const express = require("express"); // 익스프레스 패키지

const app = express(); // 일반적으로 이렇게 함수같이 활용 가능하다

app.use(express.urlencoded({ extended: false }));
// use는 어느 요청에든 사용 가능. 여기에서는 중요하지 않지만 오류를 막기 위해 false 옵션이 필요하다

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
  // get과 send 메서드임에 주의 (기본 node에서는 end였다)
}); // localhost:3000/currenttime

app.get("/", function (req, res) {
  res.send('<form action="/store-user" method="POST"><label>Your Name: </label><input type="text" name="username"><button>Submit</button></form>');
}); // localhost:3000/

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  // 내장된 body 오브젝트로 내가 설정한 username을 불러온 것

  const filePath = path.join(__dirname, "data", "users.json");
  // dirname 앞에 언더바 두개임에 주의하자. 이런 식으로 path.join을 활용하여 디렉토리를 지정해줄 수 있다.

  const fileData = fs.readFileSync(filePath); // fs 패키지를 이용한다. sync로 즉시 가져오는 게 포인트
  const existingUsers = JSON.parse(fileData); // parse로 형식 변환 텍스트 to JS

  existingUsers.push(userName); // 배열에서 쓰던 그 push가 맞다! 이걸로 배열에 추가해줄 수 있다 apeend

  fs.writeFileSync(filePath, JSON.stringify(existingUsers)); //stringify로 형식 변환 JS to 텍스트

  res.send("<h1>Username stored!</h1>");
});

app.get("/users", function (req, res) {
  // parse 과정은 동일하기에 일단 복붙. 보통은 같은 기능을 하면 따로 분리해 함수로 만들고 호출하면 된다.
  const filePath = path.join(__dirname, "data", "users.json");

  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = "<ul>";
  // 리스트 여는 태그 추가

  for (const user of existingUsers) {
    // 배열 반복분으로 배열의 요소로 지정된 유저 네임을 하나씩 불러올 수 있다.
    responseData += "<li>" + user + "</li>";
  }

  responseData += "</ul>";
  // 닫는 태그 추가

  res.send(responseData);
  // 위에서 설정한 responseData를 send 할 수 있다.
}); // localhost:3000/users 에서 입력받아 저장된 유저 이름이 출력되게 한다.

app.listen(3000);
// 이전에 node에서 3000번 포트를 listen하여 서버를 생성하는 과정을 이렇게 간단하게 나타낼 수 있다!
