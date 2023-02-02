/** 햄버거 만들기 */
function solution(ingredient) {
    let answer = 0;
    const arr = [];
  
    for (let i = 0; i < ingredient.length; i++) {
  
      const len = arr.push(ingredient[i]);
      
      if (len >= 4) {
        if (
          arr[len - 4] === 1 &&
          arr[len - 3] === 2 &&
          arr[len - 2] === 3 &&
          arr[len - 1] === 1
        ) {
          arr.pop();
          arr.pop();
          arr.pop();
          arr.pop();
  
          answer++;
        }
      }
    }
    return answer;
  }

  function solution(ingredient) {
    let count = 0;

    for (let i = 0; i < ingredient.length; i++) {
        if (ingredient.slice(i, i + 4).join('') === '1231') {
            count++;
            ingredient.splice(i, 4);
            i -= 3;
        }
    }

    return count;
}