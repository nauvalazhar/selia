import { ArrowUpRightIcon, CheckIcon, ClipboardIcon } from 'lucide-react';
import { Button } from './selia/button';
import { useState } from 'react';

export interface DocsButtonsProps {
  pageRaw: string;
  externalDoc?: string;
}

export function DocsButtons({ pageRaw, externalDoc }: DocsButtonsProps) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="mb-8 border-b border-border pb-8 flex items-center gap-3.5">
      {externalDoc && (
        <Button
          variant="outline"
          size="xs"
          className="text-sm *:[svg]:w-3.5"
          render={<a href={externalDoc} target="_blank" />}
        >
          Base UI Reference
          <ArrowUpRightIcon />
        </Button>
      )}
      <Button
        variant="outline"
        size="xs"
        className="text-sm *:[svg]:w-3.5"
        disabled={copied}
        onClick={() => {
          setCopied(true);
          navigator.clipboard.writeText(pageRaw);
          setTimeout(() => {
            setCopied(false);
          }, 1500);
        }}
      >
        {copied ? <CheckIcon /> : <ClipboardIcon />}
        Copy Page
      </Button>
    </div>
  );
}
