export function componentName(name: string) {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace('.tsx', '').replace(/-/g, ' ').replace('.mdx', '')
  );
}
