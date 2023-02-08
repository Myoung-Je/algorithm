/** 할인 행사 */
function solution(want, number, discount) {
    let answer = 0;
    let sum = number.reduce((acc, val) => acc+val, 0);
    
    const obj = want.reduce((acc, val, idx) => {
        acc[val] = number[idx];
        return acc;
    }, new Object);
    
    for(let i=0; i<=discount.length-sum; i++) {
        let chk = want.reduce((acc, val) => {
            acc[val] = 0;
            return acc;
        }, new Object);        
        
        for(let j=0; j<sum; j++) {
            
            chk[discount[i+j]] = chk[discount[i+j]]+1;
        }
        
        if(JSON.stringify(chk) === JSON.stringify(obj)) {
            answer++;
        };
    }
    
    return answer;
}