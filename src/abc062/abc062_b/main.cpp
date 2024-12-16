#include <bits/stdc++.h>
using namespace std;

int main()
{
  int H, W;
  cin >> H >> W;

  vector<vector<char>> pixels(H, vector<char>(W));

  for (int i = 0; i < H; i++)
  {
    for (int j = 0; j < W; j++)
    {
      cin >> pixels.at(i).at(j);
    }
  }

  for (int j = 0; j < W; j++)
  {
    cout << '#';
  }
  cout << "##" << endl;

  for (int i = 0; i < H; i++)
  {
    cout << '#';
    for (int j = 0; j < W; j++)
    {
      cout << pixels.at(i).at(j);
    }
    cout << '#' << endl;
  }

  for (int j = 0; j < W; j++)
  {
    cout << '#';
  }
  cout << "##" << endl;
}
