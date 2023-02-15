/** [1차] 뉴스 클러스터링 */
function solution(str1, str2) {
    const arr1 = mkArr(str1);
    const arr2 = mkArr(str2);
    const inArr = [];
    const outArr = [...arr1, ...arr2];
    
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) >= 0) {
            inArr.push(...arr1.splice(arr1.indexOf(arr2[i]), 1));
        }
    }
    
    for(let i=0; i<inArr.length; i++) {
        if(outArr.includes(inArr[i])) {
            outArr.splice(outArr.indexOf(inArr[i]), 1);
        }
    }
    if(inArr.length === 0 && outArr.length>0) return 0;
    const iLeng = inArr.length ? inArr.length : 1;
    const oLeng = outArr.length ? outArr.length : 1;
    return Math.floor(iLeng/oLeng * 65536);
}

function mkArr(str) {
    const arr = [];
    for(let i=0; i<str.length-1; i++) {
        const word = str[i]+str[i+1];
        if(check(word)) {
            arr.push(word.toUpperCase());
        }
    }
    return arr;
}

function check(str) {
    const reg = /[^A-Za-z]/ig;
    if(reg.test(str)) return false;
    else return true;
}