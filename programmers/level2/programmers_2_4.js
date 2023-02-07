/** 올바른 괄호 */
function solution(s){
    let ct=0;
    for(let i=0; i<s.length; i++) {
        s[i] === '(' ? ct++ : ct--;
        if(ct<0) return false;
    }
    
    return ct === 0 ? true : false;
}