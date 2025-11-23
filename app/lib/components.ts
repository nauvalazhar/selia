import { readdir } from 'node:fs/promises';
import path from 'node:path';

export async function getComponents() {
  let componentsFolder = '../../components/selia';

  if (process.env.NODE_ENV === 'production') {
    componentsFolder = '../../../components/selia';
  }

  const components = await readdir(
    path.join(import.meta.dirname, componentsFolder),
  );

  return components;
}

export async function getPrevNextComponents(currentComponent: string) {
  const components = await getComponents();

  const currentIndex = components.indexOf(currentComponent);
  const prevComponent = components[currentIndex - 1];
  const nextComponent = components[currentIndex + 1];

  return { prevComponent, nextComponent };
}
