function solution(today, terms, privacies) {
    var answer = [];
    terms = terms.map((e) => e=e.split(' '));
    privacies = privacies.map((e) => e=e.split(' '));
    for(let i=0; i<privacies.length; i++) {
        for(let j=0; j<terms.length; j++) {
            if(privacies[i][1] === terms[j][0]){
                const date = new Date(new Date(privacies[i][0])
                             .setMonth(new Date(privacies[i][0])
                             .getMonth()+Number(terms[j][1])));
                date.setDate(date.getDate()-1);
                date.setDate(date.getDate() >= 28 ? 28:date.getDate())
                
                privacies[i] = date.getFullYear() +
                        '.' + ( (date.getMonth()+1) < 9 ? "0" + (date.getMonth()+1) : (date.getMonth()+1) )+
                        '.' + ( (date.getDate()) < 9 ? "0" + (date.getDate()) : (date.getDate()) );
                console.log(privacies[i])

            }
        }
    }
    for(let i in privacies) {
        if(privacies[i] < today) {
            answer.push(Number(i)+1);
        }
    }
    
    return answer;
}

function solution(today, terms, privacies) {
    const answer = [];
  
    const expire = new Date(today);
  
    const termType = {};
    terms.forEach((item) => {
      const [type, term] = item.split(" ");
  
      termType[type] = Number(term);
    });
      
    privacies.forEach((item, idx) => {
      const [date, type] = item.split(" ");
  
      const chDate = new Date(date);
  
      chDate.setMonth(chDate.getMonth() + termType[type]);
  
      if (chDate <= expire) answer.push(idx + 1);
    });
  
    return answer;
  }