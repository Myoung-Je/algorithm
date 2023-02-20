/** 방문 길이 */
function solution(dirs) {
    const arr = {U:[0, 1], D:[0,-1], R:[1,0], L:[-1,0]};
    let now = [0, 0];
    let check = new Set();
    
    for (let dir of dirs) {
        let nowX = now[0] + arr[dir][0];
        let nowY = now[1] + arr[dir][1];
        
        if (nowX > 5 || nowX < -5 || nowY > 5 || nowY < -5) continue;
        
        check.add("" + now[0] + now[1] + nowX + nowY);
        check.add("" + nowX + nowY + now[0] + now[1]);
        
        now = [nowX, nowY];
    }
    return check.size/2;
}