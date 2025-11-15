import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';
import { Stack } from 'components/selia/stack';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Separator } from 'components/selia/separator';

export default function StackBasicExample() {
  return (
    <Stack>
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage src="/avatar01.png" alt="Avatar" />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Marina Brown</ItemTitle>
          <ItemDescription>marina.brown@example.com</ItemDescription>
        </ItemContent>
      </Item>
      <Separator />
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage src="/avatar02.png" alt="Avatar" />
            <AvatarFallback>SO</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Sarah O'Connor</ItemTitle>
          <ItemDescription>sarah.oconnor@example.com</ItemDescription>
        </ItemContent>
      </Item>
      <Separator />
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage src="/avatar03.png" alt="Avatar" />
            <AvatarFallback>WM</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>William Martin</ItemTitle>
          <ItemDescription>william.martin@example.com</ItemDescription>
        </ItemContent>
      </Item>
    </Stack>
  );
}
