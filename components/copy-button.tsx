import { CheckIcon, ClipboardIcon } from 'lucide-react';
import { Button } from 'components/selia/button';
import { useState } from 'react';

export function CopyButton() {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <Button
      size="xs-icon"
      variant="secondary"
      className="z-10 text-sm"
      pill
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        const codeText =
          e.currentTarget.parentElement?.parentElement?.querySelector(
            'code',
          )?.textContent;

        navigator.clipboard.writeText(codeText ?? '');
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 1000);
      }}
    >
      {isCopied ? (
        <>
          <CheckIcon />
        </>
      ) : (
        <>
          <ClipboardIcon />
        </>
      )}
    </Button>
  );
}
