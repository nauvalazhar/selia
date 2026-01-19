import { Button } from 'components/selia/button';
import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';

export default function ItemBasicExample() {
  return (
    <div className="flex flex-col gap-4 2xl:w-8/12 xl:w-10/12 w-full">
      <Item className="items-center">
        <ItemMedia>
          <img
            src="https://cdn.svglogos.dev/logos/claude-icon.svg"
            alt="Avatar"
            className='size-11 rounded'
          />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Claude</ItemTitle>
          <ItemDescription>AI chatbot</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" pill>
            Install
          </Button>
        </ItemAction>
      </Item>
    </div>
  );
}
