/** 약수의 개수와 덧셈 */
function solution(left, right) {
    let answer = 0;
    
    for(let i = left; i<=right; i++) {
        let ct = 0;
        for(let chk = 1; chk<=i; chk++){
            i%chk === 0 && ct++;
        }
        
        ct%2===0 ? answer+=i : answer -=i;
    }
    return answer;
}