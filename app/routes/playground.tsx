import { Text } from 'components/selia/text';
import { Toggle } from 'components/selia/toggle';
import { ToggleGroup } from 'components/selia/toggle-group';
import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
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
  UnderlineIcon,
} from 'lucide-react';

export default function Playground() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Toolbar>
        <ToolbarGroup>
          <ToolbarButton>
            <IndentIncreaseIcon />
          </ToolbarButton>
          <ToolbarButton>
            <IndentDecreaseIcon />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup>
          <ToolbarButton
            render={<Toggle size="md-icon" variant="plain" />}
            aria-label="Bold"
            value="bold"
          >
            <BoldIcon />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle size="md-icon" variant="plain" />}
            aria-label="Italic"
            value="italic"
          >
            <ItalicIcon />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle size="md-icon" variant="plain" />}
            aria-label="Underline"
            value="underline"
          >
            <UnderlineIcon />
          </ToolbarButton>
        </ToolbarGroup>
        <ToolbarSeparator />
        <ToolbarGroup render={<ToggleGroup variant="plain" />}>
          <ToolbarButton
            render={<Toggle size="md-icon" variant="plain" />}
            aria-label="Align left"
            value="align-left"
          >
            <AlignLeftIcon />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle size="md-icon" variant="plain" />}
            aria-label="Align center"
            value="align-center"
          >
            <AlignCenterIcon />
          </ToolbarButton>
          <ToolbarButton
            render={<Toggle size="md-icon" variant="plain" />}
            aria-label="Align right"
            value="align-right"
          >
            <AlignRightIcon />
          </ToolbarButton>
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}
