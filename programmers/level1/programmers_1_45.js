/** 하샤드 수 */
function solution(x) {
    return !(x % String(x).split('').reduce((acc, val, i) => acc+=val*1, 0));
}