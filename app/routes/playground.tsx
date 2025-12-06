import { Card, CardBody, CardHeader, CardTitle } from 'components/selia/card';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsiblePanel,
} from 'components/selia/collapsible';
import { Text } from 'components/selia/text';
import { AtomIcon, PlusIcon } from 'lucide-react';

export default function Playground() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Collapsible className="w-80" variant="plain">
        <CollapsibleTrigger>
          <AtomIcon />
          What is React?
        </CollapsibleTrigger>
        <CollapsiblePanel>
          <Text>
            React is a JavaScript library for building user interfaces.
          </Text>
        </CollapsiblePanel>
      </Collapsible>
      <Card>
        <CardHeader>
          <CardTitle>Collapsible</CardTitle>
        </CardHeader>
        <CardBody>
          <Collapsible className="w-80" variant="outline" size="sm">
            <CollapsibleTrigger>What is React?</CollapsibleTrigger>
            <CollapsiblePanel>
              <Text>
                React is a JavaScript library for building user interfaces.
              </Text>
            </CollapsiblePanel>
          </Collapsible>
        </CardBody>
      </Card>
    </div>
  );
}
