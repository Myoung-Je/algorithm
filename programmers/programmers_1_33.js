/** 3진법 뒤집기 */

function solution(n) {
    return parseInt(n.toString(3).split('').reverse().join(''), 3);
}

const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}