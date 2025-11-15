import { Button } from 'components/selia/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'components/selia/tooltip';

export default function TooltipBasicExample() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="secondary">Hover me</Button>} />
      <TooltipContent>You can place your tooltip content here.</TooltipContent>
    </Tooltip>
  );
}
