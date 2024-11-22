FROM oven/bun:debian AS build

WORKDIR /workspace

RUN apt-get update
RUN apt-get -y install locales-all

ENV LANG="ja_JP.UTF-8" \
  LANGUAGE="ja_JP:ja" \
  LC_ALL="ja_JP.UTF-8"
