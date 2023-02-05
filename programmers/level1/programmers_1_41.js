/** 두 정수 사이의 합 */
function solution(a, b) {
    if(a===b) return a;
    return a>b ? (a*(a+1)/2)-((b-1)*b/2) : (b*(b+1)/2)-((a-1)*a/2);
}

function adder(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}