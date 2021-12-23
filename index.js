import { writeFileSync, writeFile } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { fastGitignore, fastGitignoreSync } from '@iyowei/fast-gitignore';

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

export function writeGitignoreSync({ output, topics }) {
  const got = fastGitignoreSync({
    topic: topics,
    templatesDir: stockrooms.gitignore,
  });

  writeFileSync(output, Object.values(got).join('\n\n\n'));
}

export function writeGitignore({ output, topics }) {
  return new Promise((resolve, reject) => {
    fastGitignore({
      topic: topics,
      templatesDir: stockrooms.gitignore,
    }).then((data) => {
      writeFile(output, Object.values(data).join('\n\n\n'), (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(true);
      });
    });
  });
}
