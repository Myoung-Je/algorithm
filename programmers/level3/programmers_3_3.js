/** 야근 지수 */
function solution(n, works) {
    if(works.reduce((a,b) => a+b) <= n) return 0;
    works.sort((a, b) => b-a);
    
    while(n) {
        const max = works[0];
        for(let i=0; i<works.length; i++) {
            if(works[i] >= max) {
                works[i]--;
                n--;
            }
            if(!n) break;
        }
    }
    
    return works.reduce((cur, val) => cur += val*val, 0);
}

const noOvertime = (no, works) => {
    while ( no > 0 ) {
        works.sort((a,b) => b-a);
        works[0] -= 1;
        no--;
    }
    return works.map(a => a*a).reduce((a,b) => a+b);
}