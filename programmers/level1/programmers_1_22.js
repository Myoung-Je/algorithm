/** 성격 유형 검사하기 */
function solution(survey, choices) {
    let answer = '';
    const arr = {R:0, T:0, C:0, F:0, J:0, M:0, A:0, N:0};
    
    for(let i in survey) {
        if(choices[i] > 4){
            if(survey[i][1] ==='R') arr.R += choices[i]-4;
            if(survey[i][1] ==='T') arr.T += choices[i]-4;
            if(survey[i][1] ==='C') arr.C += choices[i]-4;
            if(survey[i][1] ==='F') arr.F += choices[i]-4;
            if(survey[i][1] ==='J') arr.J += choices[i]-4;
            if(survey[i][1] ==='M') arr.M += choices[i]-4;
            if(survey[i][1] ==='A') arr.A += choices[i]-4;
            if(survey[i][1] ==='N') arr.N += choices[i]-4;
        } else if(choices[i]<4){
            if(survey[i][0] ==='R') arr.R += 4-choices[i];
            if(survey[i][0] ==='T') arr.T += 4-choices[i];
            if(survey[i][0] ==='C') arr.C += 4-choices[i];
            if(survey[i][0] ==='F') arr.F += 4-choices[i];
            if(survey[i][0] ==='J') arr.J += 4-choices[i];
            if(survey[i][0] ==='M') arr.M += 4-choices[i];
            if(survey[i][0] ==='A') arr.A += 4-choices[i];
            if(survey[i][0] ==='N') arr.N += 4-choices[i];
        }
    }
    arr.R >= arr.T ? answer+='R' : answer+='T';
    arr.C >= arr.F ? answer+='C' : answer+='F';
    arr.J >= arr.M ? answer+='J' : answer+='M';
    arr.A >= arr.N ? answer+='A' : answer+='N';

    return answer;
}

function solution(survey, choices) {
    const MBTI = {};
    const types = ["RT","CF","JM","AN"];

    types.forEach((type) =>
        type.split('').forEach((char) => MBTI[char] = 0)
    )

    choices.forEach((choice, index) => {
        const [disagree, agree] = survey[index];

        MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
    });

    return types.map(([a, b]) => MBTI[b] > MBTI[a] ? b : a).join("");
}