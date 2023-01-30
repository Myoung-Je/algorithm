/** 옹알이 (2) */
function solution(babbling) {
  let answer = 0;
  for(let cry of babbling) {
      let sameChk = 0; 
      let chk = true;
      for(let i = 0; i<cry.length; i++) {
          if(cry.substr(i,3) === 'aya' && sameChk != 1) {
              sameChk=1;
              i+=2;
          } 
          else if(cry.substr(i,2) === 'ye' && sameChk !=2) {
              sameChk=2;
              i+=1;
          }
          else if(cry.substr(i,3) === 'woo' && sameChk !=3) {
              sameChk=3;
              i+=2;
          }
          else if(cry.substr(i,2) === 'ma' && sameChk !=4) {
              sameChk=4;
              i+=1;
          }
          else {
              chk=false;
              break;
          }       
      }
      if(chk==true) answer++;
  }
  return answer;
}

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce((ans, word) => (
    !regexp1.test(word) && regexp2.test(word) ? ++ans : ans
  ), 0);
}