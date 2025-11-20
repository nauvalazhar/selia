import { Button } from 'components/selia/button';
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from 'components/selia/popover';
import { ArrowRightIcon } from 'lucide-react';

export default function PopoverBasicExample() {
  return (
    <Popover>
      <PopoverTrigger render={<Button>Upgrade</Button>} />
      <PopoverContent className="w-72">
        <PopoverTitle>Upgrade to Pro</PopoverTitle>
        <PopoverDescription>
          Upgrade to Pro to get more features and access to exclusive content.
        </PopoverDescription>
        <Button size="sm" variant="tertiary" pill>
          Upgrade
          <ArrowRightIcon />
        </Button>
      </PopoverContent>
    </Popover>
  );
}
