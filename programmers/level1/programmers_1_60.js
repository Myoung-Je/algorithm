/** 대충 만든 자판 */
function solution(keymap, targets) {
    let answer = [];
    const arr = {};
    for(let i=0; i<keymap.length; i++) {
        keymap[i].split('').forEach((s, i) => {
            if(arr[s] > i+1 || arr[s] === undefined) {
                arr[s] = i+1;
            }
        })
    }
    
    targets.forEach((s, i) => {
        answer.push(s.split('').reduce((cur, val) => cur += arr[val], 0) || -1);
    })
    
    return answer;
}