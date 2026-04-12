import { Command } from 'commander';
import { fetchDoc, fetchDocsIndex } from '~/lib/fetch-doc';
import { resolveRegistry } from '~/lib/resolve-registry';

export const docsCommand = new Command()
  .name('docs')
  .description('View documentation for components and guides')
  .argument('[name]', 'Documentation topic (e.g. button, customization)')
  .option('-l, --list', 'List all available documentation topics')
  .action(async (name: string | undefined, options) => {
    try {
      const { runtimeUrl: registryUrl } = await resolveRegistry(process.cwd());

      if (options.list || !name) {
        const index = await fetchDocsIndex(registryUrl);
        if (!name) {
          console.log('Available documentation topics:\n');
        }
        for (const doc of index.docs) {
          console.log(doc.name);
        }
        return;
      }

      // Normalize slashes to dots for nested docs (e.g. installation/next -> installation.next)
      const normalizedName = name.replace(/\//g, '.');

      const doc = await fetchDoc(registryUrl, normalizedName);
      console.log(doc.content);
    } catch (error) {
      console.error(
        error instanceof Error ? error.message : 'An unknown error occurred',
      );
      process.exit(1);
    }
  });
