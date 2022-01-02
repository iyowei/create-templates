# <%=name%>

> <%=description%>

<!--

  :::
:+:+:
  +:+
  +#+
  +#+
  #+#
#######

命令行应用 README.md 基本结构

# $ 指令范式

> 描述：是什么，做了什么，定义。

详细描述：场景，为什么，什么益处。

## 目录

- [使用](#使用)
  - [使用案例一](#使用案例一)
  - [使用案例二](#使用案例二)
  - [使用案例三](#使用案例三)
- [安装](#安装)
  - [NPM](#npm)
  - [PNPM](#pnpm)
  - [Yarn](#yarn)
- [参与贡献](#参与贡献)

## 使用

```shell
  使用方式
    $ 指令 [输入] [选项]

  选项
    --version, -v                              查看版本号
    --help, -h                                 查看帮助

  命令
    set                                        设置 指令 全局设置
    reset                                      清空 指令 全局设置
    defaults                                   查看 指令 全局设置

  示例
    $ 指令                                      查看当前帮助说明
```

#### 使用案例一

场景描述，也可标题即场景
指令示例
动图演示

......

#### 使用案例二

场景描述，也可标题即场景
指令示例
动图演示

......

#### 使用案例三

场景描述，也可标题即场景
指令示例
动图演示

......

最佳实践...

## 安装

[![Node Version Badge][node version badge]][download node.js] ![esm][esm]

安装前准备、配置等

### NPM

```shell
npm i 包名 --global
```

### PNPM

```shell
pnpm add 包名 --global
```

### Yarn

```shell
yarn global add 包名
```

上述都安装、配置好后，就可以顺利使用 "包名" 了。😃

## 参与贡献

![PRs Welcome][prs welcome badge]

## 其它

[包名] 使用 [生成器][生成器] 脚手架生成。

[esm]: https://img.shields.io/badge/ESM-brightgreen?style=flat
[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat

[包名]: #
[生成器]: #
-->

<!--

 ::::::::
:+:    :+:
      +:+
    +#+
  +#+
 #+#
##########

单 API 模块 README.md 基本结构

# api()

> 描述：是什么，做了什么，定义。

详细描述：场景，为什么，什么益处。

## 目录

- [使用](#使用)
- [安装](#安装)
  - [NPM](#npm)
  - [PNPM](#pnpm)
  - [Yarn](#yarn)
- [相关](#相关)
- [参与贡献](#参与贡献)
- [其它](#其它)

## 使用

- `参数` 描述 **选填** {类型} **默认值**
- 返回 {`Promise<String>`} 引用当前模块的脚本被调用时所在应用的根目录。

更复杂的参数描述，参见 https://github.com/iyowei/scan-dir/blob/main/README.md

```
import api from 'xxx';
```

怎么使用（好、坏甚至更多维度浮动的相对边界在哪里，以确保合情合理的使用），实现原理...

## 安装

标明支持的宿主、宿主版本，模块类型

![esm][esm] [![Node Version Badge][node version badge]][download node.js] ![browser][browser]

### NPM

```shell
npm add 包名
```

### PNPM

```shell
pnpm add 包名
```

### Yarn

```shell
yarn add 包名
```

## 相关

## 参与贡献

![PRs Welcome][prs welcome badge]

## 其它

[包名] 使用 [@iyowei/create-esm][create-esm] 脚手架生成。

[browser]: https://img.shields.io/badge/Browser-orange?style=flat
[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[esm]: https://img.shields.io/badge/ESM-brightgreen?style=flat
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[包名]: #
[create-esm]: https://github.com/iyowei/create-esm

-->

<!--

 ::::::::
:+:    :+:
       +:+
    +#++:
       +#+
#+#    #+#
 ########

多 API 模块 README 基本结构

# 包名

> 描述：是什么，做了什么，定义。

详细描述：场景，为什么，什么益处。

## 目录

- [使用](#使用)
  - [api1()](#api1)
  - [api2()](#api2)
  - [api3()](#api3)
- [API](#api)
  - [api1()](#api1-1)
  - [api2()](#api2-1)
  - [api3()](#api3-2)
- [安装](#安装)
  - [NPM](#npm)
  - [PNPM](#pnpm)
  - [Yarn](#yarn)
- [相关](#相关)
- [参与贡献](#参与贡献)
- [其它](#其它)

## 使用

### api1()

```
import { api1 } from 'xxx';
```

### api2()

```
import { api2 } from 'xxx';
```

### api3()

```
import { api3 } from 'xxx';
```

怎么使用（好、坏甚至更多维度浮动的相对边界在哪里，以确保合情合理的使用），实现原理...

## API

如果有多个方法的话。

### api1()

- `参数` 描述 **选填** {类型} **默认值**
- 返回 {`Promise<String>`} 引用当前模块的脚本被调用时所在应用的根目录。

### api2()

- `参数` 描述 **选填** {类型} **默认值**
- 返回，描述 { 类型 }
  - 设置了某个选项后返回的数据形态
  - **默认** 返回的数据形态

### api3()

- `参数` 描述 **选填** {类型} **默认值**
- 返回 { 类型 }
  - `error` 描述 {类型}
  - `message` 描述 {类型}

更复杂的参数描述，参见 https://github.com/iyowei/scan-dir/blob/main/README.md

## 安装

标明支持的宿主、宿主版本，模块类型

![esm][esm] [![Node Version Badge][node version badge]][download node.js] ![browser][browser]

### NPM

```shell
npm add 包名
```

### PNPM

```shell
pnpm add 包名
```

### Yarn

```shell
yarn add 包名
```

## 相关

## 参与贡献

![PRs Welcome][prs welcome badge]

## 其它

[包名] 使用 [@iyowei/create-esm][create-esm] 脚手架生成。

[browser]: https://img.shields.io/badge/Browser-orange?style=flat
[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[esm]: https://img.shields.io/badge/ESM-brightgreen?style=flat
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[包名]: #
[create-esm]: https://github.com/iyowei/create-esm

-->

<!--

    :::
   :+:
  +:+ +:+
 +#+  +:+
+#+#+#+#+#+
      #+#
      ###

更多文档细节，参考 https://github.com/iyowei/readme-templates
-->
