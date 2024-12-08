const main = (rawInput: string) => {
  const [N, S] = rawInput.trim().split("\n");

  // 真面目に問題通りの条件をやるより / を見つけてその左に 1、右に 2 が並んでいるという条件で探すほうが早そう

  let prevSlashPos = 0;
  let slashPos = S.indexOf("/");

  // "/" が含まれない文字列は例外
  if(slashPos === -1) {
    console.log("0");
    return;
  }

  // "/" がある時点で 1 文字確定
  let longest = 1;

  while(slashPos !== -1) {

    let longestOneLen = 0;
    let longestTwoLen = 0;

    for(let oneLen= 0; slashPos-1 -oneLen >= prevSlashPos; oneLen++) {
      if(S.charAt(slashPos-1 -oneLen) !== "1") {
        if(longestOneLen < oneLen) longestOneLen = oneLen;
        // console.debug("1:",oneLen);
        break;
      }
    }

    for(let twoLen = 0;slashPos+1 +twoLen<=S.length;twoLen++) {
      if(S.charAt(slashPos+1 +twoLen) !== "2") {
        if(longestTwoLen < twoLen) longestTwoLen = twoLen;
        // console.debug("2:", twoLen);
        break;
      }
    }

    const tempLongest = longestOneLen + 1 + longestTwoLen;

    if(tempLongest > longest) {
      // ここやっつけ仕事
      if(tempLongest % 2 === 1) {
        longest = tempLongest;
      } else {
        longest = tempLongest -1;
      }
    }

    prevSlashPos = slashPos;
    slashPos = S.indexOf("/", slashPos+1)
  }

  console.log(`${longest}`);
};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
