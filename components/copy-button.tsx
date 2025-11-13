import { CheckIcon, CopyIcon } from 'lucide-react';
import { Button } from 'components/selia/button';
import { useState } from 'react';

export function CopyButton() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Button
      size="xs-icon"
      variant="secondary-plain"
      className="absolute top-1.5 right-2 *:[svg]:text-dimmed"
      pill
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        const codeText = e.currentTarget
          .closest('pre')
          ?.querySelector('code')?.textContent;

        navigator.clipboard.writeText(codeText ?? '');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      }}
    >
      {isCopied ? <CheckIcon /> : <CopyIcon />}
    </Button>
  );
}
