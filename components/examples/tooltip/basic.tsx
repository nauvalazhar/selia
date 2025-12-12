import { Button } from 'components/selia/button';
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from 'components/selia/tooltip';

export default function TooltipBasicExample() {
  return (
    <Tooltip>
      <TooltipTrigger render={<Button variant="secondary">Hover me</Button>} />
      <TooltipPopup>You can place your tooltip content here.</TooltipPopup>
    </Tooltip>
  );
}
