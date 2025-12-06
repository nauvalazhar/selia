import { Card, CardBody, CardHeader, CardTitle } from 'components/selia/card';
import {
  Accordion,
  AccordionTrigger,
  AccordionPanel,
  AccordionItem,
  AccordionHeader,
} from 'components/selia/accordion';
import { Text } from 'components/selia/text';
import { AtomIcon, PlusIcon } from 'lucide-react';

export default function Playground() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-8">
      <Accordion className="w-80" size="lg" variant="plain">
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              <AtomIcon />
              What is React?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <Text>
              React is a JavaScript library for building user interfaces.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              <PlusIcon />
              What is Angular?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <Text>
              Angular is a JavaScript framework for building user interfaces.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              <PlusIcon />
              What is Vue?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <Text>
              Vue is a JavaScript framework for building user interfaces.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Card>
        <CardHeader>
          <CardTitle>Collapsible</CardTitle>
        </CardHeader>
        <CardBody></CardBody>
      </Card>
    </div>
  );
}
