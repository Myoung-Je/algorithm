function solution(s) {
    let answer = [];
    
    const arr = s.split("");
    for(let i=0; i<arr.length; i++) {
        if(arr.filter(el=>el === arr[i]).length === 1) {
            answer.push(arr[i]);
        }
    }
    
    return answer.sort().join('');
}

function solution(s) {
    let res = [];
    for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
    return res.sort().join('');
}