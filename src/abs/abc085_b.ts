/*
- 1≤N≤100
- 1≤d_i≤100
- 入力値はすべて整数である。
*/

const main = (rawInput: string) => {
  const [n, ...d] = rawInput.trim().split("\n");

  // 小→大で並べても同じ意味
  const noDupD = new Set(
    d
      .map((str) => Number(str)) // 実は変換不要
      .sort()
    );

  console.log(noDupD.size);
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
