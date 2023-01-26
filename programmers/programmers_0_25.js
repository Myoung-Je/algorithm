function solution(cipher, code) {
    var answer = '';
    const arr = cipher.split('');
    for(let i in arr) {
        if((Number(i)+1)%code == 0){
            answer+=arr[i];
        }
    }
    return answer;
}

function solution(cipher, code) {
    var answer = "";
    for (let i = code - 1; i < cipher.length; i += code) {
      answer += cipher[i];
    }
    return answer;
  }