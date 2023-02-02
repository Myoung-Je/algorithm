/** 폰켓몬 */
function solution(nums) {
    let answer = 1;
    nums.sort((a, b) => a-b);
    for(let i =0; i< nums.length-1; i++) {
        nums[i] != nums[i+1] && answer++;
    }
    if(answer>nums.length/2){
        answer = nums.length/2;
    }   
    return answer;
}

function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];
  
    return arr.length > max ? max : arr.length
  }