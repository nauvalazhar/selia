import { InputGroup, InputGroupAddon } from 'components/selia/input-group';
import { Textarea } from 'components/selia/textarea';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectPopup,
  SelectItem,
  SelectList,
} from 'components/selia/select';
import { Button } from 'components/selia/button';
import { ArrowUpIcon, FileIcon, PlusIcon } from 'lucide-react';
import { Menu, MenuItem, MenuPopup, MenuTrigger } from 'components/selia/menu';

export default function InputGroupTextareaExample() {
  return (
    <InputGroup className="min-lg:w-8/12">
      <Textarea placeholder="Ask AI anything ..." className="resize-none" />
      <InputGroupAddon align="block-end">
        <Menu>
          <MenuTrigger
            render={
              <Button size="sm-icon" variant="outline" pill>
                <PlusIcon />
              </Button>
            }
          />
          <MenuPopup align="start" className="w-48">
            <MenuItem>
              <FileIcon /> Add File
            </MenuItem>
          </MenuPopup>
        </Menu>
        <Select defaultValue={models[1]} items={models}>
          <SelectTrigger className="ml-auto w-auto mr-2" variant="plain">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectPopup>
            <SelectList>
              {models.map((model) => (
                <SelectItem key={model.value} value={model}>
                  {model.label}
                </SelectItem>
              ))}
            </SelectList>
          </SelectPopup>
        </Select>
        <Button size="sm-icon" pill>
          <ArrowUpIcon />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
}

const models = [
  {
    value: 'gpt',
    label: 'GPT',
  },
  {
    value: 'gemini',
    label: 'Gemini',
  },
  {
    value: 'claude',
    label: 'Claude',
  },
  {
    value: 'llama',
    label: 'Llama',
  },
  {
    value: 'grok',
    label: 'Grok',
  },
];
