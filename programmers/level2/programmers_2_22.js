/** [1차] 캐시 */
function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    const arr = cities.map(s => s = s.toLowerCase());

    for(let city of arr) {
        if(cache.length < cacheSize) {
            if(cache.includes(city)){
                cache.splice(cache.indexOf(city), 1);
                cache.push(city);
                answer++;    
            } else {
                cache.push(city);    
                answer += 5;
            }
        } else {
            if(cache.includes(city)){
                cache.splice(cache.indexOf(city), 1);
                cache.push(city);
                cacheSize !== 0 ? answer++ : answer+=5;
            } else {
                cache.shift();
                cache.push(city);  
                answer += 5;
            }
        }
    }
    return answer;
}