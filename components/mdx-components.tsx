import { CopyButton } from 'components/copy-button';
import { cn } from 'lib/utils';

export default {
  h1: ({ children, ...props }: React.ComponentProps<'h1'>) => {
    return <h1 {...props}>{children}</h1>;
  },
  h2: ({ children, ...props }: React.ComponentProps<'h2'>) => {
    return <h2 {...props}>{children}</h2>;
  },
  h3: ({ children, ...props }: React.ComponentProps<'h3'>) => {
    return <h3 {...props}>{children}</h3>;
  },
  pre: ({ children, ...props }: React.ComponentProps<'pre'>) => {
    return (
      <div className="relative">
        <CopyButton />
        <pre
          {...props}
          className={cn(
            'flex flex-col my-4',
            '*:data-filename:flex *:data-filename:font-sans',
            '*:data-filename:font-semibold *:data-filename:text-sm',
            '*:data-filename:text-dimmed *:data-filename:select-none',
            '*:data-filename:-mx-1 *:data-filename:-mt-1',
            '*:data-filename:px-4 *:data-filename:h-10',
            '*:data-filename:items-center',
            'rounded-3xl !bg-surface-01/50 p-1 border border-boder-01',
            'relative outline-none leading-relaxed',
            '*:[code]:w-full *:[code]:rounded-3xl',
            '*:[code]:p-4 *:[code]:bg-surface-01',
            '*:[code]:border *:[code]:border-boder-02',
          )}
        >
          {children}
        </pre>
      </div>
    );
  },
  code: ({ children, ...props }: React.ComponentProps<'code'>) => {
    return <code {...props}>{children}</code>;
  },
};
