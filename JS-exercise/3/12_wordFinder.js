function wordFinder(str) {
  // 여기에 코드를 작성하세요
  str = str.toLowerCase();
  const answer = {};
  const word = str.split(" ");

  for (let i = 0; i < word.length; i++) {
    let targetWord = word[i];
    if (targetWord[targetWord.length - 1] === ",") {
      targetWord = targetWord.slice(0, targetWord.length - 1);
    }

    if (answer[targetWord] === undefined) {
      answer[targetWord] = 1;
    } else {
      answer[targetWord]++;
    }
  }

  return answer;
}
