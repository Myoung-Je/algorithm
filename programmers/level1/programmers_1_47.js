/** 소수 찾기 */
function solution(n) {
    let answer = 0;
    
    for(let i=2; i<=n; i++) {
        let ct=0;
        for(let j=2; j<=Math.floor(Math.sqrt(i)); j++){
            if(i%j === 0){
              ct++;
              break;
            } 
        }
        ct === 0 && answer++;
    }
    return answer;
}