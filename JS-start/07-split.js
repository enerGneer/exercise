// 조회한 메일에 **** 표시하기

let email = "abcdefgh@gmail.com";
email.includes("@");
email.split("@");
// 결과 ["abcdefgh" , "gmail.com"]

let userMail = email.split("@")[0]; // "abcdefgh"
let company = email.split("@")[1]; // "gmail.com"

// userMail을 한글자씩 넣어주기 위한 빈배열
let maskingMail = [];
maskingMail.push(userMail[0]);
maskingMail.push(userMail[1]);
maskingMail.push(userMail[2]);
maskingMail.push(userMail[3]);
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");
maskingMail.push("*");

// maskingMail = ["a","b","c","d","*","*","*","*"]
let emailMasking = maskingMain.join("") + "@" + company;
