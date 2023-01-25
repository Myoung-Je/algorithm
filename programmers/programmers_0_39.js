// 평행
function solution(dots) {
    const lines = [];
    for(let i=0; i<dots.length; i++) {
        for(let j=i+1; j<dots.length; j++) {
            const line = (dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0])
            
            if(lines.includes(line)) {
                return 1;
            }
            lines.push(line);
        }
    }
    return 0;
}