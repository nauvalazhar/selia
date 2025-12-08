import {
  PreviewCard,
  PreviewCardContent,
  PreviewCardTrigger,
} from 'components/selia/preview-card';
import { Text } from 'components/selia/text';

export default function PreviewCardBasicExample() {
  return (
    <PreviewCard>
      <Text className="xl:w-8/12 w-full">
        Liverpool Football Club is a professional{' '}
        <PreviewCardTrigger className="text-primary border-b border-primary cursor-help">
          football club
        </PreviewCardTrigger>{' '}
        based in Liverpool, England.
      </Text>
      <PreviewCardContent className="max-w-72">
        <img
          src="https://images.unsplash.com/photo-1731931594172-2e96a6a9acbf?q=80&w=500"
          className="w-full h-auto rounded mb-2"
        />
        <Text className="text-sm/loose">
          In association football, a football club is a sports club that acts as
          an entity through which association football teams organise their
          sporting activities. The club can exist either as an independent unit
          or as part of a larger sports organization as a subsidiary of the
          parent club or organization.
        </Text>
      </PreviewCardContent>
    </PreviewCard>
  );
}
