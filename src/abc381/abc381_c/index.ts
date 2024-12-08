const main = (rawInput: string) => {
  const [N, S] = rawInput.trim().split("\n");

  // 真面目に問題通りの条件をやるより / を見つけてその左に 1、右に 2 が並んでいるという条件で探すほうが早そう

  let prevSlashCharAt = 0;
  let slashCharAt = S.indexOf("/");

  // "/" が含まれない文字列は例外
  if(slashCharAt === -1) {
    console.log("0");
    return;
  }

  // "/" がある時点で 1 文字確定
  let longest = 1;

  while(slashCharAt !== -1) {

    let lastOneCharAt = 0;
    let lastTwoCharAt = 0;

    for(let oneCharAt= slashCharAt-1; oneCharAt >= 0; oneCharAt--) {
      if(S.charAt(oneCharAt) !== "1") {
        lastOneCharAt = oneCharAt+1;
        break;
      }
    }

    for(let twoCharAt = slashCharAt+1; twoCharAt <= S.length-1; twoCharAt++) {
      if(S.charAt(twoCharAt) !== "2") {
        lastTwoCharAt = twoCharAt-1;
        break;
      }
    }

    const provisioningLongest = lastTwoCharAt - lastOneCharAt + 1;

    if(provisioningLongest > longest) {
      // 1文字少なければ偶数じゃないのでOK（やっつけ仕事感）
      if(provisioningLongest % 2 !== 0) {
        longest = provisioningLongest;
      } else {
        longest = provisioningLongest -1;
      }
    }

    prevSlashCharAt = slashCharAt;
    slashCharAt = S.indexOf("/", slashCharAt+1)
  }

  console.log(`${longest}`);
};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
