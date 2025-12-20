import ts from 'typescript';

export function componentName(name: string) {
  return (
    name.charAt(0).toUpperCase() +
    name.slice(1).replace('.tsx', '').replace(/-/g, ' ').replace('.mdx', '')
  );
}

export function extractComponents(source: string) {
  const file = ts.createSourceFile(
    'component.tsx',
    source,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );

  const components: Record<string, any> = {};

  function visit(node: ts.Node) {
    // export function Card() {}
    if (
      ts.isFunctionDeclaration(node) &&
      node.name &&
      node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      const name = node.name.text;

      const spec: any = {
        props: {},
      };

      // ---- extract props type ----
      const param = node.parameters[0];
      if (param?.type && ts.isIntersectionTypeNode(param.type)) {
        param.type.types.forEach((t) => {
          // VariantProps<typeof cardVariants>
          if (
            ts.isTypeReferenceNode(t) &&
            t.typeName.getText() === 'VariantProps'
          ) {
            spec.props.variant = {
              name: 'variant',
              options: [],
            };
          }
        });
      }

      // ---- extract JSX root element ----
      node.body?.statements.forEach((stmt) => {
        if (
          ts.isReturnStatement(stmt) &&
          stmt.expression &&
          ts.isJsxElement(stmt.expression)
        ) {
          const opening = stmt.expression.openingElement;
          spec.type = opening.tagName.getText();
        }

        if (
          ts.isReturnStatement(stmt) &&
          stmt.expression &&
          ts.isJsxSelfClosingElement(stmt.expression)
        ) {
          spec.type = stmt.expression.tagName.getText();
        }
      });

      components[name] = spec;
    }

    ts.forEachChild(node, visit);
  }

  visit(file);

  return components;
}
