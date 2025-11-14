import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemMeta,
  ItemTitle,
} from 'components/selia/item';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Button } from 'components/selia/button';
import { HeartIcon } from 'lucide-react';

export default function ItemMetaExample() {
  return (
    <Item>
      <ItemMedia>
        <Avatar>
          <AvatarImage src="/avatar04.png" alt="Avatar" />
          <AvatarFallback>BS</AvatarFallback>
        </Avatar>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Joseph Cooper</ItemTitle>
        <ItemMeta className="mb-2.5">5 minutes ago</ItemMeta>
        <ItemDescription>Don't let me leave, Murph!</ItemDescription>
        <div className="-mx-2 mt-2.5">
          <Button size="xs" variant="tertiary-plain" pill>
            Reply
          </Button>
        </div>
      </ItemContent>
      <ItemAction>
        <Button size="xs-icon" pill variant="tertiary-plain">
          <HeartIcon />
        </Button>
      </ItemAction>
    </Item>
  );
}
