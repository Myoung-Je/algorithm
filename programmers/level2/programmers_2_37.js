/** 피로도 */
function solution(k, dungeons) {
    let clearCt = 0;
    const visit = new Array(dungeons.length).fill(false);
    
    const dfs = (k, curCt) => {
        clearCt = Math.max(clearCt, curCt);
        
         for(let i=0; i<dungeons.length; i++) {
            const [minK, useK] = dungeons[i];
            
            if(k >= minK && !visit[i]) {
                visit[i] = true;
                dfs(k - useK, curCt + 1);
                visit[i] = false;
            }
        }
    }
    dfs(k, 0);
    return clearCt;
}

