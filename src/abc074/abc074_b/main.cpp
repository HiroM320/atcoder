#include <bits/stdc++.h>
using namespace std;

int main()
{
  int N, K;
  cin >> N >> K;

  int onewaySum = 0;
  for (int i = 0; i < N; i++)
  {
    int x, dA, dB;
    cin >> x;

    dA = x;
    dB = K - x;

    if (dA < dB)
      onewaySum += dA;
    else
      onewaySum += dB;
  }

  cout << onewaySum * 2 << endl;
}
