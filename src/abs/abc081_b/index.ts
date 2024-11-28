// inputに入力データ全体が入る
const Main = (rawInput: string) => {
  const [_, rawIntegers] = rawInput.split("\n");

  const integers = rawIntegers
    .split(" ")
    .map((rawInteger) => parseInt(rawInteger, 10));

  let processedIntegers = integers.slice();
  let count = 0;
  while (!processedIntegers.some((integer) => integer & 0x01)) {
    processedIntegers = processedIntegers.map((integer) => integer >> 0x01);
    count++;
  }

  console.log(count);
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
