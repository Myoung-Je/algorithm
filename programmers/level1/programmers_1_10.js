/** 과일 장수 */
function solution(k, m, score) {
    let answer = 0;
    let arr = score.sort((a,b) => b-a);
    let aArr = [];
    
    for(let i=0; i<arr.length; i+=m) {
        let mArr = [];
        for(let j=0; j<m; j++) {
            arr[i+j] && mArr.push(arr[i+j]);
        }
        mArr.length==m && aArr.push(mArr);
    }

    for(let i of aArr) {
        answer = answer + i.slice(-1)*m;
    }
    
    return answer;
}