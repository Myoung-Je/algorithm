function solution(name, yearning, photo) {
  const answer = [];

  photo.forEach((s) => {
    let score = 0;
    s.forEach((a) => {
      yearning[name.indexOf(a)] ? (score += yearning[name.indexOf(a)]) : "";
    });
    answer.push(score);
  });
  return answer;
}
