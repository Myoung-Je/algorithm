function solution(n, numlist) {
    var answer = [];
    for(let i in numlist) {
        if(numlist[i] % n === 0) {
            answer.push(numlist[i])
        }
    }
    return answer;
}

function solution(n, numlist) {
    return numlist.filter(num => num % n === 0);
}