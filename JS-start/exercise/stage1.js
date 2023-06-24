export const calculateAverage = function (students) {
  const result = [];

  for (let i = 0; i < students.length; i++) {
    let score = 0;

    for (let key in students[i]) {
      if (key !== "name") {
        score += students[i][key];
      }
    }

    result.push({ name: students[i].name, score: score / 4 });
  }

  return result;
};
