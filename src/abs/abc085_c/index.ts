const main = (rawInput: string) => {
  const [N, Y] = rawInput.split(" ").map((str) => Number(str));

  const divY = Y/1000;

  const x = 10;
  const y = 5;
  const z = 1;

  // まずは安易にz札から全探索
  // 全部使って Y 未満であれば上位の札を1枚使って再計算

  let xCount = 0;
  let yCount = 0;
  let zCount = N;

  const getDiff = () => divY -((x * xCount) + (y * yCount) + (z * zCount));

  const nextCount = () => {
    const diff = getDiff();

    if(diff > y*(N-xCount)) {
      xCount++;
      zCount=N-xCount;
    }
    else if(diff < 0) {
      xCount++;
      yCount=0;
      zCount=N-xCount;
    }
    else if(zCount > 0) {
      zCount--;
      yCount++;
    }
    else if(zCount === 0) {
      xCount++;
      yCount=0;
      zCount=N-xCount;
    }
    // console.debug(`${diff} -> ${xCount} ${yCount} ${zCount}`)
  }

  while(true) {
    if(getDiff() === 0) {
      // console.debug(`${divY} - ${(x*xCount) + (y*yCount) + (z*zCount)} === ${getDiff()}`)
      break;
    }

    if(xCount >= N) {
      console.log("-1 -1 -1");
      return;
    }

    nextCount();
  }

  console.log(`${xCount} ${yCount} ${zCount}`)
};


main(require("fs").readFileSync("/dev/stdin", "utf8"));
