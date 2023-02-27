/** 단속카메라 */
function solution(routes) {
    let answer = 1;
    routes.sort((a, b) => a[0] - b[0]);
    let a = routes[0][1];
    
    for(let i=1; i<routes.length; i++) {
        if(a < routes[i][0]) {
            answer++;
            a = routes[i][1];
        }else if(a > routes[i][1]) a = routes [i][1];
        
    }   
    return answer;
}

const solution=(routes)=>{
    let cnt = 0;
    let camera = -30001;
    routes.sort((a,b)=>a[1]-b[1]);
    for(let item of routes){
      if(item[0]>camera){
        cnt++;
        camera=item[1];
      }
    }
   return cnt;
  }