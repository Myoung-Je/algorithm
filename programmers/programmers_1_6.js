/** 가장 가까운 같은 글자 */ 
function solution(s) {
    const answer = [];
    answer.push(-1);
    for(let i = 0; i<s.length; i++) {
        for(let j = i-1; j>=0; j--) {
            if(s[i] == s[j]) {
                answer.push(i-j);
                break;
            }
            if(j===0) {
                answer.push(-1);
            }
        }
    }
    return answer;
}

function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}