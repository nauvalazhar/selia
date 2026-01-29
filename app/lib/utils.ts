import path from 'node:path';
import { blocks } from 'components/blocks';

export function componentName(name: string) {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace('.tsx', '').replace(/-/g, ' ').replace('.mdx', '')
  );
}

export const categoryIcons: Record<string, string> = {
  Chat: 'MessageCircle',
  Sidebar: 'Menu',
  Profile: 'User',
  Forms: 'FileText',
  Dashboard: 'LayoutDashboard',
};

export async function processIncludes(
  source: string,
  basePath: string,
  maxDepth: number = 5,
  currentDepth: number = 0,
): Promise<string> {
  if (currentDepth >= maxDepth) {
    throw new Error('Max include depth reached (circular reference?)');
  }

  // Regex untuk match @include "path" key="value" key2="value2"
  const includeRegex = /@include\s+["']([^"']+)["']([^\n]*)/g;

  let processed = source;
  const matches = [...source.matchAll(includeRegex)];

  for (const match of matches) {
    const [fullMatch, filePath, argsString] = match;

    try {
      let includeContent = await Bun.file(path.join(basePath, filePath)).text();

      // Parse key="value" pairs
      const vars: Record<string, string> = {};
      const argRegex = /(\w+)=["']([^"']+)["']/g;
      let argMatch;

      while ((argMatch = argRegex.exec(argsString)) !== null) {
        vars[argMatch[1]] = argMatch[2];
      }

      // Replace [[var]] dengan value
      includeContent = replaceVariables(includeContent, vars);

      // Recursively process nested includes
      const processedInclude = await processIncludes(
        includeContent,
        basePath,
        maxDepth,
        currentDepth + 1,
      );

      processed = processed.replace(fullMatch, processedInclude);
    } catch (error) {
      console.error(`Failed to include ${filePath}:`, error);
      // Optional: replace dengan error message
      // processed = processed.replace(fullMatch, `<!-- Error including ${filePath} -->`);
    }
  }

  return processed;
}

export function replaceVariables(
  content: string,
  vars: Record<string, string>,
): string {
  let result = content;

  // Replace [[varName:defaultValue]] atau [[varName]]
  const varRegex = /\[\[(\w+)(?::([^\]]+))?\]\]/g;

  result = result.replace(varRegex, (match, key, defaultValue) => {
    // Kalau ada value dari vars, pakai itu
    if (vars[key] !== undefined) {
      return vars[key];
    }
    // Kalau gak ada value tapi ada default, pakai default
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    // Kalau keduanya gak ada, keep as is (atau bisa throw warning)
    console.warn(`Variable [[${key}]] not found and no default value provided`);
    return match;
  });

  return result;
}

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, '-');
}

export function slugToCategory(slug: string): string {
  const categories = [...new Set(Object.values(blocks).map((b) => b.category))];
  return categories.find((c) => categoryToSlug(c) === slug) || '';
}
