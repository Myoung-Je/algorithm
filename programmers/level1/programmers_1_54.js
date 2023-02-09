/** 체육복 */
function solution(n, lost, reserve) {
    let arr = new Array(n+1).fill(0);
    reserve.map(e => {
        return arr[e]++;
    })
    lost.map(e => {
        return arr[e]--;
    })
    arr.forEach((s, i) => {
        if(s === -1 ) {
            if(arr[i-1] === 1) {
                arr[i-1]--;
                arr[i]++;
            } else if(arr[i+1] === 1) {
                arr[i+1]--;
                arr[i]++;
            }
        }
    })
    arr = arr.filter(s => s===-1);
    return n-arr.length
}