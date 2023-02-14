/** 괄호 회전하기 */
function solution(s) {
    let answer = 0;
    const arr = s.split('');
    const stack = [];
    if(s.length%2!==0) return 0;
    for(let i=0; i<arr.length; i++) {
        let temp = arr.shift();
        arr.push(temp);
        let check = true;    
        for(let j of arr) {
            if(arr[arr.length-1]==='[' || arr[arr.length-1]==='(' || arr[arr.length-1]==='{' ||
                arr[0]===']' || arr[0]===')' || arr[0]==='}'
              ) {
                check = false;
                break;
            }
            if(j==='[' || j==='(' || j==='{') stack.push(j);
            else {
                const comp = stack.pop();
                if(comp==='[' && j===']') continue;
                if(comp==='(' && j===')') continue;
                if(comp==='{' && j==='}') continue;
                check = false;
                break;
            }
        }
        if(check) answer++;
    }
    return answer;
}