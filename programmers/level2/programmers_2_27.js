/** [3차] 압축 */
function solution(msg) {
    const answer = [];
    let arr = new Array(26).fill().map((s, i) => {return String.fromCharCode(65+i)})
    let stack = [];
    
    for(let i=0; i<msg.length; i++) {
        stack.push(msg[i]);
        if(arr.includes(stack.join(''))) continue;
        arr.push(stack.join(''));
        stack.pop()
        const idx = arr.indexOf(stack.join('')) + 1;
        answer.push(idx);
        stack = [];
        i--;
    }
    // 마지막
    const idx = arr.indexOf(stack.join(''))+ 1;
    answer.push(idx);
    return answer;
}