/** 두 큐 합 같게 만들기 */
function solution(queue1, queue2) {
    let sum1 = queue1.reduce((cur, val) => cur+=val, 0);
    let sum2 = queue2.reduce((cur, val) => cur+=val, 0);
    let half = (sum1+sum2)/2;
    const queue = [...queue1, ...queue2];
    let queue1P = 0;
    let queue2P = queue1.length;
    
    for(let i=0; i<queue1.length*3; i++) {
        if (sum1 === half) return i;
        
        sum1 = sum1 > half ? sum1 - queue[queue1P++ % queue.length]
                           : sum1 + queue[queue2P++ % queue.length];
      }
  return -1;
}