function solution(my_string) {
    const arr = my_string.split("");
    for(let i in arr) {
        if(arr[i].charCodeAt(0)>=97) {
            arr[i] = arr[i].toUpperCase();
        } else {
            arr[i] = arr[i].toLowerCase();
        }
    }
    return arr.join('');
}

function solution(my_string) {
    var answer = '';
    for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
    return answer;
}