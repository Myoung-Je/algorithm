/** 타겟 넘버 */
function solution(numbers, target) {
    let answer = 0;
    
    function dfs(node, sum) {
        if(node === numbers.length) {
            if(sum === target) {
                answer++;
            }
            return;
        }
        
        dfs(node+1, sum+numbers[node]);
        dfs(node+1, sum-numbers[node]);
    }
    dfs(0, 0);
    
    return answer;
}