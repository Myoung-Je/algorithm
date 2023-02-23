/** 모음 사전 */
function solution(word) {
    const result = [];
    const str = "";
    for (let i = 1; i <= 5; i++) dfs(str, i, result);
    return result.sort().indexOf(word) + 1;
}

const dfs = (word, length, result) => {
    const arr = [..."AEIOU"];
    
    if (length === word.length) {
        result.push(word);
        return;
    }

    arr.forEach((s) => {
        dfs(word + s, length, result);
    });
};