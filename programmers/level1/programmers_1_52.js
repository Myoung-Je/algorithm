/** 문자열 내 마음대로 정렬하기 */
function solution(strings, n) {
    return strings.sort().sort((a,b) => a[n].charCodeAt() - b[n].charCodeAt());
}

function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}