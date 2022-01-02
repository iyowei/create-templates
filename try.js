import { log } from 'console';
import { join } from 'path';

import {
  copiers,
  prints,
  stockrooms,
  writeGitignore,
  writeGitignoreSync,
  writeNpmRc,
  writeNpmRcSync,
} from './index.js';

log(stockrooms);

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

// (async () => {
//   await writeGitignore({
//     output: join(process.cwd(), '.gitignore'),
//     topics: [
//       'macOS',
//       'Windows',
//       'Linux',
//       'Node',
//       'VisualStudioCode',
//       'SublimeText',
//       'CVS',
//       'Diff',
//       'Vim',
//       'TortoiseGit',
//     ],
//   });
// })();

// writeNpmRcSync({
//   output: join(process.cwd(), '.npmrc'),
//   data: { namespace: 'iyowei' },
// });

// (async () => {
//   await writeNpmRc({
//     output: join(process.cwd(), '.npmrc'),
//     data: { namespace: '' },
//   });
// })();
