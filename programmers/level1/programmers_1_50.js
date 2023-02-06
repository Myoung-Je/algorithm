function solution(answers) {
    const answer = [];
    const supo1 = [1,2,3,4,5];
    const supo2 = [2,1,2,3,2,4,2,5];
    const supo3 = [3,3,1,1,2,2,4,4,5,5];
    const arr = [0,0,0];
    
    answers.forEach((s,i) => {
        s === supo1[i%supo1.length] && arr[0]++;
        s === supo2[i%supo2.length] && arr[1]++;
        s === supo3[i%supo3.length] && arr[2]++;
    })
    const max = Math.max(...arr);
    for (let i=0; i<=2; i++) {
        max === arr[i] && answer.push(i+1);
    }    
    
    return answer;
}