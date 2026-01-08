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
    <Stack className="w-full xl:w-8/12">
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=880"
              alt="Avatar"
            />
            <AvatarFallback>JR</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Jane Randy</ItemTitle>
          <ItemDescription>jane@example.com</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button variant="secondary" size="sm">
            Follow
          </Button>
        </ItemAction>
      </Item>
      <Separator />
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&h=200&fit=crop&crop=top"
              alt="Avatar"
            />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Andy Daniel</ItemTitle>
          <ItemDescription>andy@example.com</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button variant="secondary" size="sm">
            Follow
          </Button>
        </ItemAction>
      </Item>
      <Separator />
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200&h=200&auto=format&fit=crop"
              alt="Avatar"
            />
            <AvatarFallback>MH</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Maggie Hudson</ItemTitle>
          <ItemDescription>maggie@example.com</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button variant="secondary" size="sm">
            Follow
          </Button>
        </ItemAction>
      </Item>
      <Separator />
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=200&h=200&auto=format&fit=crop"
              alt="Avatar"
            />
            <AvatarFallback>Olivia Nam</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Olivia Nam</ItemTitle>
          <ItemDescription>olivia@example.com</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button variant="secondary" size="sm">
            Follow
          </Button>
        </ItemAction>
      </Item>
      <Separator />
      <Item variant="plain">
        <ItemMedia>
          <Avatar>
            <AvatarImage
              src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=200&h=200&auto=format&fit=crop&crop=top"
              alt="Avatar"
            />
            <AvatarFallback>SA</AvatarFallback>
          </Avatar>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Edward Cook</ItemTitle>
          <ItemDescription>edward@example.com</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button variant="secondary" size="sm">
            Follow
          </Button>
        </ItemAction>
      </Item>
    </Stack>
  );
}
