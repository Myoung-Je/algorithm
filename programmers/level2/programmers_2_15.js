/** N개의 최소공배수 */

function getGcd(a, b) {
    if (b === 0) return a;
    return getGcd(b, a % b);
}
function solution(arr) {
    return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}

function solution(arr) {
    return arr.reduce((acc, cur) => {
        const recursive = (min, max) =>{
          return (min % max) === 0 ? max : recursive(max, min % max);
        }

        let max = 0;
        return acc*cur / recursive(acc,cur);
    });
}

function solution(arr) {
    // 최대 공약수를 위해 내림차순으로 정렬해준다.
    arr.sort((a,b) => b - a);
    let r, m, n = 0, acc = arr[0];
    for(let i = 1; i < arr.length; ++i){
        // 유클리드 호제법으로 두 수의 최대공약수를 구한다.
        m = acc; // 큰 수
        n = arr[i]; // 작은 수 
        while(0 < n){
            r = m % n;
            m = n;
            n = r;
        }
        // m은 두 수의 최대공약수, acc에 두 수의 최소공배수를 누적시킨다.
        acc = acc * arr[i] / m; 
    }
    return acc;
}