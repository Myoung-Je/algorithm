function solution(players, callings) {
  const answer = [];
  const map = new Map();
  const map2 = new Map();

  players.forEach((e, i) => {
    map.set(e, i);
  });

  players.forEach((e, i) => {
    map2.set(i, e);
  });

  callings.forEach((s) => {
    const temp = map.get(s);
    const temp2 = map2.get(temp - 1);

    map.set(temp2, temp);
    map.set(s, temp - 1);
    map2.set(temp, temp2);
    map2.set(temp - 1, s);
  });

  for (let [key, val] of map.entries()) {
    answer[val] = key;
  }
  return answer;
}

/**------------------- */
function solution(players, callings) {
  let maps = {};
  for (let i = 0; i < players.length; i++) {
    maps[players[i]] = i;
  }
  callings.forEach((v) => {
    let num = maps[v];
    let temp = players[num - 1];
    players[num - 1] = v;
    players[num] = temp;
    maps[v]--;
    maps[players[num]]++;
  });
  return Object.entries(maps)
    .sort((a, b) => a[1] - b[1])
    .map((v) => v[0]);
}
