import { calculateAverage } from "./stage1.js";

export const designateGrade = function (students) {
  const score = calculateAverage(students);
  const answer = [];

  for (let i = 0; i < score.length; i++) {
    const average = score[i].score;
    let grade = "A";

    if (average <= 60) grade = "F";
    else if (average <= 70) grade = "D";
    else if (average <= 80) grade = "C";
    else if (average <= 90) grade = "B";

    answer.push({ name: score[i].name, grade: grade });
  }

  return answer;
};
