import { Button } from 'components/selia/button';
import {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
} from 'components/selia/number-field';
import {
  Select,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from 'components/selia/select';
import { Toggle } from 'components/selia/toggle';
import { ToggleGroup } from 'components/selia/toggle-group';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarSeparator,
} from 'components/selia/toolbar';
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  IndentDecreaseIcon,
  IndentIncreaseIcon,
  ItalicIcon,
  MinusIcon,
  PlusIcon,
  UnderlineIcon,
} from 'lucide-react';

export default function ToolbarBasicExample() {
  return (
    <div className="pr-20">
      <Toolbar>
        <ToolbarGroup aria-label="Indentation">
          <ToolbarButton render={<Button variant="plain" size="icon" />}>
            <IndentIncreaseIcon />
          </ToolbarButton>
          <ToolbarButton render={<Button variant="plain" size="icon" />}>
            <IndentDecreaseIcon />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToggleGroup size="md-icon" variant="plain">
          <ToolbarButton
            data-slot="toggle"
            render={<Toggle />}
            aria-label="Bold"
            value="bold"
          >
            <BoldIcon />
          </ToolbarButton>
          <ToolbarButton
            data-slot="toggle"
            render={<Toggle />}
            aria-label="Italic"
            value="italic"
          >
            <ItalicIcon />
          </ToolbarButton>
          <ToolbarButton
            data-slot="toggle"
            render={<Toggle />}
            aria-label="Underline"
            value="underline"
          >
            <UnderlineIcon />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <ToggleGroup variant="plain" size="md-icon">
          <ToolbarButton
            data-slot="toggle"
            render={<Toggle />}
            aria-label="Align left"
            value="align-left"
          >
            <AlignLeftIcon />
          </ToolbarButton>
          <ToolbarButton
            data-slot="toggle"
            render={<Toggle />}
            aria-label="Align center"
            value="align-center"
          >
            <AlignCenterIcon />
          </ToolbarButton>
          <ToolbarButton
            data-slot="toggle"
            render={<Toggle />}
            aria-label="Align right"
            value="align-right"
          >
            <AlignRightIcon />
          </ToolbarButton>
        </ToggleGroup>
        <ToolbarSeparator />
        <Select defaultValue="Arial">
          <SelectTrigger variant="plain">
            <SelectValue placeholder="Font" className="max-w-24 truncate" />
          </SelectTrigger>
          <SelectPopup>
            <SelectList>
              <SelectItem value="Arial">Arial</SelectItem>
              <SelectItem value="Times New Roman">Times New Roman</SelectItem>
              <SelectItem value="Courier New">Courier New</SelectItem>
              <SelectItem value="Georgia">Georgia</SelectItem>
              <SelectItem value="Verdana">Verdana</SelectItem>
              <SelectItem value="Gill Sans">Gill Sans</SelectItem>
            </SelectList>
          </SelectPopup>
        </Select>
        <ToolbarSeparator />
        <NumberField defaultValue={14}>
          <NumberFieldGroup variant="plain">
            <NumberFieldDecrement>
              <MinusIcon />
            </NumberFieldDecrement>
            <ToolbarInput render={<NumberFieldInput className="w-12" />} />
            <NumberFieldIncrement>
              <PlusIcon />
            </NumberFieldIncrement>
          </NumberFieldGroup>
        </NumberField>
        <ToolbarSeparator />
        <ToolbarLink className="text-nowrap">Saved 5 min ago</ToolbarLink>
        <ToolbarSeparator />
        <Button>Save</Button>
      </Toolbar>
    </div>
  );
}
