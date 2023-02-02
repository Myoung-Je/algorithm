/** 푸드 파이트 대회 */

function solution(food) {
    const arr = food.map(e => parseInt(e/2));
    const aArr = [];
    
    const tempArr = [];
    for(let i=1; i<arr.length; i++) {
        for(let j=0; j<arr[i]; j++) {
            tempArr.push(i);
        }
    }
    
    aArr.push(...tempArr, 0, ...tempArr.reverse());
    
    return aArr.join('');
}

function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}