import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from 'components/selia/popover';
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from 'components/selia/progress';
import { Text } from 'components/selia/text';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'components/selia/tooltip';
import { useEffect, useState } from 'react';

export default function Playground() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) =>
        Math.min(100, Math.round(prev + Math.random() * 25)),
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <Progress value={progress} className="w-64">
        <ProgressLabel>Launching Workspace</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  );
}
