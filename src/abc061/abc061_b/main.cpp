#include <bits/stdc++.h>
using namespace std;

int main()
{
  int N, M;
  cin >> N >> M;

  vector<int> citiesRoads = vector<int>(N, 0);

  for (int i = 0; i < M; i++)
  {
    int a, b;
    cin >> a >> b;

    citiesRoads.at(a - 1)++;
    citiesRoads.at(b - 1)++;
  }

  for (int i = 0; i < N; i++)
  {
    cout << citiesRoads.at(i) << endl;
  }
}
