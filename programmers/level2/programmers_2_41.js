/** 요격 시스템 */
function solution(targets) {
  targets.sort((a, b) => b[0] - a[0]);
  let ct = 1;
  let temp = targets[0][0];

  targets.forEach(([s, e]) => {
    if (temp >= e) {
      ct++;
      temp = s;
    }
  });
  return ct;
}

function solution(targets) {
  targets.sort((a, b) => b[0] - a[0]);
  let count = 1;

  const first = targets.shift();
  let standard = first[0];

  targets.forEach(([start, end]) => {
    if (end <= standard) {
      count += 1;
      standard = start;
    }
  });
  return count;
}
