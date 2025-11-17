import { Button } from 'components/selia/button';
import { IconBox } from 'components/selia/icon-box';
import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from 'components/selia/item';
import {
  CheckCircle2Icon,
  Code2Icon,
  InfoIcon,
  SettingsIcon,
  Trash2Icon,
  TriangleAlertIcon,
} from 'lucide-react';

export default function ItemVariantExample() {
  return (
    <div className="flex flex-col gap-4">
      <Item>
        <ItemMedia>
          <IconBox>
            <Code2Icon />
          </IconBox>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Regular</ItemTitle>
          <ItemDescription>Just a simple item with an icon.</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" variant="tertiary" pill>
            Action
          </Button>
        </ItemAction>
      </Item>
      <Item variant="primary">
        <ItemMedia>
          <IconBox variant="primary">
            <SettingsIcon />
          </IconBox>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Setting</ItemTitle>
          <ItemDescription>
            You can change the settings of the app.
          </ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" variant="primary" pill>
            Edit
          </Button>
        </ItemAction>
      </Item>
      <Item variant="info">
        <ItemMedia>
          <IconBox variant="info">
            <InfoIcon />
          </IconBox>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Information</ItemTitle>
          <ItemDescription>This item is good.</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" variant="info" pill>
            Learn
          </Button>
        </ItemAction>
      </Item>
      <Item variant="success">
        <ItemMedia>
          <IconBox variant="success">
            <CheckCircle2Icon />
          </IconBox>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Success</ItemTitle>
          <ItemDescription>This item is working as expected.</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" variant="success" pill>
            Success
          </Button>
        </ItemAction>
      </Item>
      <Item variant="warning">
        <ItemMedia>
          <IconBox variant="warning">
            <TriangleAlertIcon />
          </IconBox>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Warning</ItemTitle>
          <ItemDescription>
            This item is not working as expected.
          </ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" variant="warning" pill>
            Fix Now
          </Button>
        </ItemAction>
      </Item>
      <Item variant="danger">
        <ItemMedia>
          <IconBox variant="danger">
            <Trash2Icon />
          </IconBox>
        </ItemMedia>
        <ItemContent>
          <ItemTitle>Danger</ItemTitle>
          <ItemDescription>This item is dangerous.</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Button size="sm" variant="danger" pill>
            Delete
          </Button>
        </ItemAction>
      </Item>
    </div>
  );
}
