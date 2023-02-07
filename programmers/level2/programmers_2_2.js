/** JadenCase 문자열 만들기 */
function solution(s) {
    let arr = s.split(' ');
    arr =arr.map(s=> {
        s=s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
        return s;
    });
    return arr.join(' ');
}

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}