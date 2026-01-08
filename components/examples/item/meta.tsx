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
    <div className="min-lg:w-8/12">
      <Item>
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop&crop=top"
              alt="Avatar"
            />
            <AvatarFallback>BS</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Joseph Cooper</ItemTitle>
          <ItemMeta className="mb-2.5">5 minutes ago</ItemMeta>
          <ItemDescription>Don't let me leave, Murph!</ItemDescription>
          <div className="-mx-2 mt-2.5">
            <Button size="xs" variant="plain" pill>
              Reply
            </Button>
          </div>
        </ItemContent>
        <ItemAction>
          <Button size="xs-icon" pill variant="plain">
            <HeartIcon />
          </Button>
        </ItemAction>
      </Item>
    </div>
  );
}
