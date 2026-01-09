import { Tabs, TabsItem, TabsList, TabsPanel } from 'components/selia/tabs';
import { CodeTabs, CodeTabsPanel } from './code-tabs';
import { PreviewCode } from 'components/preview';
import { Link } from 'react-router';
import React from 'react';
import { useTabsStore } from '~/lib/tabs-store';

export function Installation({
  name,
  source,
  dependencies,
}: {
  name: string;
  source: string;
  dependencies?: string[];
}) {
  const activeTab = useTabsStore((state) => state.activeTab['installation']);
  const setActiveTab = useTabsStore((state) => state.setActiveTab);

  let depElements: React.ReactNode = null;
  if (dependencies && dependencies.length > 0) {
    depElements = dependencies.map((dep, i) => {
      const isLast = i === dependencies.length - 1;
      const isPenultimate = i === dependencies.length - 2;
      return (
        <React.Fragment key={dep}>
          <Link
            to={`/docs/${dep.toLowerCase()}`}
            className="border-b text-white"
          >
            {dep}
          </Link>
          {dependencies.length === 1
            ? ' component'
            : isPenultimate
              ? ' and '
              : !isLast
                ? ', '
                : ' components'}
        </React.Fragment>
      );
    });
  }

  return (
    <>
      <Tabs
        value={activeTab || 'cli'}
        onValueChange={(value) => setActiveTab('installation', value)}
      >
        <TabsList className="*:flex-1 w-44 *:rounded-full rounded-full mb-2 mt-4">
          <TabsItem value="cli">CLI</TabsItem>
          <TabsItem value="manual">Manual</TabsItem>
        </TabsList>
        <TabsPanel value="cli">
          <p className="mb-6 leading-6.5">
            Add the component to your project using the following command:
          </p>
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
          </CodeTabs>
        </TabsPanel>
        <TabsPanel value="manual">
          {dependencies && (
            <p className="mb-6 leading-6.5">
              This component requires the {depElements} to be installed.
            </p>
          )}
          <p className="mb-6 leading-6.5">
            Add the component to your project manually:
          </p>
          <PreviewCode title={`${name}.tsx`}>{source}</PreviewCode>
          <p className="mb-6 leading-6.5 mt-6">
            Do not forget to update the import path in the component. Consult
            the{' '}
            <Link
              to="/docs/installation/manual#add-component-manually"
              className="border-b text-white"
            >
              manual installation
            </Link>{' '}
            guide for more information.
          </p>
        </TabsPanel>
      </Tabs>
    </>
  );
}
