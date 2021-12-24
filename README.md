# @iyowei/create-templates

> 统一提供模板，额外提供与模板紧密相关、有用的帮助函数。无论是创建 Cli、React、Node、Vue、Electron 等等之中的哪一个项目，都会需要用到模板，而这些模板文件也大都相同，小异可以维护在各自专门的脚手架中。

## 使用

### `copiers`

- 返回 { Array } 纯粹 “拷贝” 用途的模板文件。

```js
import { log } from 'console';
import { copiers } from '@iyowei/create-templates';

log(copiers);

/**
 * [
 *   '/Users/iyowei/Development/iyowei/create-templates/src/.vscode',
 *   '/Users/iyowei/Development/iyowei/create-templates/src/.editorconfig',
 *   ...
 * ]
 */
```

### `prints`

- 返回 { Object } 印刷模板，使用方式参见 [`lodash.template()`][lodash.template]。

```js
import { log } from 'console';
import { prints } from '@iyowei/create-templates';

log(prints);

/**
 * {
 *   readme: '/Users/iyowei/Development/iyowei/create-templates/src/README.md',
 *   npmrc: '/Users/iyowei/Development/iyowei/create-templates/src/.npmrc',
 *   ...
 * }
 */
```

### `stockrooms`

- 返回 { Object } 第三方仓库，如：[github/gitignore][github/gitignore]。

```js
import { log } from 'console';
import { stockrooms } from '@iyowei/create-templates';

log(stockrooms);

/**
 * {
 *   gitignore: '/Users/iyowei/Development/iyowei/create-templates/src/gitignore',
 *   ...
 * }
 */
```

### `writeGitignoreSync({ output, topics })`

在指定位置生成包含指定主题内容的 .gitignore 文件。

- `output` { String } 输出位置，包含输出文件名，例如：`/Users/iyowei/Development/iyowei/.gitignore`
- `topics` { Array | String } [github/gitignore][github/gitignore] 里模板文件的文件名，单个或者集合

```js
import { writeGitignoreSync } from '@iyowei/create-templates';

writeGitignoreSync({
  output: join(process.cwd(), '.gitignore'),
  topics: [
    'macOS',
    'Windows',
    'Linux',
    'Node',
    'VisualStudioCode',
    'SublimeText',
    'CVS',
    'Diff',
    'Vim',
    'TortoiseGit',
  ],
});
```

### `writeGitignore({ output, topics })`

异步方法，在指定位置生成包含指定主题内容的 .gitignore 文件。

- `output` { String } 输出位置，包含输出文件名，例如：`/Users/iyowei/Development/iyowei/.gitignore`
- `topics` { Array | String } [github/gitignore][github/gitignore] 里模板文件的文件名，单个或者集合

```js
import { writeGitignore } from '@iyowei/create-templates';

(async () => {
  await writeGitignore({
    output: join(process.cwd(), '.gitignore'),
    topics: [
      'macOS',
      'Windows',
      'Linux',
      'Node',
      'VisualStudioCode',
      'SublimeText',
      'CVS',
      'Diff',
      'Vim',
      'TortoiseGit',
    ],
  });
})();
```

### `writeNpmRcSync({ output, data })`

串行方法，在指定位置生成 .npmrc 文件。

- `output` { String } 输出位置，包含输出文件名，例如：`/Users/iyowei/Development/iyowei/.npmrc`
- `data` { Object} 用来填充[模板][lodash.template]的数据

```js
import { writeNpmRcSync } from '@iyowei/create-templates';

writeNpmRcSync({
  output: join(process.cwd(), '.npmrc'),
  data: { namespace: 'iyowei' },
});
```

### `writeNpmRc({ output, data })`

异步方法，在指定位置生成 .npmrc 文件。

- `output` { String } 输出位置，包含输出文件名，例如：`/Users/iyowei/Development/iyowei/.npmrc`
- `data` { Object} 用来填充[模板][lodash.template]的数据

```js
import { writeNpmRc } from '@iyowei/create-templates';

(async () => {
  await writeNpmRc({
    output: join(process.cwd(), '.npmrc'),
    data: { namespace: '' },
  });
})();
```

### `writeReadmeSync({ output, data })`

串行方法，在指定位置生成 README.md 文件。

- `output` { String } 输出位置，包含输出文件名，例如：`/Users/iyowei/Development/iyowei/README.md`
- `data` { Object} 用来填充[模板][lodash.template]的数据

```js
import { writeReadmeSync } from '@iyowei/create-templates';

writeReadmeSync({
  output: join(process.cwd(), 'README.md'),
  data: {
    name: 'iyowei',
    description: 'balabala...',
  },
});
```

### `writeReadme({ output, data })`

异步方法，在指定位置生成 README.md 文件。

- `output` { String } 输出位置，包含输出文件名，例如：`/Users/iyowei/Development/iyowei/README.md`
- `data` { Object} 用来填充[模板][lodash.template]的数据

```js
import { writeReadme } from '@iyowei/create-templates';

(async () => {
  await writeReadme({
    output: join(process.cwd(), 'README.md'),
    data: {
      name: 'iyowei',
      description: 'balabala...',
    },
  });
})();
```

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
