// inputに入力データ全体が入る
const Main = (rawInput: string) => {
  const sList = rawInput.trim().split("");

  const sum = sList.reduce((acc, value) => {
    if (value === "1") {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log(sum);
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
