/** 최소직사각형 */
function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach((size) => {
        if(size[0] > size[1]) {
            [size[0],size[1]] = [size[1],size[0]];
            }
        }        
    )
        
    sizes.forEach((size) => {
        w < size[0] ? w=size[0] : '';
        h < size[1] ? h=size[1] : '';
    })
    
    return w*h;
}

function solution(sizes) {
    let w = 0;
    let h = 0;
    sizes.forEach(s => {
        const [a, b] = s.sort((a,b) => a-b);
        if (a > h) h = a;
        if (b > w) w = b;
    });

    return w * h;
}