// prepend-use-client.js
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const COMPONENTS_DIR = './components/selia';
const USE_CLIENT = "'use client';\n\n";

async function getAllFiles(dir) {
  const files = [];

  async function scan(currentDir) {
    const entries = await readdir(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);

      if (entry.isDirectory()) {
        await scan(fullPath);
      } else if (entry.isFile() && /\.(jsx?|tsx?)$/.test(entry.name)) {
        files.push(fullPath);
      }
    }
  }

  await scan(dir);
  return files;
}

async function prependUseClient(filePath) {
  const content = await readFile(filePath, 'utf-8');

  // Skip kalau udah ada 'use client'
  if (
    content.trim().startsWith("'use client'") ||
    content.trim().startsWith('"use client"')
  ) {
    console.log(`⏭️  Skip: ${filePath} (sudah ada 'use client')`);
    return;
  }

  // Prepend 'use client'
  const newContent = USE_CLIENT + content;
  await writeFile(filePath, newContent, 'utf-8');
  console.log(`✅ Updated: ${filePath}`);
}

async function main() {
  try {
    console.log(`🔍 Scanning ${COMPONENTS_DIR}...`);
    const files = await getAllFiles(COMPONENTS_DIR);

    console.log(`📝 Found ${files.length} files\n`);

    for (const file of files) {
      await prependUseClient(file);
    }

    console.log(`\n✨ Done!`);
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

main();
