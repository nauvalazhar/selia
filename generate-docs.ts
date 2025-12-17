import { readdir, mkdir } from 'node:fs/promises';
import path from 'node:path';

const componentDescriptions = {
  'Alert Dialog': 'Some actions require confirmation from the user.',
  Avatar:
    'Display user profile pictures or initials in a circular or rounded format.',
  Badge: 'Small labels to highlight status, counts, or categories on elements.',
  Button: 'Trigger actions and events with clickable interactive elements.',
  Card: 'Flexible container for grouping related content with optional headers and footers.',
  Checkbox: 'Allow users to select multiple options from a set of choices.',
  Chip: 'Interactive compact elements for tags, filters, or selections.',
  Combobox:
    'Combined input and menu for selecting or entering values with autocomplete.',
  Dialog:
    'Modal windows that focus user attention on specific content or actions.',
  Divider: 'Visual separator to organize and divide content sections.',
  Menu: 'Reveal a list of actions or options when triggered by a button.',
  Field: 'Wrapper component for form inputs with label and validation support.',
  Fieldset:
    'Group related form controls with an optional legend or description.',
  Heading:
    'Hierarchical text elements to establish content structure and importance.',
  'Icon Box':
    'Container for displaying icons with consistent sizing and alignment.',
  'Input Group':
    'Combine inputs with add-ons like buttons, icons, or text labels.',
  Input: 'Single-line text field for user data entry and form submission.',
  Item: 'Versatile component for combining media, text, and actions in flexible layouts.',
  Kbd: 'Display keyboard shortcuts and commands in a distinctive style.',
  Label:
    'Text descriptions that identify and provide context for form controls.',
  Pagination:
    'Navigate through pages of content with numbered or directional controls.',
  Popover:
    'Display additional content in a floating overlay near a trigger element.',
  Progress: 'Visual indicators showing task completion or loading status.',
  Radio: 'Allow users to select a single option from a set of choices.',
  Select: 'Menu menu for choosing single option from a list.',
  Separator:
    'Dividing element to create visual distinction between content groups.',
  Sidebar:
    'Flexible panel component for navigation or content with customizable positioning.',
  Slider: 'Interactive control for selecting values within a defined range.',
  Spinner: 'Animated loading indicator to show ongoing processes.',
  Stack:
    'Layout component for arranging elements vertically or horizontally with spacing.',
  Switch: 'Toggle control for binary on/off states and settings.',
  Table: 'Organize and display data in rows and columns in a tabular format.',
  Tabs: 'Switch between different content panels within the same context area.',
  Text: 'Basic text component with built-in styling and semantic variants.',
  Textarea: 'Multi-line text input for longer content and descriptions.',
  Toast: 'Brief notification messages that appear temporarily at screen top.',
  Tooltip:
    'Contextual hints that appear on hover to explain interface elements.',
};

function humanName(name: string) {
  // replace - with space and capitalize each first letter of the word
  return name
    .replace(/-/g, ' ')
    .replace('.mdx', '')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

async function main() {
  const components = await readdir(
    path.join(import.meta.dirname, 'components/selia'),
  );

  for (const component of components) {
    const componentName = component.replace('.tsx', '.mdx');
    const componentSource = `# ${humanName(componentName)}\n\n${componentDescriptions[humanName(componentName) as keyof typeof componentDescriptions]}`;
    const exampleSource = `import React from 'react';

export const examples = {};`;

    // skip if exists
    if (
      await Bun.file(
        path.join(import.meta.dirname, 'app/routes', `docs.${componentName}`),
      ).exists()
    ) {
      console.log(`${componentName} already exists`);
      continue;
    }

    // create file
    await Bun.write(
      path.join(import.meta.dirname, 'app/routes', `docs.${componentName}`),
      componentSource,
    );

    // create folder if not exists
    await mkdir(
      path.join(
        import.meta.dirname,
        'components/examples',
        componentName.replace('.mdx', ''),
      ),
      { recursive: true },
    );

    // create file
    await Bun.write(
      path.join(
        import.meta.dirname,
        'components/examples',
        componentName.replace('.mdx', ''),
        'index.ts',
      ),
      exampleSource,
    );
  }
}

main();
