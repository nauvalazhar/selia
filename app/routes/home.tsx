import type { Route } from './+types/home';
import { codeToHtml } from 'shiki';
import { Code, Strong, Text, TextLink } from 'components/selia/text';
import { Fragment, useState } from 'react';
import { Divider, DividerText } from 'components/selia/divider';
import { Heading } from 'components/selia/heading';
import { Preview } from 'components/preview';
import { registry } from 'components/registry';

export async function loader() {
  const sources: Record<string, string> = {};

  for (const { name, examples } of Object.values(registry)) {
    for (const { name: exampleName, path } of examples) {
      const source = await Bun.file(path).text();
      sources[path] = await codeToHtml(source, {
        lang: 'tsx',
        theme: 'tokyo-night',
      });
    }
  }

  return { sources };
}

export default function Home({
  loaderData: { sources },
}: Route.ComponentProps) {
  const [pending, setPending] = useState(false);

  return (
    <>
      <title>Selia UI</title>
      <div className="container mx-auto py-14 max-sm:px-4">
        <div className="w-full lg:w-6/12 mx-auto">
          <Heading>Selia UI</Heading>
          <Text className="text-xl mt-2">
            A beautiful component library for your React applications.
          </Text>
          <Divider className="my-6" />

          <Heading size="md" className="mb-4">
            Alerts
          </Heading>
          {registry.alert.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4">
            Avatars
          </Heading>
          {registry.avatar.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Buttons
          </Heading>
          {registry.button.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Cards
          </Heading>
          {registry.card.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Checkbox
          </Heading>
          {registry.checkbox.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Checkbox Group
          </Heading>
          {registry.checkboxGroup.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Chip
          </Heading>
          {registry.chip.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Divider
          </Heading>
          {registry.divider.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Field
          </Heading>
          {registry.field.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Text>
            You can find other components like <Code>Select</Code>,{' '}
            <Code>Textarea</Code>, <Code>Checkbox</Code>, <Code>Radio</Code>,
            and more throughout this documentation.
          </Text>

          <Heading size="md" className="mb-4 mt-24">
            Heading
          </Heading>
          {registry.heading.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}
          <Text>
            Heading <Code>lg</Code> will render as <Code>h1</Code>,{' '}
            <Code>md</Code> as <Code>h2</Code>, and <Code>sm</Code> as{' '}
            <Code>h3</Code> by default. However, you can override this by
            passing the <Code>level</Code> prop from 1 to 6.
          </Text>

          <Heading size="md" className="mb-4 mt-24">
            Input
          </Heading>
          {registry.input.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Radio
          </Heading>
          {registry.radio.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Select
          </Heading>
          {registry.select.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          <Heading size="md" className="mb-4 mt-24">
            Text
          </Heading>
          {registry.text.examples.map(
            ({ name, component: Component, path }) => (
              <Preview key={name} title={name} source={sources[path]}>
                <Component />
              </Preview>
            ),
          )}

          {registry.blocks.examples.map(
            ({ name, component: Component, path }) => (
              <Fragment key={name}>
                <Heading size="md" className="mb-4 mt-24">
                  {name}
                </Heading>
                <Preview key={name} title={name} source={sources[path]}>
                  <Component />
                </Preview>
              </Fragment>
            ),
          )}
        </div>
      </div>
    </>
  );
}
