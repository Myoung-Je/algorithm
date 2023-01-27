/** 문자열 나누기 */
function solution(s) {
    let answer = 0;
    let find = '';
    let cnt = 0;
    let cnt2 = 0;
    
    for(let i of s) {
        if(!find) find = i;
        
        find===i ? cnt++ : cnt2++;
        
        if(cnt === cnt2) {
            answer++;
            find='';
            cnt=0;
            cnt2=0;
        }
    }
    find ? answer++ : '';
    return answer;
}