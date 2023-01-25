function solution(n) {
    let answer = 0;
    let arr = String(n).split("");
    for(let i in arr) {
        answer += Number(arr[i]);
    }
    return answer;
}

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}