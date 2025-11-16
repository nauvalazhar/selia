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
          1000 credits
        </InputGroupText>
        <Select defaultValue="gpt-4o">
          <SelectTrigger className="ml-auto w-auto mr-2" variant="plain">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt">GPT</SelectItem>
            <SelectItem value="gemini">Gemini</SelectItem>
            <SelectItem value="claude">Claude</SelectItem>
            <SelectItem value="llama">Llama</SelectItem>
            <SelectItem value="grok">Grok</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="tertiary-subtle">Send</Button>
      </InputGroupBar>
    </InputGroup>
  );
}
