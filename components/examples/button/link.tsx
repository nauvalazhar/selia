import { Button } from 'components/selia/button';
import { ExternalLinkIcon } from 'lucide-react';

export default function Link() {
  return (
    <>
      <Button
        nativeButton={false}
        variant="plain"
        render={
          <a
            href="https://dev.nauv.al"
            target="_blank"
            rel="noopener noreferrer"
          />
        }
      >
        Link
        <ExternalLinkIcon />
      </Button>
    </>
  );
}
