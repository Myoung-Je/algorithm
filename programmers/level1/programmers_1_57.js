/** 신고 결과 받기 */
function solution(id_list, report, k) {
    const arr = new Array(id_list.length).fill(0);
    const reArr = [...new Set(report)].map(s => s=s.split(' '));
    const check = [];
    const mail = {};
    id_list.forEach((key, i) => mail[key] = arr[i]);
    
    for(let i=0; i<id_list.length; i++) {
        let ct=0;
        for(let j=0; j<reArr.length; j++) {
            if(id_list[i] ===reArr[j][1]) {
                ct++;
            }
        }
        if(ct>=k) {        
            check.push(id_list[i])
        }
    }
    
    for(let i=0; i<check.length; i++) {
        for(let j=0; j<reArr.length; j++) {
            if(check[i] === reArr[j][1]) {
                mail[reArr[j][0]] = mail[reArr[j][0]] + 1;
            }
        }
    }
    
    for(let i=0; i<id_list.length; i++) {
        arr[i] = mail[id_list[i]];
    }
    return arr;
}

function solution(id_list, report, k) {
    let reports = [...new Set(report)].map(a=>{return a.split(' ')});
    let counts = new Map();
    for (const bad of reports){
        counts.set(bad[1],counts.get(bad[1])+1||1)
    }
    let good = new Map();
    for(const report of reports){
        if(counts.get(report[1])>=k){
            good.set(report[0],good.get(report[0])+1||1)
        }
    }
    let answer = id_list.map(a=>good.get(a)||0)
    return answer;
}