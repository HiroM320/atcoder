ARG VARIANT="base:ubuntu"

FROM mcr.microsoft.com/devcontainers/$VARIANT

ARG USERNAME=vscode

RUN apt-get update
RUN apt-get -y install locales-all zip unzip curl

ENV LANG="ja_JP.UTF-8" \
  LANGUAGE="ja_JP:ja" \
  LC_ALL="ja_JP.UTF-8"

# online-judge-tools 用に Python をインストール https://github.com/online-judge-tools/oj
RUN apt-get -y install python3 python3-pip

# ユーザーフォーム以下にインストールするものはこれより後に書く
USER $USERNAME

# bun をインストール
RUN curl -fsSL https://bun.sh/install | /bin/bash

# atcoder-cli をインストール
RUN ~/.bun/bin/bun install -g atcoder-cli \
# global にインストールすると node を探すのでシンボリックリンクを貼る
  && mkdir -p ~/.local/bin \
  && ln -s ~/.bun/bin/bun ~/.local/bin/node

# online-judge-tools をインストール
RUN pip3 install online-judge-tools
