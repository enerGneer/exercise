const http = require("http");

function handleRequest(request, response) {
  if (request.url === "/currenttime") {
    // url은 기본 주소 뒷부분을 가질 수 있다
    response.statusCode = 200;
    response.end("<h1>" + new Date().toISOString() + "</h1>");
    // 현재 시간 string 표시하기
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.end("<h1>Hello World!</h1>");
  }
}

const server = http.createServer(handleRequest);

server.listen(3000);
