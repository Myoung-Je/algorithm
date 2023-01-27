/** 명예의 전당 (1) */
function solution(k, score) {
    const answer = [];
    const arr = [];
    
    for(let i in score) {
        arr.push(score[i]);
        
        if(arr.length > k) {
            for(let j in arr) {
                if(arr[j] ===Math.min.apply(null,arr)) {
                    arr.splice(j, 1);
                    break;
                }
            }
        }
        answer.push(Math.min.apply(null,arr));
    }
    return answer;
}

function solution(k, score) {
    const stack = []
    return score.reduce((a,c) => {
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }
        else {
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift()
        }
        a.push(stack[0])
        return a
    },[])
}