import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';
import { Stack } from 'components/selia/stack';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';

export default function StackRowExample() {
  return (
    <Stack direction="row">
      <Item direction="column">
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
      <Item direction="column">
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
    </Stack>
  );
}
