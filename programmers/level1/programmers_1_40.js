/** 같은 숫자는 싫어 */
function solution(arr) {
    return arr.filter((s, i) => s != arr[i+1]);
}