/** [카카오 인턴] 키패드 누르기 */
function solution(numbers, hand) {
    let answer = '';
    
    const position = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    let posL = '*', posR = '#';
    
    for (const num of numbers){
        
        if (num % 3 === 1){
            answer += 'L';
            posL = num;
        }
        
        else if (num !==0 && num % 3 === 0){
            answer += 'R';
            posR = num;
        }
        
        else{
            const leftDist = Math.abs(position[posL][0] - position[num][0]) + 
                Math.abs(position[posL][1] - position[num][1]);
            const rightDist = Math.abs(position[posR][0] - position[num][0]) + 
                Math.abs(position[posR][1] - position[num][1]);

            if (leftDist === rightDist) {
                hand === 'right' ? answer+='R' : answer+='L';
            } else if(leftDist > rightDist){
                answer+='R';
            } else if(rightDist > leftDist){
                answer+='L';
            }
            
            answer[answer.length-1] === 'L'? posL = num : posR = num
        }
    }

    return answer;
}

function calDist(num, leftNow, rightNow, pos, handed){
    const X = 0, Y = 1
    const leftDist = Math.abs(pos[leftNow][X] - pos[num][X]) + 
        Math.abs(pos[leftNow][Y] - pos[num][Y])
    const rightDist = Math.abs(pos[rightNow][X] - pos[num][X]) + 
        Math.abs(pos[rightNow][Y] - pos[num][Y])
    // 거리가 같으면
    if (leftDist === rightDist) return handed === 'right' ?  'R' : 'L';
    return leftDist > rightDist ? 'R' : 'L'
}

function solution(numbers, hand) {
    // 왼손잡이인지 오른손잡이인지
    const HANDED = hand;
    // 번호 좌표화
    const position = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    // 손 위치 초기화
    let rightNow = '#', leftNow = '*';
    // solution
    let result = ''
    for (const num of numbers){
        // 왼쪽 키라인
        if (num % 3 === 1){
            result += 'L';
            leftNow = num;
        }
        // 오른쪽 키라인
        else if (num !==0 && num % 3 === 0){
            result += 'R';
            rightNow = num;
        }
        // 중간 키라인
        else{
            result += calDist(num, leftNow, rightNow, position, HANDED)
            result[result.length-1] === 'L'? leftNow = num : rightNow = num
        }
    }

    return result;
}