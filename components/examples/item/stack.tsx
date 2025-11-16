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
    <Stack className="w-full">
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage src="/avatar01.png" alt="Avatar" />
            <AvatarFallback>MB</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Marina Brown</ItemTitle>
          <ItemDescription>marina@example.com</ItemDescription>
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
          <ItemDescription>sarah@example.com</ItemDescription>
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
          <ItemDescription>william@example.com</ItemDescription>
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
          <ItemDescription>adam@example.com</ItemDescription>
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
          <ItemDescription>sarah@example.com</ItemDescription>
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
