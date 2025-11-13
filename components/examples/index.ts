export const examples = {
  alert: () => import('./alert').then((m) => m.examples),
};

export type ExampleName = keyof typeof examples;

export const exampleNames = Object.keys(examples) as ExampleName[];
