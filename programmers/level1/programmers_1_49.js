function solution(num) {
    let ct = 0;
    
    while(ct !== 500) {
        if(num === 1){
            return ct;
        }
        
        if(num%2 === 0) {
            num = num/2;
        }else {
            num = num*3+1;
        }
        
        ct++;
    }
    return -1;
}