function merge(arr1, arr2) {
  // 여기에 코드를 작성하세요
  for (let i = 0; i < arr2.length; i = i + 1) {
    arr1.push(arr2[i]);
  }
  return arr1;
}
