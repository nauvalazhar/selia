import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionPanel,
} from 'components/selia/accordion';
import { Text } from 'components/selia/text';

export default function AccordionBasicExample() {
  return (
    <div className="flex items-center justify-center w-full">
      <Accordion className="w-80" size="lg">
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              What is Liverpool Football Club?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <Text>
              Liverpool Football Club is the biggest football club in the world.
            </Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              How many titles has Liverpool Football Club won?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <Text>Liverpool Football Club has won 20 titles.</Text>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader>
            <AccordionTrigger>
              Will Jurgen Klopp manage Liverpool again?
            </AccordionTrigger>
          </AccordionHeader>
          <AccordionPanel>
            <Text>We will be there.</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
