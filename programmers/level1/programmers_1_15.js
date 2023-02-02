/** 삼총사 */
function solution(number) {
    var answer = 0;
    for(let a = 0; a<number.length-2; a++) {
        for(let b = a+1; b<number.length-1; b++) {
            for(let c = b+1; c<number.length; c++) {
                number[a]+number[b]+number[c] === 0 ? answer++ : ''
            }
        }
    }
    return answer;
}