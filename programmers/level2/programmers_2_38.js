/** 위장 */
function solution(clothes) {
    const category = {};
    
    clothes.forEach(s => {
        const wear = s[1];
        
        if (category[wear] === undefined) {
            category[wear] = 1
        } else {
            category[wear]++;
        }
    })
    const arr = Object.values(category);
    
    return arr.reduce((cur, val) => cur*=(val+1), 1)-1;
}