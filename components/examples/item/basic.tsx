import { Button } from 'components/selia/button';
import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemMeta,
  ItemTitle,
} from 'components/selia/item';

export default function ItemBasicExample() {
  return (
    <div className="flex flex-col gap-4 lg:w-8/12">
      <Item className="items-center">
        <ItemMedia>
          <img
            src="https://cdn.svglogos.dev/logos/claude-icon.svg"
            alt="Avatar"
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Claude</ItemTitle>
          <ItemDescription>AI chatbot</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" variant="tertiary" pill>
            Install
          </Button>
        </ItemAction>
      </Item>
    </div>
  );
}
