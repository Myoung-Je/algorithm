/** 튜플 */
function solution(s) {
    let answer = [];
    const arr = JSON.parse(s.replace(/{/g, "[").replace(/}/g, "]"));
    arr.sort((a,b) => a.length - b.length);
    
    arr.forEach(s => {
        answer.push(s)    
    })
    let arr2 = [];
    answer.forEach((s) => {
        arr2 = [...arr2, ...s];
    })
    
    return [...new Set(arr2)];
}