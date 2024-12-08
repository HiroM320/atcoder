// 解説見て解いた;;

const main = (rawInput: string) => {
  const [N, S] = rawInput.trim().split("\n");

  // 真面目に問題通りの条件をやるより / を見つけてその左に 1、右に 2 が並んでいるという条件で探すほうが早そう

  let slashCharAt = 0;

  // "/" があることは確定している
  let longest = 1;

  while(slashCharAt !== -1) {
    slashCharAt = S.indexOf("/", slashCharAt+1)

    let diff = 0;
    while(true) {
      const oneCharAt = slashCharAt - (diff+1);
      const twoCharAt = slashCharAt + (diff+1);
      if(oneCharAt < 0 || twoCharAt > S.length-1) break;
      if(S.charAt(oneCharAt) !== "1" || S.charAt(twoCharAt)!=="2") break;

      diff++;
    }

    // スラッシュ(1) + 左右の文字列の長さ(diff*2)
    longest = Math.max(longest, 1 + diff*2)
  }

  console.log(`${longest}`);
};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
