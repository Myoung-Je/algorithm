/** 덧칠하기 */
function solution(n, m, section) {
    let answer = 0;
    const arr = new Array(n).fill().map((cur, i) => {
        if(section.includes(i+1)) return 1;
        else return 0;
    });
    
    arr.forEach((s, i) => {
        if(s===1) {
            arr.splice(i, m, 0);
            answer++;
        }
    })
    return answer;
}

function solution(n, m, sections) {
    var answer = 0;
    var painted = 0;
    for(var section of sections) {
        if(painted < section) {
            answer++;
            painted = section+m-1;
        }
    }
    return answer;
}