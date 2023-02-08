/** 삼각 달팽이 */
function solution(n) {
    let arr = [];
    let x = 0;
    let y = -1;
    let num = 1;

    for (let i = 1; i <= n; i++) {
        let tmp = Array(i).fill(0)
        arr.push(tmp)
    }
    
    for(let i=0; i<n; i++) {
        for(let j=i; j<n; j++) {
            if(i%3 === 0) {
                y++;
            } else if (i%3 === 1) {
                x++;
            } else {
                x--;
                y--;
            }
            arr[y][x] = num;
            num++;
        }
    }
    
    return arr.flat();
}
