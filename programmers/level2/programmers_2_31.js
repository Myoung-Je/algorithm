/** 스킬트리 */
function solution(skill, skill_trees) {
    const stack = [];
    const skillTrees = skill_trees.map(s => s.split(''));
    const skillSplit = skill.split('');
    
    let skilltree = skillTrees.map(s => s.filter(e=> skillSplit.includes(e)).join(''));
    
    for(let i=0; i<skillSplit.length; i++) {
        skilltree = skilltree.filter(s => s[i] ===skillSplit[i] || s[i]===undefined)
    }
    return skilltree.length;
}