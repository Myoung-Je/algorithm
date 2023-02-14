/** 귤 고르기 */
function solution(k, tangerine) {
    let answer = 0;
    const obj = {};
    
    tangerine.forEach((t) => obj[t] = (obj[t] || 0) + 1);
    const arr = Object.values(obj).sort((a, b) => b - a);
    
    for (const s of arr) {
        answer++;
        if (k > s) k -= s;
        else break;
    }
    return answer;
}