function solution(quiz) {
    return quiz.map((n) => {
        const [equation, answer] = n.split(" = ");
        return eval(equation) === Number(answer) ? "O" : "X";
    })
}

function solution(quiz) {
    var answer = [];
    return quiz.map(t => {
        const [calc, result] = t.split(' = ');
        const sign = calc.includes('+') ? 1 : -1
        const [a, b] = calc.split(sign === 1 ? ' + ' : ' - ');

        return +a + (+b * sign) === +result ? 'O' : 'X'
    });
}