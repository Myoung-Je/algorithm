function solution(s1, s2) {
    const intersection = s1.filter((x) => s2.includes(x));
    return intersection.length;
}

function solution(s1, s2) {
    var answer = 0;
    for(let i in s2) {
        for(let j in s1) {
            if(s2[i] == s1[j]) {
                answer += 1;
            }
        }
    }
    return answer;
}