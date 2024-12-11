FROM mcr.microsoft.com/devcontainers/cpp:ubuntu

ARG USERNAME=vscode

RUN apt-get update
RUN apt-get -y install locales-all zip unzip curl

ENV LANG="ja_JP.UTF-8" \
  LANGUAGE="ja_JP:ja" \
  LC_ALL="ja_JP.UTF-8"

# online-judge-tools 用に Python をインストール https://github.com/online-judge-tools/oj
RUN apt-get -y install python3 python3-pip
