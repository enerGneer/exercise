const http = require("http");

function handleRequest(request, response) {
  response.statusCode = 200; //404 같은 서버의 상태
  response.end("<h1>Hello World!</h1>");
  // 이제 localhost:3000로 접속하면 hello world를 response
}

const server = http.createServer(handleRequest);

server.listen(3000);
// 원래는 사용되지 않는 3000 포트를 사용하여 개발에 활용할 수 있다. localhost:3000 으로 접속이 가능해진다. (라이브 서버 사용하는 것처럼)
