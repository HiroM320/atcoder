const main = (rawInput: string) => {
  const [rawN, ...rawPlans] = rawInput.trim().split("\n");

  const N = Number(rawN);
  const plans = rawPlans.map(
    (current) => {
      const [t, x, y] = current.split(" ").map((str) => Number(str));
      return {t: t, pos: [x, y]};
      }, );

  // いったりきたりできるのがミソかな
  // 留まることが可能な条件: 残り時間 t - elapsed が偶数であること
  // つまり 次の場所まで移動する時間 < 残り時間 かつ 移動後留まれる ことで判定できる

  let lastPos = [0, 0];
  let elapsed = 0;

  for(const plan of plans) {
    const posDiff = Math.abs(plan.pos[0] - lastPos[0]) + Math.abs(plan.pos[1] - lastPos[1])

    // 時間が足りないケース
    if(posDiff > plan.t - elapsed) {
      console.log("No");
      // console.debug(`1: ${elapsed} ${posDiff}`)
      return;
    }
    // 留まれないケース
    else if((plan.t - (elapsed + posDiff)) % 2 === 1) {
      console.log("No");
      // console.debug(`2: ${plan.t} - (${elapsed}+${posDiff})`)
      return;
    }

    lastPos = plan.pos;
    elapsed = plan.t;
  }

  console.log("Yes");

};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
