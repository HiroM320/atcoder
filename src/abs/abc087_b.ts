/*
あなたは、500 円玉を A 枚、100 円玉を B 枚、50 円玉を C 枚持っています。 これらの硬貨の中から何枚かを選び、合計金額をちょうど X 円にする方法は何通りありますか。

同じ種類の硬貨どうしは区別できません。2 通りの硬貨の選び方は、ある種類の硬貨についてその硬貨を選ぶ枚数が異なるとき区別されます。
*/

const Main = (rawInput: string) => {
  const [yen500, yen100, yen50, x] = rawInput
    .split("\n")
    .map((line) => parseInt(line, 10));

  let result = 0;

  for (let i500 = 0; i500 <= yen500; i500++) {
    for (let i100 = 0; i100 <= yen100; i100++) {
      for (let i50 = 0; i50 <= yen50; i50++) {
        if (i500 * 500 + i100 * 100 + i50 * 50 === x) result++;
      }
    }
  }

  console.log(result);
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
