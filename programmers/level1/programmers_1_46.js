/** 소수 만들기 */
function solution(nums) {
    let answer = 0;
    for(let i=0; i<nums.length-2; i++) {
        for(let j=i+1; j<nums.length-1; j++) {
            for(let k=j+1; k<nums.length; k++) {
                let ct = 0;
                const sum = nums[i]+nums[j]+nums[k]
                for(let l=2; l<=sum/2; l++) {
                    if(sum%l === 0) {
                        ct++;
                    }
                }
                ct === 0 && answer++;
            }
        }
    }
    
    return answer;
}