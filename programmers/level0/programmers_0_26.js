function solution(order) {
    const res = String(order).split('').filter(e=>e%3===0 && e!=0)
    return res.length;
}

function solution(order) {
    return (''+order).split(/[369]/).length-1;
}