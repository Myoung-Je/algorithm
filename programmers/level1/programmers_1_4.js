function solution(t, p) {
    var answer = 0;
    for(let i=0; i<t.length; i++) {
        t.substr(i, p.length).length === p.length ? t.substr(i, p.length) <= p && answer++ : '';
    }
    return answer;
}