/** 뒤에 있는 큰 수 찾기 */
function solution(numbers) {
    const stack = [];
    const answer = new Array(numbers.length).fill(-1);
    
    for(let i=0; i<numbers.length; i++) {
        while(stack.length && numbers[stack[stack.length-1]] < numbers[i]){   
            answer[stack.pop()] = numbers[i]
            
        }
        stack.push(i);
    }
    return answer;
}