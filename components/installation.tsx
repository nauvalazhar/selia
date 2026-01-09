import { CodeTabs, CodeTabsPanel } from './code-tabs';

export function Installation({ name }: { name: string }) {
  return (
    <>
      <p>Add the component to your project using the following command:</p>
      <CodeTabs items={['npm', 'pnpm', 'yarn', 'bun']} id="pm">
        <CodeTabsPanel value="npm" language="bash">
          {`npx selia@latest add ${name}`}
        </CodeTabsPanel>
        <CodeTabsPanel value="pnpm" language="bash">
          {`pnpx selia@latest add ${name}`}
        </CodeTabsPanel>
        <CodeTabsPanel value="yarn" language="bash">
          {`yarn selia@latest add ${name}`}
        </CodeTabsPanel>
        <CodeTabsPanel value="bun" language="bash">
          {`bunx selia@latest add ${name}`}
        </CodeTabsPanel>
      </CodeTabs>{' '}
    </>
  );
}
