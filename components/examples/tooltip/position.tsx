import { Button } from 'components/selia/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'components/selia/tooltip';

export default function TooltipPositionExample() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Top</Button>} />
        <TooltipContent>I am on the top</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Bottom</Button>} />
        <TooltipContent side="bottom" align="start">
          I am on the bottom
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Left</Button>} />
        <TooltipContent side="left" align="start">
          I am on the left
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Right</Button>} />
        <TooltipContent side="right" align="start">
          I am on the right
        </TooltipContent>
      </Tooltip>
    </>
  );
}
