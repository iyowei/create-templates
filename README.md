# @iyowei/create-templates

> 统一提供模板，额外提供与模板紧密相关、有用的帮助函数。无论是创建 Cli、React、Node、Vue、Electron 等等之中的哪一个项目，都会需要用到模板，而这些模板文件也大都相同，小异可以维护在各自专门的脚手架中。

## 使用

- `copiers` 纯粹 “拷贝” 用图的文件
- `prints` 印刷模板，使用方式参见 [`lodash.template()`][lodash.template]
- `stockrooms` 第三方仓库，如：[github/gitignore]
- `writeGitignoreSync({ output, topics })` 串行方法，在指定位置生成包含指定主题内容的 .gitignore 文件
- `writeGitignore({ output, topics })` 异步方法，在指定位置生成包含指定主题内容的 .gitignore 文件

```js
import { log } from 'console';
import { copiers， prints， stockrooms， writeGitignoreSync } from '@iyowei/create-templates';

log(copiers);
```

> `copiers`、`prints`、`stockrooms`返回的都是文件路径。

## 安装

<!-- 标明支持的宿主、宿主版本，模块类型 -->

[![Node Version Badge][node version badge]][download node.js] ![esm][esm]

### NPM

```shell
npm add @iyowei/create-templates
```

### PNPM

```shell
pnpm add @iyowei/create-templates
```

### Yarn

```shell
yarn add @iyowei/create-templates
```

## 参与贡献

![PRs Welcome][prs welcome badge]

## 其它

"@iyowei/create-templates" 使用 [@iyowei/create-esm][create-esm] 脚手架生成。

[node version badge]: https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js
[download node.js]: https://nodejs.org/en/download/
[esm]: https://img.shields.io/badge/ESM-brightgreen?style=flat
[prs welcome badge]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat
[create-esm]: https://github.com/iyowei/create-esm
[github/gitignore]: https://github.com/github/gitignore
[lodash.template]: https://lodash.com/docs/4.17.15#template

<!-- 更多文档细节，参考 https://github.com/iyowei/readme-templates -->
