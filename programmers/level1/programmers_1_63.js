/** 바탕화면 정리 */
function solution(wallpaper) {
    let top = 51;
    let bottom = 0;
    let left = 51;
    let right = 0;
    for(let i=0; i<wallpaper.length; i++) {
        wallpaper[i].split('').forEach((s, j) => {
            if(s==='#') {
                if(top >= i) {
                    top = i;
                }
                if(bottom <= i) {
                    
                    bottom = i+1;
                }
                if(left >= j) {
                    left=j;
                }
                if(right <= j) {
                    right = j+1;
                }
            }
        })
    }
    return [top, left, bottom, right];
}