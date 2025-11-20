import {
  Item,
  ItemAction,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from 'components/selia/item';
import { Radio, RadioGroup } from 'components/selia/radio';

export default function RadioItemExample() {
  return (
    <RadioGroup>
      <Item render={<label />}>
        <ItemContent>
          <ItemTitle>Standard Plan</ItemTitle>
          <ItemDescription>You will get 1000 credits per month</ItemDescription>
        </ItemContent>
        <ItemAction>
          <Radio value="standard" />
        </ItemAction>
      </Item>
      <Item render={<label />}>
        <ItemContent>
          <ItemTitle>Premium Plan</ItemTitle>
          <ItemDescription>
            You will get 10000 credits per month
          </ItemDescription>
        </ItemContent>
        <ItemAction>
          <Radio value="premium" />
        </ItemAction>
      </Item>
    </RadioGroup>
  );
}
