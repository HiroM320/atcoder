// inputに入力データ全体が入る
const main = (rawInput: string) => {
  const [a, b] = rawInput.split(" ");
  //出力
  console.log((Number(a) * Number(b)) % 2 === 0 ? "Even" : "Odd");
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
main(require("fs").readFileSync("/dev/stdin", "utf8"));
