/** 기능개발 */
function solution(progresses, speeds) {
    const answer = [];
    while(progresses.length) {
        const stack = [];
        progresses = progresses.map((s, i) => {
            if(s<100) return s+speeds[i];
            else return s;
        });
        if(progresses[0] >= 100) {
            for(let s of progresses) {
                if(s>=100) {
                    stack.push(s);
                    speeds.splice(0, 1);
                } 
                else break;
            }
            progresses.splice(0, stack.length);
            answer.push(stack.length);
        }
    }
    return answer;
}

function solution(progresses, speeds) {
    let answer = [0];
    let days = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
    let maxDay = days[0];

    for(let i = 0, j = 0; i< days.length; i++){
        if(days[i] <= maxDay) {
            answer[j] += 1;
        } else {
            maxDay = days[i];
            answer[++j] = 1;
        }
    }

    return answer;
}