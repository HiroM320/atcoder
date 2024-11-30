const main = (rawInput: string) => {
  const S = rawInput.trim();

  const T = S;

  if(T.length % 2 !== 0) {
    console.log("No");
    return;
  }

  for(let i= 1; i<=T.length/2; i++) {
    if(T.charAt(i*2-1 -1) !== T.charAt(i*2 -1)) {
      console.log("No");
      // console.debug(i*2-1, i*2)
      return;
    }
  }

  const charCounts: {[x: string]: number} = {};
  if(T.split("").every((char) => {
    charCounts[char] = charCounts[char] === undefined ? 0 : charCounts[char] + 1;
    if(charCounts[char] > 2) {
      return false;
    }
    return true;
  }) === false) {
    console.log("No");
    // console.debug(charCounts);
    return;
  }

  console.log("Yes");
};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
