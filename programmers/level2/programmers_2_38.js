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

function solution(clothes) {
    let answer = 1;
    const clothesCategory = {}

    clothes.forEach(e => {
        const category = e[1]


        if (clothesCategory[category] === undefined) {
            clothesCategory[category] = [e[0]]
        } else {
            clothesCategory[category].push(e[0])
        }
    })

    for (const [key, value] of Object.entries(clothesCategory)) {
        answer *= (value.length + 1)
    }

    return (answer - 1);
}