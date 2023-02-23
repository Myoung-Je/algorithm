/** 실패율 */
function solution(N, stages) {
    const answer = [];
    let leng = stages.length;
    for(let i=1; i<=N+1; i++) {
        const dodal = stages.filter(s => s===i).length;
        answer.push([i, dodal/leng]);
        leng -= dodal;
    }
    answer.pop();
    answer.sort((a, b) => b[1] - a[1]);
    
    return answer.map(s => s[0]);
}