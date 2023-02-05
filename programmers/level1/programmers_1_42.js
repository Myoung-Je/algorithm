/** 문자열 내 p와 y의 개수 */
function solution(s){
    s = s.toLowerCase().split('');
    let arr1 = s.filter(s => s==='p');
    let arr2 = s.filter(s => s==='y');
    
    return arr1.length === arr2.length;
}

function numPY(s){
      return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }