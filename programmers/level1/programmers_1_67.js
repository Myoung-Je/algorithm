/** 예산 */
function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a-b);
  
  for(const element of d) {
      budget = budget-element;
      if(budget>=0) {
          answer++;
      } else {
          break;
      }
  }
  return answer;
}