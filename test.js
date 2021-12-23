import { join } from 'path';
import { writeGitignore, writeGitignoreSync } from './index.js';

// writeGitignoreSync({
//   output: join(process.cwd(), '.gitignore'),
//   topics: [
//     'macOS',
//     'Windows',
//     'Linux',
//     'Node',
//     'VisualStudioCode',
//     'SublimeText',
//     'CVS',
//     'Diff',
//     'Vim',
//     'TortoiseGit',
//   ],
// });

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
