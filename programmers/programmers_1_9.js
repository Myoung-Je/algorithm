/** 기사단원의 무기 */
function solution(number, limit, power) {
    const arr = [];
    
    for(let i=1; i<=number; i++) {
        let cnt = 1;
        for(let j=1; j<=i/2; j++){
            if(i%j === 0){
                cnt++;  
            }
        }
        arr.push(cnt);
    }
    
    return arr.map((e) => {
        return e>limit ? power : e;
    }).reduce((acc, cur) => acc + cur, 0);
}

function solution(number, limit, power) {
    var answer = 0;
    for (let n = 1; n <= number; n++)
    {
        let count = 0;
        for (let j = 1; j * j <= n; j++)
        {
            if (j * j == n) count++;
            else if (n % j == 0) count += 2;
        }
        if (count > limit) count = power;
        answer += count;
    }
    return answer;
}