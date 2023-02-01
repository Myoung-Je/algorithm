/** 내적 */
function solution(a, b) {
    let answer = 0;
    a.forEach((s, i) => {
        answer += s*b[i];
    })
    return answer;
}

function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}