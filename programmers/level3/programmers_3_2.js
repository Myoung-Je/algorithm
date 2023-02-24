/** 이중우선순위큐 */
function solution(operations) {
    const queue = [];
    for(let i = 0; i<operations.length; i++) {
        if(operations[i] === 'D 1') {
            queue.length && queue.splice(queue.indexOf(Math.max(...queue)), 1);
        } else if(operations[i] === 'D -1') {
            queue.length && queue.splice(queue.indexOf(Math.min(...queue)), 1);    
        } else {
            queue.push(operations[i].substr(2)*1);
        }       
    }
    queue.sort((a, b) => b-a);
    return queue.length ? [queue[0], queue[queue.length-1]] : [0, 0];
}