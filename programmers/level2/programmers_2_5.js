/** 이진 변환 반복하기 */
function solution(s) {
    let answer = [0, 0];
    while(s!=='1'){
        for(let i of s){
            i==='0' && answer[1]++;
        }
        s = s.replaceAll(0,'').length.toString(2);
        answer[0]++;
    } 
    return answer;
}

function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length;
        s = s.replace(/0/g, '').length.toString(2);
    }
    return answer;
}