import { Button } from 'components/selia/button';
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from 'components/selia/tooltip';

export default function TooltipPositionExample() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Top</Button>} />
        <TooltipPopup>I am on the top</TooltipPopup>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Bottom</Button>} />
        <TooltipPopup side="bottom" align="start">
          I am on the bottom
        </TooltipPopup>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Left</Button>} />
        <TooltipPopup side="left" align="start">
          I am on the left
        </TooltipPopup>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger render={<Button variant="secondary">Right</Button>} />
        <TooltipPopup side="right" align="start">
          I am on the right
        </TooltipPopup>
      </Tooltip>
    </>
  );
}
