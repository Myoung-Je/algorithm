/** [1차] 비밀지도 */
function solution(n, arr1, arr2) {
    let answer = [];
    
    const map1 = arr1.map(s => s = s.toString(2)*1);
    const map2 = arr2.map(s => s = s.toString(2)*1);
    
    const encryptMap = map1.map((s, i) => {
            return (s+map2[i]+'').padStart(n,0);
    });
    
    answer = encryptMap.map(s => {
        return s.split('').map(a => a>0 ? '#':' ').join('');
    });
    
    return answer;
}