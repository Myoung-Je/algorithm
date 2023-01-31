/** 없는 숫자 더하기 */
function solution(numbers) {
    var answer = 45;
    numbers.forEach((number) => answer -= number)
    return answer;
}

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}