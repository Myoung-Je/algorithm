function solution(array) {
    var answer = 0;
    for(let i=0; i<array.length; i++) {
        let temp = String(array[i]).split("");
        
        for(let j=0; j<temp.length; j++) {
            temp[j] == 7 && answer++;
        }
    }
    return answer;
}

function solution(array) {
    return array.join('').split('7').length-1;
}