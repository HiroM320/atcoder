const dream = "dream" as const;
const dreamer = "dreamer" as const;
const erase = "erase" as const;
const eraser = "eraser" as const;

const main = (rawInput: string) => {
  const S = rawInput.trim();

  // S は dream dreamer erase eraser のいずれかの繰り返しのみで構成された文字列
  // dream erase や erase erase と続いたときに dreamer/eraser と判定されることに注意
  // 後ろから判定すればいけそうか？
  // erase dream eraser eraser dreamer

  for(let i=0;i+4 < S.length ;i++) {

    const endPos = S.length-i;

    // console.debug(`${S}`);
    // console.debug(`${' '.repeat(endPos-1)}||`)
    if(S.endsWith(dream, endPos)) {
      i += dream.length;
    }
    else if(S.endsWith(dreamer, endPos)) {
      i += dreamer.length;
    }
    else if(S.endsWith(erase, endPos)) {
      i += erase.length;
    }
    else if(S.endsWith(eraser, endPos)) {
      i += eraser.length;
    } else {
      console.log("NO")
      return;
    }
    i--;
  }

  console.log("YES");

};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
