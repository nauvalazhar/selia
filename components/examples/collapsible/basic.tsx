import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from 'components/selia/collapsible';
import { Text } from 'components/selia/text';

export default function CollapsibleBasicExample() {
  return (
    <div className="flex items-center justify-center h-40 w-full">
      <Collapsible className="w-full lg:w-8/12">
        <CollapsibleTrigger>What is Linux?</CollapsibleTrigger>
        <CollapsiblePanel>
          <Text>
            Linux is a free and open-source operating system that is based on
            the Linux kernel.
          </Text>
        </CollapsiblePanel>
      </Collapsible>
    </div>
  );
}
