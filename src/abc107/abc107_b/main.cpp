#include <bits/stdc++.h>
using namespace std;

int main()
{
  int H, W;
  cin >> H >> W;

  vector<string> a(H);
  for (int i = 0; i < H; i++)
  {
    cin >> a[i];
  }

  vector<bool> rowsIncludeBlack(H, false);
  vector<bool> colsIncludeBlack(W, false);

  for (int i = 0; i < H; i++)
  {
    for (int j = 0; j < W; j++)
    {
      if (a.at(i).at(j) == '#')
      {
        rowsIncludeBlack.at(i) = true;
        colsIncludeBlack.at(j) = true;
      }
    }
  }

  for (int i = 0; i < H; i++)
  {
    if (rowsIncludeBlack.at(i) == false)
    {
      continue;
    }
    for (int j = 0; j < W; j++)
    {
      if (colsIncludeBlack.at(j) == false)
      {
        continue;
      }
      cout << a.at(i).at(j);
    }
    cout << endl;
  }
}
