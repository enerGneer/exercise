function phoneNumCutter(arr) {
  // 여기에 코드를 작성하세요
  let result = [];

  arr.forEach((phone) => {
    let bucket = phone.split("");
    bucket = bucket.fill("*", 3, 7).join("");
    result.push(bucket);
  });

  return result;
}
