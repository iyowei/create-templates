import { writeFileSync, writeFile } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import fastGitignore from '@iyowei/fast-gitignore';

const TPL_DIR = join(dirname(fileURLToPath(import.meta.url)), 'src');

export const copiers = [
  join(TPL_DIR, '.vscode'),
  join(TPL_DIR, '.editorconfig'),
  join(TPL_DIR, '.prettierrc'),
];

export const prints = {
  readme: join(TPL_DIR, 'README.md'),
  npmrc: join(TPL_DIR, '.npmrc'),
};

export const stockrooms = {
  gitignore: join(TPL_DIR, 'gitignore'),
};

// // TODO: @iyowei/fast-gitignore 需提供串行方法
// export function writeGitignoreSync({ output, topics }) {
//   writeFileSync(
//     output,
//     Object.values(
//       // TODO: 如果是仓库里所有的模板都要的话，设置 ignore 为空数组即是
//       await fastGitignore({
//         ignore: topics,
//         templatesDir: stockrooms.gitignore,
//       }),
//     ).join('\n\n\n'),
//   );
// }

export function writeGitignore({ output, topics }) {
  return new Promise((resolve, reject) => {
    writeFile(
      output,
      Object.values(
        // TODO: 如果是仓库里所有的模板都要的话，设置 ignore 为空数组即是
        await fastGitignore({
          ignore: topics,
          templatesDir: stockrooms.gitignore,
        }),
      ).join('\n\n\n'),
      (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(true);
      },
    );
  });
}
