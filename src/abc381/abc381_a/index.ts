const main = (rawInput: string) => {
  const [rawN, S] = rawInput.trim().split("\n");

  // S.length は 奇数
  // 1文字目から (S.length+1)/2 -1 までは 1 → / までが 1
  // (S.length+1)/2 文字目（=真ん中の文字）は /
  // (S.length+1)/2 文字目から最後までは 2
  // 最後の条件 2乗 かと読み間違えてた

  if(S.length %2 !== 1) {
    console.log("No");
    return;
  }

  const slashPos = (S.length+1)/2;
  const leftLength = slashPos - 1;
  const rightLength = S.length - (slashPos + 1) + 1;

  if(!S.startsWith(`${"1".repeat(leftLength)}/`)) {
    console.log("No");
    return;
  }

  if(S.charAt(slashPos-1) !== "/") {
    console.log("No");
    return;
  }

  if(rightLength >= 0 && !S.endsWith(`/${"2".repeat(rightLength)}`)) {
    console.log("No");
    return;
  }

  console.log("Yes");

};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
