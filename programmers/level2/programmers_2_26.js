/** k진수에서 소수 개수 구하기 */
function solution(n, k) {
    let check = n.toString(k).split('0');
    let arr = [];
    
    check = check.filter(s=> {
        if(s === '' || s ==='1') return false;
        else {
            return decimalChk(s.toString(10));
        }
    });
    return check.length;
}

function decimalChk(num) {
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
        if(num%i===0) return false;
    }
    return true;
}