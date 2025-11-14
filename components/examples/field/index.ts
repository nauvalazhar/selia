import React from 'react';

export const examples = {
  basic: {
      name: 'Basic',
      path: 'components/examples/field/basic.tsx',
      component: React.lazy(() =>
        import('./basic').then((mod) => ({
          default: mod.default,
        })),
      ),
    },
  fieldset: {
      name: 'Fieldset',
      path: 'components/examples/field/fieldset.tsx',
      component: React.lazy(() =>
        import('./fieldset').then((mod) => ({
          default: mod.default,
        })),
      ),
    },
};
