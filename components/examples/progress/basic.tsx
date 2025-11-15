import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from 'components/selia/progress';
import { useEffect, useState } from 'react';

export default function ProgressBasicExample() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => Math.min(100, value + 1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <Progress value={value} className="w-full">
      <ProgressLabel>Uploading</ProgressLabel>
      <ProgressValue />
    </Progress>
  );
}
