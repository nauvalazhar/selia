import { Card, CardBody, CardHeader, CardTitle } from 'components/selia/card';
import {
  Accordion,
  AccordionTrigger,
  AccordionPanel,
  AccordionItem,
  AccordionHeader,
} from 'components/selia/accordion';
import { Text } from 'components/selia/text';
import {
  AtomIcon,
  HeartIcon,
  PlusIcon,
  TextAlignStart,
  TextAlignCenter,
  TextAlignEnd,
} from 'lucide-react';
import { Toggle } from 'components/selia/toggle';
import { Button } from 'components/selia/button';
import { ToggleGroup } from 'components/selia/toggle-group';

export default function Playground() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-8">
      <ToggleGroup defaultValue={['start']} variant="default">
        <Toggle size="md-icon" value="start">
          <TextAlignStart />
        </Toggle>
        <Toggle size="md-icon" value="center">
          <TextAlignCenter />
        </Toggle>
        <Toggle size="md-icon" value="end">
          <TextAlignEnd />
        </Toggle>
      </ToggleGroup>
      <Toggle
        size="md-icon"
        className="data-pressed:*:[svg]:fill-red-500 data-pressed:*:[svg]:stroke-red-500"
      >
        <HeartIcon />
      </Toggle>
      <Button>Small</Button>

      <Toggle size="sm" aria-label="Favorite">
        Small
      </Toggle>
    </div>
  );
}
