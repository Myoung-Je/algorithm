function solution(num, k) {
    let arr = String(num).split("");
    for(let i in arr) {
        if(arr[i] == k){
            return Number(i)+1;
        }
    }
    return -1;
}

function solution(num, k) {
    return num.toString().split("").map((el) => Number(el)).indexOf(k) + 1 || -1
}