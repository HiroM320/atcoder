/*
1 以上  N 以下の整数のうち、 10 進法での各桁の和が  A 以上  B 以下であるものの総和を求めてください。

- 1≤N≤10^4
- 1≤A≤B≤36
- 入力はすべて整数である
*/

const main = (rawInput: string) => {
  const [n, a, b] = rawInput.split(" ")
    .map((str) => Number(str));

  let result = 0;

  for(let i=a; i <= n; i++){
    const sumDigits = i.toString().split("").reduce((acc, current) => acc+Number(current),0)
    if(a <= sumDigits && sumDigits <= b){
      result += i;
    }
  }

  console.log(result);

};

main(require("fs").readFileSync("/dev/stdin", "utf8"));
