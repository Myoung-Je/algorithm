/** 둘만의 암호 */
function solution(s, skip, index) {
    let answer = '';
    const alpa = 'abcdefghijklmnopqrstuvwxyz';
    const newAlpa = alpa.split('').filter(e=> skip.split('').indexOf(e) === -1);
    
    for(let i of s) {
        const idx = newAlpa.indexOf(i)+index;
        answer += newAlpa[idx % newAlpa.length];
    }
    
    return answer;
}