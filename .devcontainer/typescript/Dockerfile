FROM mcr.microsoft.com/devcontainers/base:ubuntu

ARG USERNAME=vscode

RUN apt-get update
RUN apt-get -y install locales-all zip unzip curl

ENV LANG="ja_JP.UTF-8" \
  LANGUAGE="ja_JP:ja" \
  LC_ALL="ja_JP.UTF-8"

# online-judge-tools 用に Python をインストール https://github.com/online-judge-tools/oj
RUN apt-get -y install python3 python3-pip

# bun は $HOME 配下にインストールされるため、開発時に利用するユーザーに切り替えなければ root 直下になってしまう
USER $USERNAME

# bun をインストール
RUN curl -fsSL https://bun.sh/install | /bin/bash
