# 参与贡献

## 环境准备

### Node.js 和 pnpm

安装 Node.js。

安装 `pnpm` ，参考[官网](https://pnpm.io/installation)。

### Clone 项目

```bash
$ git clone git@github.com:jokerwon/stump.git
$ cd stump
```

### 安装依赖

```bash
$ pnpm i
```

## 开发 Stump

### 开发调试 CLI

```bash
$ pnpm run dev:cli

$ npm link # 链接到全局

$ stump fixtures/images # 使用 CLI 命令
```

### 开发调试客户端和服务端

```bash
$ pnpm run dev
```


### 测试

```bash
$ pnpm test
```

## 发布（TODO）
