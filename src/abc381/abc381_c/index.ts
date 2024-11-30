const main = (rawInput: string) => {
  const [N, S] = rawInput.trim().split("\n");

  let longestLen = 0;

  for(let startPos=0;startPos<=S.length;startPos++) {

    for(let endPos=0; S.length-startPos>=endPos;endPos++) {

      const TLen = S.length - startPos - endPos;

      if(TLen %2 === 0) {
        continue;
      }


      const slashPos = (TLen +1)/2;
      const oneLength = slashPos - 1;
      const twoLength = TLen - (slashPos + 1) + 1;

      // console.debug(T, slashPos, oneLength, twoLength);

      if(!S.startsWith(`${"1".repeat(oneLength)}/`, startPos)) {
        continue;
      }

      if(S.charAt(slashPos-1+startPos) !== "/") {
        continue;
      }

      if(twoLength >= 0 && !S.endsWith(`/${"2".repeat(twoLength)}`, endPos)) {
        continue;
      }


      if(longestLen < TLen) {
        longestLen = TLen;
        // console.debug("longest:", TLen);
      }
    }
  }

  console.log(`${longestLen}`);
};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
