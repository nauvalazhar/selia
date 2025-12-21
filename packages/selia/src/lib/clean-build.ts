import fs from 'fs/promises';

export async function cleanBuild(output: string) {
  await fs.rm(output, { recursive: true, force: true }).catch(() => {});

  await fs.mkdir(output, { recursive: true }).catch(() => {});
}
