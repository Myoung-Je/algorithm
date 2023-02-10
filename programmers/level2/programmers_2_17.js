/** 예상 대진표 */
function solution(n,a,b) {
    let answer = 0;
    if((a<=n/2 && b>n/2 || (b<=n/2 && a>n/2))) return Math.log2(n);
    
    while(a!==b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer++;
    }
    return answer;
}