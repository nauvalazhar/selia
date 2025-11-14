import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupLabel,
} from 'components/selia/checkbox';
import { Label } from 'components/selia/label';

export default function CheckboxGroupExample() {
  return (
    <CheckboxGroup
      defaultValue={['email', 'sms']}
      aria-labelledby="notifications-label"
    >
      <CheckboxGroupLabel id="notifications-label">
        Notifications
      </CheckboxGroupLabel>
      <Label>
        <Checkbox value="email" />
        Email
      </Label>
      <Label>
        <Checkbox value="sms" />
        SMS
      </Label>
      <Label>
        <Checkbox value="push" />
        Push
      </Label>
    </CheckboxGroup>
  );
}
