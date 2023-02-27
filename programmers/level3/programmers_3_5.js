/** 베스트앨범 */
function solution(genres, plays) {
  const answer = [];
  const song = {};
  
  for(let i=0;i<genres.length;i++){
      song[genres[i]] = song[genres[i]] ? song[genres[i]]+plays[i] : plays[i];
  }
  
  const arr = Object.entries(song).sort((a, b) => b[1] - a[1]);
  
  let obj=genres.map((g,i)=>({
      g:g,
      i:i,
      p:plays[i]
  })) 
  
  arr.forEach((s, i) => {
      let sortArr=[];
      for(let j=0;j<obj.length;j++){
          if(s[0]===obj[j].g){
              sortArr.push(obj[j]);
          }
      }
      sortArr.sort((a,b) => b.p-a.p);
      sortArr.forEach((a,i) => {
          if(i<2) {
              answer.push(a.i)
          }        
      })
      
  })    
  return answer;
}

function solution(genres, plays) {
  var dic = {};
  genres.forEach((t,i)=> {
      dic[t] = dic[t] ?  dic[t] + plays[i] :plays[i];        
  });

  var dupDic = {};
  return genres          
        .map((t,i)=> ({genre : t, count:plays[i] , index:i}))
        .sort((a,b)=>{               
             if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
             if(a.count !== b.count) return b.count - a.count;
             return a.index - b.index;
         })
         .filter(t=>  {
             if(dupDic[t.genre] >= 2) return false;
             dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre]+ 1 : 1;
             return true;
          })
         .map(t=> t.index);    
}