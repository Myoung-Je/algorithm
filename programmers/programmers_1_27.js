/** 숫자 문자열과 영단어 */
function solution(s) {
    const arr = [/zero/g, /one/g, /two/g, /three/g, /four/g, /five/g, /six/g, /seven/g, /eight/g, /nine/g];
    
    for(let i in arr) {
        s = s.replace(arr[i], i);
    }
        
    return s*1;
}

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}