FROM oven/bun:latest AS build

WORKDIR /workspace

COPY .vscode ./
COPY package.json ./
COPY bun.lockb ./
COPY src ./

RUN bun install
