/** 짝지어 제거하기 */
function solution(s) {
    const stack = [];
    for(var i=0; i<s.length; i++){
        if(stack[stack.length-1] != s[i]){
            stack.push(s[i]);
        }else{
            stack.pop();
        }
    }
    return (stack.length>0) ? 0:1;
}