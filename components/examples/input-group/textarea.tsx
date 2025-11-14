import {
  InputGroup,
  InputGroupAddon,
  InputGroupSeparator,
  InputGroupBar,
  InputGroupText,
} from 'components/selia/input-group';
import { Textarea } from 'components/selia/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from 'components/selia/select';
import { Button } from 'components/selia/button';
import { AlignLeftIcon, PieChartIcon } from 'lucide-react';

export default function InputGroupTextareaExample() {
  return (
    <InputGroup variant="subtle">
      <InputGroupAddon className="items-start">
        <AlignLeftIcon />
      </InputGroupAddon>
      <Textarea placeholder="Ask AI anything ..." />
      <InputGroupSeparator />
      <InputGroupBar>
        <InputGroupText className="text-sm">
          <PieChartIcon />
          1000 credits remaining
        </InputGroupText>
        <Select defaultValue="gpt-4o">
          <SelectTrigger className="ml-auto w-auto mr-2" variant="plain">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt-4o">GPT-4o</SelectItem>
            <SelectItem value="gpt-4o-mini">GPT-4o Mini</SelectItem>
            <SelectItem value="gpt-4">GPT-4</SelectItem>
            <SelectItem value="gpt-4-turbo">GPT-4 Turbo</SelectItem>
            <SelectItem value="gpt-4-vision">GPT-4 Vision</SelectItem>
            <SelectItem value="gpt-4-vision-preview">
              GPT-4 Vision Preview
            </SelectItem>
            <SelectItem value="gpt-4-vision-preview-2">
              GPT-4 Vision Preview 2
            </SelectItem>
            <SelectItem value="gpt-4-vision-preview-3">
              GPT-4 Vision Preview 3
            </SelectItem>
            <SelectItem value="gpt-4-vision-preview-4">
              GPT-4 Vision Preview 4
            </SelectItem>
            <SelectItem value="gpt-4-vision-preview-5">
              GPT-4 Vision Preview 5
            </SelectItem>
          </SelectContent>
        </Select>
        <Button variant="tertiary-subtle">Send</Button>
      </InputGroupBar>
    </InputGroup>
  );
}
