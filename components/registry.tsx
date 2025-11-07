import React from 'react';

export const registry = {
  alert: {
    name: 'Alert',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/alert-example.tsx',
        component: React.lazy(() =>
          import('./examples/alert-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Light Variant',
        path: 'components/examples/alert-light-example.tsx',
        component: React.lazy(() =>
          import('./examples/alert-light-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Alert with Action',
        path: 'components/examples/alert-action-example.tsx',
        component: React.lazy(() =>
          import('./examples/alert-action-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  avatar: {
    name: 'Avatar',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/avatar-example.tsx',
        component: React.lazy(() =>
          import('./examples/avatar-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Initials',
        path: 'components/examples/avatar-initial-example.tsx',
        component: React.lazy(() =>
          import('./examples/avatar-initial-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Indicator',
        path: 'components/examples/avatar-indicator-example.tsx',
        component: React.lazy(() =>
          import('./examples/avatar-indicator-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  button: {
    name: 'Button',
    examples: [
      {
        name: 'Variants',
        path: 'components/examples/button-example.tsx',
        component: React.lazy(() =>
          import('./examples/button-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Sizes',
        path: 'components/examples/button-size-example.tsx',
        component: React.lazy(() =>
          import('./examples/button-size-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Block',
        path: 'components/examples/button-block-example.tsx',
        component: React.lazy(() =>
          import('./examples/button-block-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Pill',
        path: 'components/examples/button-pill-example.tsx',
        component: React.lazy(() =>
          import('./examples/button-pill-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Progress',
        path: 'components/examples/button-progress-example.tsx',
        component: React.lazy(() =>
          import('./examples/button-progress-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Icons',
        path: 'components/examples/button-icon-example.tsx',
        component: React.lazy(() =>
          import('./examples/button-icon-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Icon with Progress',
        path: 'components/examples/button-icon-progress-example.tsx',
        component: React.lazy(() =>
          import('./examples/button-icon-progress-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  card: {
    name: 'Card',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/card-example.tsx',
        component: React.lazy(() =>
          import('./examples/card-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Card with Description and Footer',
        path: 'components/examples/card-description-example.tsx',
        component: React.lazy(() =>
          import('./examples/card-description-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Card with Actions',
        path: 'components/examples/card-action-example.tsx',
        component: React.lazy(() =>
          import('./examples/card-action-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  checkbox: {
    name: 'Checkbox',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/checkbox-example.tsx',
        component: React.lazy(() =>
          import('./examples/checkbox-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Checkbox with Label',
        path: 'components/examples/checkbox-label-example.tsx',
        component: React.lazy(() =>
          import('./examples/checkbox-label-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Checkbox with Label Alternate',
        path: 'components/examples/checkbox-label-alt-example.tsx',
        component: React.lazy(() =>
          import('./examples/checkbox-label-alt-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  checkboxGroup: {
    name: 'Checkbox Group',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/checkbox-group-example.tsx',
        component: React.lazy(() =>
          import('./examples/checkbox-group-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Checkbox Group Parent',
        path: 'components/examples/checkbox-group-parent-example.tsx',
        component: React.lazy(() =>
          import('./examples/checkbox-group-parent-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  chip: {
    name: 'Chip',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/chip-example.tsx',
        component: React.lazy(() =>
          import('./examples/chip-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  divider: {
    name: 'Divider',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/divider-example.tsx',
        component: React.lazy(() =>
          import('./examples/divider-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Divider with Text',
        path: 'components/examples/divider-text-example.tsx',
        component: React.lazy(() =>
          import('./examples/divider-text-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  field: {
    name: 'Field',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/field-example.tsx',
        component: React.lazy(() =>
          import('./examples/field-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Fieldset',
        path: 'components/examples/fieldset-example.tsx',
        component: React.lazy(() =>
          import('./examples/fieldset-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  heading: {
    name: 'Heading',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/heading-example.tsx',
        component: React.lazy(() =>
          import('./examples/heading-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  input: {
    name: 'Input',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/input-example.tsx',
        component: React.lazy(() =>
          import('./examples/input-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'File',
        path: 'components/examples/input-file-example.tsx',
        component: React.lazy(() =>
          import('./examples/input-file-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Input Disabled',
        path: 'components/examples/input-disable-example.tsx',
        component: React.lazy(() =>
          import('./examples/input-disable-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  radio: {
    name: 'Radio',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/radio-example.tsx',
        component: React.lazy(() =>
          import('./examples/radio-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  select: {
    name: 'Select',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/select-example.tsx',
        component: React.lazy(() =>
          import('./examples/select-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Select with Icons',
        path: 'components/examples/select-icon-example.tsx',
        component: React.lazy(() =>
          import('./examples/select-icon-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Select with Custom Render',
        path: 'components/examples/select-render-example.tsx',
        component: React.lazy(() =>
          import('./examples/select-render-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Select with Grouped Options',
        path: 'components/examples/select-group-example.tsx',
        component: React.lazy(() =>
          import('./examples/select-group-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  text: {
    name: 'Text',
    examples: [
      {
        name: 'Basic',
        path: 'components/examples/text-example.tsx',
        component: React.lazy(() =>
          import('./examples/text-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Strong',
        path: 'components/examples/text-strong-example.tsx',
        component: React.lazy(() =>
          import('./examples/text-strong-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Links',
        path: 'components/examples/text-link-example.tsx',
        component: React.lazy(() =>
          import('./examples/text-link-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
  blocks: {
    name: 'Block Examples',
    examples: [
      {
        name: 'Login Card',
        path: 'components/examples/login-example.tsx',
        component: React.lazy(() =>
          import('./examples/login-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
      {
        name: 'Team Members Card',
        path: 'components/examples/team-card-example.tsx',
        component: React.lazy(() =>
          import('./examples/team-card-example').then((mod) => ({
            default: mod.default,
          })),
        ),
      },
    ],
  },
};
