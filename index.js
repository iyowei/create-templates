import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const TPL_DIR = join(dirname(fileURLToPath(import.meta.url)), 'src');

export default function createTemplates() {
  const copiers = [
    join(TPL_DIR, '.vscode'),
    join(TPL_DIR, '.editorconfig'),
    join(TPL_DIR, '.prettierrc'),
  ];

  const prints = {
    readme: join(TPL_DIR, 'README.md'),
    npmrc: join(TPL_DIR, '.npmrc'),
  };

  const stockrooms = {
    gitignore: join(TPL_DIR, 'gitignore'),
  };

  return { copiers, prints, stockrooms };
}
