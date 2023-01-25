function solution(str1, str2) {
    for(let i=0; i<str1.length; i++) {
        if(str1.substr(i,str2.length) === str2) {
            return 1;
        } 
    }
    return 2;
}

function solution(str1, str2) {
    return str1.split(str2).length > 1 ? 1 : 2
}