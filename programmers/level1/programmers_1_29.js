/** 로또의 최고 순위와 최저 순위 */
function solution(lottos, win_nums) {
    let res = 0;
    let zero = 0;
    
    lottos.forEach((e) => {
        if(win_nums.includes(e)){
            res++;
        } else if(e===0) {
            zero++;
        }
    });
    return [res+zero > 6 ? 1:7-(res+zero) > 6 ? 6 : 7-(res+zero), 7-res>6 ? 6 : 7-res];
}

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length;

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}
