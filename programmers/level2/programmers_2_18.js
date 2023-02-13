/** 카펫 */
function solution(brown, yellow) {
    for(let i=1; i<=yellow; i++) {
        if(yellow%i === 0) {
            let row = yellow/i;
            let col = yellow/row
            if(brown === (row*2)+(col*2)+4) return [row+2, col+2]
        }
    }
}