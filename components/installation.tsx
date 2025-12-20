import { CodeTabs, CodeTabsPanel } from './code-tabs';

export function Installation({ name }: { name: string }) {
  return (
    <CodeTabs items={['npx', 'pnpx', 'bunx']}>
      <CodeTabsPanel value="npx" language="bash">
        {`npx selia add ${name}`}
      </CodeTabsPanel>
      <CodeTabsPanel value="pnpx" language="bash">
        {`pnpx selia add ${name}`}
      </CodeTabsPanel>
      <CodeTabsPanel value="bunx" language="bash">
        {`bunx selia add ${name}`}
      </CodeTabsPanel>
    </CodeTabs>
  );
}
