/** 행렬의 덧셈 */
function solution(arr1, arr2) {
    const answer = [];
    
    for(let i=0; i<arr1.length; i++) {
        const stack = [];
        for(let j=0; j<arr1[i].length; j++) {
            stack.push(arr1[i][j] + arr2[i][j]);   
        }
        answer.push(stack);
    }
    return answer;
}