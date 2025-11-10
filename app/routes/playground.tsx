import { Badge } from 'components/selia/badge';
import { Button } from 'components/selia/button';
import { Chip } from 'components/selia/chip';
import { InputGroup, InputGroupBar } from 'components/selia/input-group';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import { Spinner } from 'components/selia/spinner';
import { Text } from 'components/selia/text';
import { Textarea } from 'components/selia/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from 'components/selia/tooltip';
import { ArrowUpIcon, PlusIcon, SendIcon, UserIcon } from 'lucide-react';
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
      <div className="flex items-center gap-2.5 flex-wrap max-w-md">
        <Badge variant="primary">
          <Spinner />
          Creating
        </Badge>
        <Badge variant="primary">
          <UserIcon />
          User
        </Badge>
        <Badge variant="primary" pill>
          20
        </Badge>
        <Badge variant="primary-subtle">Creating</Badge>
        <Badge variant="primary-outline">Creating</Badge>
        <Badge variant="secondary">Creating</Badge>
        <Badge variant="secondary-subtle">Creating</Badge>
        <Badge variant="secondary-outline">Creating</Badge>
        <Badge variant="tertiary">Creating</Badge>
        <Badge variant="tertiary-subtle">Creating</Badge>
        <Badge variant="tertiary-outline">Creating</Badge>
        <Badge variant="destructive">Creating</Badge>
        <Badge variant="destructive-subtle">Creating</Badge>
        <Badge variant="destructive-outline">Creating</Badge>
        <Badge variant="success-subtle">Creating</Badge>
        <Badge variant="success-outline">Creating</Badge>
        <Badge variant="info">Creating</Badge>
        <Badge variant="info-subtle">Creating</Badge>
        <Badge variant="info-outline">Creating</Badge>
        <Badge variant="warning">Creating</Badge>
        <Badge variant="warning-subtle">Creating</Badge>
        <Badge variant="warning-outline">Creating</Badge>
      </div>
      <div className="w-md bg-surface01 p-2 rounded-3xl">
        <div className="flex items-center gap-2.5 p-1.5 mb-2">
          <Chip variant="secondary" size="sm">
            How to make a website
          </Chip>
          <Chip variant="secondary" size="sm">
            Write a love letter
          </Chip>
          <Chip variant="secondary" size="sm">
            Write a poem
          </Chip>
        </div>
        <InputGroup variant="subtle" size="lg" className="shadow">
          <Textarea
            placeholder="Ask AI anything"
            className="min-h-14 resize-none"
          />
          <InputGroupBar>
            <Button size="sm-icon" variant="secondary">
              <PlusIcon />
            </Button>
            <Select defaultValue="gpt-4o">
              <SelectTrigger className="ml-auto w-auto mr-2" variant="plain">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4o">GPT-4o</SelectItem>
                <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
                <SelectItem value="gpt-4">GPT-4</SelectItem>
                <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
              </SelectContent>
            </Select>
            <Button size="sm-icon">
              <ArrowUpIcon />
            </Button>
          </InputGroupBar>
        </InputGroup>
      </div>
    </div>
  );
}
