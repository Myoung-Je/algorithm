/** 신규 아이디 추천 */
function solution(new_id) {
    return new_id
      .toLowerCase()
      .replace(/[^\w-_.]/g, "")
      .replace(/\.+/g, ".")
      .replace(/^\.|\.$/g, "")
      .replace(/^$/, "a")
      .match(/^.{0,14}[^.]/)[0]
      .replace(/^(.)$/, "$1$1$1")
      .replace(/^(.)(.)$/, "$1$2$2");
}

function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}