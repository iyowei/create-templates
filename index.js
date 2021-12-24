import { writeFileSync, writeFile, readFile, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import template from 'lodash.template';
import { fastGitignore, fastGitignoreSync } from '@iyowei/fast-gitignore';

const TPL_DIR = join(dirname(fileURLToPath(import.meta.url)), 'src');

export const copiers = {
  common: [
    join(TPL_DIR, '.vscode'),
    join(TPL_DIR, '.editorconfig'),
    join(TPL_DIR, '.prettierrc'),
  ],
  esm: [join(TPL_DIR, 'esm/.eslintrc.json')],
};

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
    }).then(
      (data) => {
        writeFile(output, Object.values(data).join('\n\n\n'), (err) => {
          if (err) {
            reject(err);
            return;
          }

          resolve(true);
        });
      },
      (err) => {
        reject(err);
      },
    );
  });
}

export function writeNpmRcSync({ output, data }) {
  printSync({
    data,
    outputPath: output,

    templatePath: prints.npmrc,
  });
}

export function writeNpmRc({ output, data }) {
  return new Promise((resolve, reject) => {
    print({
      data,
      outputPath: output,

      templatePath: prints.npmrc,
    }).then(
      (payload) => {
        resolve(payload);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

export function writeReadmeSync({ output, data }) {
  printSync({
    data,
    outputPath: output,

    templatePath: prints.readme,
  });
}

export function writeReadme({ output, data }) {
  return new Promise((resolve, reject) => {
    print({
      data,
      outputPath: output,

      templatePath: prints.readme,
    }).then(
      (payload) => {
        resolve(payload);
      },
      (err) => {
        reject(err);
      },
    );
  });
}

export function printSync({ outputPath, templatePath, data, options = {} }) {
  writeFileSync(
    outputPath,
    template(readFileSync(templatePath, { encoding: 'utf-8' }), options)(data),
  );
}

export function print({ outputPath, templatePath, data, options = {} }) {
  return new Promise((resolve, reject) => {
    readFile(templatePath, 'utf-8', (err, tpl) => {
      if (err) {
        reject(err);
        return;
      }

      const compiled = template(tpl)(data);

      writeFile(outputPath, compiled, (err) => {
        if (err) {
          reject(err);
          return;
        }

        resolve(true);
      });
    });
  });
}
