/** 영어 끝말잇기 */
function solution(n, words) {
    const stack = [];
    for(let i=0; i<words.length-1; i++) {
        if(words[i].substr(-1)!==words[i+1].charAt(0) || stack.includes(words[i+1]) || 
            words[i] === words[i+1]){
            const s = (i+2)%n === 0 ? n : (i+2)%n;
            const t = Math.ceil((i+2)/n);
            return [s, t];
        }
        stack.push(words[i])
    }
    return [0, 0];
}