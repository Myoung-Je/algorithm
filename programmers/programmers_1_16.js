/** 숫자 짝궁 */
function solution(X, Y) {
    const arrA = {};
    const arrB = {};
    
    X.split("").forEach((n) => {
        arrA[n] = ++arrA[n] || 1;
    });
    
    Y.split("").forEach((n) => {
        arrB[n] = ++arrB[n] || 1;
    });

    let str = "";
    for (let num in arrA) {
    
    if (arrA[num] && arrB[num]) {

    
    str += num.repeat(Math.min(arrA[num], arrB[num]));
        }
    }
    
    const arr = str.split("").sort((a, b) => b - a);
    
    if(arr.length === 0) return '-1';
    if(arr[0] === '0') return '0';
    return arr.join('');
}