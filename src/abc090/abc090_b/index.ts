const main = (rawInput: string) => {
  const [A, B] = rawInput.trim().split(" ")
    .map((str) => Number(str));

  // AとBは5桁確定
  // 3桁目は気にしなくて良い
  // 1桁目===5桁目, 2桁目===4桁目となれば良い

  let ans = 0;

  for(let i=A; i<=B;i++){
    const digit21 = i%100;

    const digit4 = Math.floor(i%10000 /1000);
    const digit5 = Math.floor(i/10000);
    const digit45 = digit4*10 + digit5;

    // console.debug(digit21, digit45);

    if(digit21 === digit45) {
      ans += 1;
    }
  }

  console.log(`${ans}`)

};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
