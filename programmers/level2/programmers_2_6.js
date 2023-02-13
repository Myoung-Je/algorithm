
/** 숫자의 표현 */
function solution(n) {
    let answer = 0;
    let sum = 0;
    let ct = 0;
    for(let i=1; i<=n; i++) {
        sum+=i;
        ct++;
        if(sum===n) {
            sum = 0;
            i = i-ct+1;
            ct = 0;
            answer++;
        } else if(sum>n){
            sum = 0;
            i = i-ct+1;
            ct = 0;
        }
    }
    return answer;
}

function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++) {
        if(n%i === 0 && i%2 === 1) answer++;
    }
    return answer;
}