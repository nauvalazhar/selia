import { Button } from 'components/selia/button';
import { toast } from 'components/selia/toast';
import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemMeta,
  ItemDescription,
} from 'components/selia/item';
import { Avatar, AvatarImage, AvatarFallback } from 'components/selia/avatar';

export default function ToastItemExample() {
  return (
    <Button
      onClick={() =>
        toast(
          <Item variant="plain">
            <ItemMedia>
              <Avatar>
                <AvatarImage src="/avatar01.png" alt="Avatar" />
                <AvatarFallback>BS</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemTitle>John Doe</ItemTitle>
              <ItemMeta>5 minutes ago</ItemMeta>
              <ItemDescription>Hi, how are you?</ItemDescription>
            </ItemContent>
          </Item>,
        )
      }
    >
      Custom
    </Button>
  );
}
