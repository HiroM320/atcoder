#include <bits/stdc++.h>
using namespace std;

// Map 系を知ってたら簡単そうだけど、今回は配列で解く
int main()
{
  int N;
  cin >> N;

  vector<string> s = vector<string>(N);
  vector<int> sCount = vector<int>(N, 1);
  for (int i = 0; i < N; i++)
  {
    cin >> s.at(i);

    // 重複カウント
    // 最初にヒットした値のみインクリメントされるが、常に最初にヒットした値で処理するため問題ない
    for (int j = 0; j < i; j++)
    {
      if (s.at(i) == s.at(j))
      {
        sCount.at(j) += 1;
        // 無視する値として -1 にする
        sCount.at(i) = -1;
        break;
      }
    }
  }

  int M;
  cin >> M;

  vector<string> t = vector<string>(M);

  for (int i = 0; i < M; i++)
  {
    cin >> t.at(i);
  }

  int best = 0;

  for (int i = 0; i < N; i++)
  {
    if (sCount.at(i) < best)
      continue;

    int tempBest = sCount.at(i);
    for (int j = 0; j < M; j++)
    {
      if (s.at(i) == t.at(j))
      {
        tempBest--;
        if (tempBest <= best)
        {
          break;
        }
      }
    }

    if (tempBest > best)
    {
      best = tempBest;
    }
  }

  cout << best << endl;
}
