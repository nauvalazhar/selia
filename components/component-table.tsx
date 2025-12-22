import { cn } from 'lib/utils';
import { Tooltip, TooltipPopup, TooltipTrigger } from './selia/tooltip';

type PropSpec = {
  name: string;
  options: string[];
  default?: string;
};

type ComponentSpec = {
  description: React.ReactNode;
  required?: boolean;
  type?: string;
  source?: {
    label: string;
    href: string;
  };
  props?: Record<string, PropSpec>;
};

type ComponentDocSpec = Record<string, ComponentSpec>;
type Props = {
  components: ComponentDocSpec;
};

export function ComponentTable({ components }: Props) {
  return (
    <section className="flex flex-col border border-border rounded-3xl">
      {Object.entries(components).map(([name, spec]) => (
        <div
          key={name}
          className="border-b border-separator last:border-none first:*:[h3]:rounded-t-[calc(var(--radius-3xl)-1px)]"
        >
          <h3 className="px-4 py-2 bg-accent/40 h-12 flex items-center border-b border-separator font-semibold">
            <span className="font-mono text-sm">&lt;{name}&gt;</span>
            {spec.required && (
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-danger ml-1 cursor-help">*</span>
                </TooltipTrigger>
                <TooltipPopup>This component must be present.</TooltipPopup>
              </Tooltip>
            )}
          </h3>
          <div className="p-4">
            <div
              className={cn(
                'text-muted [&_code]:before:content-["`"] [&_code]:after:content-["`"] [&_code]:text-foreground space-y-1',
              )}
            >
              <p>{spec.description}</p>
              {spec.type && (
                <p>
                  This component extends the JSX <code>{spec.type}</code>{' '}
                  element.
                </p>
              )}

              {spec.source && (
                <div className="text-sm">
                  Base behavior is provided by{' '}
                  <a
                    href={spec.source.href}
                    className="underline underline-offset-2"
                  >
                    {spec.source.label}
                  </a>
                  . Refer to its documentation for the full API.
                </div>
              )}
            </div>

            {spec.props && (
              <div className="mt-6">
                <div className="grid grid-cols-3 lg:grid-cols-[120px_120px_1fr] lg:gap-3 border-b border-separator pb-2 font-medium text-muted text-sm">
                  <div>Name</div>
                  <div>Default</div>
                  <div>Options</div>
                </div>

                <div>
                  {Object.entries(spec.props).map(([key, prop]) => (
                    <div
                      key={key}
                      className="grid grid-cols-3 lg:grid-cols-[120px_120px_1fr] lg:gap-3 border-b border-separator py-4 last:pb-0 last:border-none font-mono text-sm"
                    >
                      <div className="font-medium text-foreground">`{key}`</div>
                      <div className="text-foreground font-medium">
                        {prop.default ? `\`${prop.default}\`` : '—'}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {prop.options.map((opt) => (
                          <span
                            key={opt}
                            className="text-foreground font-medium"
                          >
                            `{opt}`
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}
