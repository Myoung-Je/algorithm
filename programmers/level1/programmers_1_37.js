/** 2016년 */
function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = '2016-'+a+'-'+b;
    return week[new Date(date).getDay()];
}