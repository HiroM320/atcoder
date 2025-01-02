#include <bits/stdc++.h>
using namespace std;

// 再帰関数で解いてみる https://atcoder.jp/contests/APG4b/tasks/APG4b_v
void setStepsRecursively(vector<string> &tiles, vector<vector<int>> &stepOfTiles, int step, int x, int y);
bool isAllConnected(vector<string> &tiles, vector<vector<int>> &stepOfTiles);

int main()
{
  vector<string> A(10);
  for (int y = 0; y < 10; y++)
  {
    cin >> A.at(y);
  }

  for (int y = 0; y < 10; y++)
  {
    for (int x = 0; x < 10; x++)
    {
      if (A.at(y).at(x) != 'x')
      {
        continue;
      }

      vector<vector<int>> stepOfTiles(10, vector<int>(10, 0));
      A.at(y).at(x) = 'o';
      setStepsRecursively(A, stepOfTiles, 1, x, y);

      if (isAllConnected(A, stepOfTiles))
      {
        // コメント外すと探索結果を視覚化できる
        // for (vector<int> row : stepOfTiles)
        // {
        //   for (int step : row)
        //   {
        //     cout << setw(2) << step;
        //   }
        //   cout << endl;
        // }
        // cout << "YES" << endl;
        return 0;
      }

      A.at(y).at(x) = 'x';
    }
  }

  cout << "NO" << endl;
}

void setStepsRecursively(vector<string> &tiles, vector<vector<int>> &stepOfTiles, int step, int x, int y)
{
  if (x < 0 || x >= 10 || y < 0 || y >= 10)
  {
    return;
  }
  if (tiles.at(y).at(x) != 'o')
  {
    return;
  }
  if (stepOfTiles.at(y).at(x) != 0)
  {
    return;
  }

  stepOfTiles.at(y).at(x) = step;

  int nextStep = step + 1;
  setStepsRecursively(tiles, stepOfTiles, nextStep, x - 1, y);
  setStepsRecursively(tiles, stepOfTiles, nextStep, x + 1, y);
  setStepsRecursively(tiles, stepOfTiles, nextStep, x, y - 1);
  setStepsRecursively(tiles, stepOfTiles, nextStep, x, y + 1);
}

bool isAllConnected(vector<string> &tiles, vector<vector<int>> &stepOfTiles)
{
  for (int y = 0; y < 10; y++)
  {
    for (int x = 0; x < 10; x++)
    {
      if (tiles.at(y).at(x) == 'o' && stepOfTiles.at(y).at(x) == 0)
      {
        return false;
      }
    }
  }
  return true;
}
