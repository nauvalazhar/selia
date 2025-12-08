import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from 'components/selia/preview-card';
import { ScrollArea } from 'components/selia/scroll-area';
import { Text } from 'components/selia/text';

export default function Playground() {
  return (
    <div className="flex items-center justify-center h-screen">
      <PreviewCard>
        <Text>
          This is a <PreviewCardTrigger>Preview Card</PreviewCardTrigger>
        </Text>
        <PreviewCardContent>
          <Text>This is a preview card content.</Text>
        </PreviewCardContent>
      </PreviewCard>
    </div>
  );
}
