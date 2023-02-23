/** 분수의 덧셈 */
function solution(numer1, denom1, numer2, denom2) {
    const lcm = denom1 * denom2 / gcd(denom1, denom2);
    const numer = numer1 * (lcm/denom1) + numer2*(lcm/denom2);
    const denom = lcm;
    
    const a = gcd(numer, denom);
    return [numer/a, denom/a];
}

function gcd(a, b) {
    if(b===0) return a;
    return gcd(b, a%b);
}
