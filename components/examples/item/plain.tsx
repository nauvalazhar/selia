import { Button } from 'components/selia/button';
import { IconBox } from 'components/selia/icon-box';

import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemMeta,
  ItemTitle,
} from 'components/selia/item';
import { Code2Icon } from 'lucide-react';

export default function ItemPlainExample() {
  return (
    <Item variant="plain">
      <ItemMedia>
        <IconBox>
          <Code2Icon />
        </IconBox>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Plain</ItemTitle>
        <ItemDescription>
          Sometimes you want to put this item in a list.
        </ItemDescription>
      </ItemContent>
      <ItemAction>
        <Button size="sm" variant="tertiary" pill>
          Action
        </Button>
      </ItemAction>
    </Item>
  );
}
