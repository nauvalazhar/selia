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

export default function ItemIconExample() {
  return (
    <Item>
      <ItemMedia>
        <IconBox>
          <Code2Icon />
        </IconBox>
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Software Engineering</ItemTitle>
        <ItemDescription>
          Software engineering is the practice of designing, developing, and
          maintaining software.
        </ItemDescription>
      </ItemContent>
    </Item>
  );
}
