/** 땅따먹기 */
function solution(land) {
    for(let i=1; i<land.length; i++) {
        for(let j=0; j<4; j++){
            land[i][j] += Math.max(...land[i-1].filter((_, idx) => j!=idx))
        }
    }
    return Math.max(...land.pop());
}

function solution(land) {
    var answer = 0;

    return Math.max(...land.reduce((a, c) => {
        return [
            c[0] + Math.max(a[1], a[2], a[3]),  
            c[1] + Math.max(a[0], a[2], a[3]),
            c[2] + Math.max(a[0], a[1], a[3]),
            c[3] + Math.max(a[0], a[1], a[2]),
        ];
    }, [0, 0, 0, 0]));
}