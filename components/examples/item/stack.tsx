import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';
import { Stack } from 'components/selia/stack';
import { Avatar, AvatarFallback, AvatarImage } from 'components/selia/avatar';
import { Button } from 'components/selia/button';
import { Separator } from 'components/selia/separator';

export default function ItemStackExample() {
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
        <ItemAction>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </ItemAction>
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
        <ItemAction>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </ItemAction>
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
        <ItemAction>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </ItemAction>
      </Item>
      <Separator />
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage src="/avatar04.png" alt="Avatar" />
            <AvatarFallback>AJ</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Adam Johnson</ItemTitle>
          <ItemDescription>adam.johnson@example.com</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </ItemAction>
      </Item>
      <Separator />
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage src="/avatar05.png" alt="Avatar" />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Sarah Adams</ItemTitle>
          <ItemDescription>sarah.adams@example.com</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button variant="secondary" size="sm">
            Edit
          </Button>
        </ItemAction>
      </Item>
    </Stack>
  );
}
