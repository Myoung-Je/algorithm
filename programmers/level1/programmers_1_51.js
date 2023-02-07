/** K번째수 */
function solution(array, commands) {
    let answer = [];
    let tempArr = [];
    for(let i=0; i<commands.length; i++) {
        tempArr = array.slice(commands[i][0]-1, commands[i][1]);
        tempArr.sort((a,b) => a-b);
        answer.push(tempArr[commands[i][2]-1]);
    }
    return answer;
}

function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}