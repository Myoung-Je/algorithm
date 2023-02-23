/** 최고의 집합 */
function solution(n, s) {
    const share = s / n >> 0;
    if(!share) return [-1];
    if(s%n === 0) return new Array(n).fill(s/n);
    
    const rest = s % n;
    const arr = new Array(n).fill(share);
    
    for(let i = 0; i < rest; i ++) {
        arr[arr.length - 1 - i]++;        
    }
    
    return arr;
}
