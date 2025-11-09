import { Text } from 'components/selia/text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'components/selia/tooltip';

export default function Playground() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Tooltip>
        <TooltipTrigger render={<Text>Tooltip</Text>} />
        <TooltipContent side="bottom">Tooltip content</TooltipContent>
      </Tooltip>
    </div>
  );
}
