/** 중복된 숫자 개수 */
function solution(array, n) {
    let answer = 0;
    array.forEach(s => {
        if(s===n) answer++;
    })
    return answer;
}