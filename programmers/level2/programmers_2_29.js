/** 프린터 */
function solution(priorities, location) {
    const stack = [];
    let leng = priorities.length;
    let check = new Array(leng).fill(0);
    check[location] = 1;
    
    while(stack.length !== leng) {
        if(priorities[0] !== Math.max(...priorities)) {
            priorities.push(priorities.shift());
            check.push(check.shift());
        } else {
            stack.push(check.shift());
            priorities.shift()
        }
    }
    return stack.indexOf(1)+1;
}