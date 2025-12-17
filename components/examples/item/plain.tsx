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
    <div className="min-lg:w-8/12">
      <Item variant="plain">
        <ItemMedia>
          <IconBox>
            <Code2Icon />
          </IconBox>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Plain</ItemTitle>
          <ItemDescription>You can put this item in a list.</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" variant="secondary" pill>
            Action
          </Button>
        </ItemAction>
      </Item>
    </div>
  );
}
