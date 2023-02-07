/** 시저 암호 */
function solution(s, n) {
    let answer = '';
    for(let i in s) {
        if(s[i].charCodeAt() === 32) {
          answer += s[i];
        } else if(s[i].charCodeAt()<=90){
            answer +=  s[i].charCodeAt() + n > 90 ? 
                        String.fromCodePoint(s[i].charCodeAt()+n-26):
                        String.fromCodePoint(s[i].charCodeAt()+n);    
        } else {
            answer +=  s[i].charCodeAt() + n > 122 ? 
                        String.fromCodePoint(s[i].charCodeAt()+n-26):
                        String.fromCodePoint(s[i].charCodeAt()+n);    
        }
    }
    return answer;
}

function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}
