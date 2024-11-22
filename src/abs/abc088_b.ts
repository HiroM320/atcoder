/*
N 枚のカードがあります. i 枚目のカードには, a_i という数が書かれています.
Alice と Bob は, これらのカードを使ってゲームを行います. ゲームでは, Alice と Bob が交互に 1 枚ずつカードを取っていきます. Alice が先にカードを取ります.
2 人がすべてのカードを取ったときゲームは終了し, 取ったカードの数の合計がその人の得点になります. 2 人とも自分の得点を最大化するように最適な戦略を取った時, Alice は Bob より何点多く取るか求めてください.

- N は 1 以上 100 以下の整数
- a_i (1≤i≤N) は 1 以上 100 以下の整数
*/

const main = (rawInput: string) => {
  const [l1, l2] = rawInput.split("\n");

  const aLength = Number(l1);
  const aList = l2.split(" ")
    .map((str) => Number(str));

  aList.sort((x,y) => y-x);

  const diff = aList.reduce((diff, current, index) =>
    index%2===0 ?
      diff+=current :
      diff-=current
    , 0)

  console.log(diff);

};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
