export const examples = {
  'alert-dialog': () => import('./alert-dialog').then((m) => m.examples),
  alert: () => import('./alert').then((m) => m.examples),
};

export type ExampleName = keyof typeof examples;

export const exampleNames = Object.keys(examples) as ExampleName[];
