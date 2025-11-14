import * as React from 'react';
import {
  Checkbox,
  CheckboxGroup,
  CheckboxGroupLabel,
} from 'components/selia/checkbox';
import { Label } from 'components/selia/label';

const permissions = [
  {
    label: 'Read',
    value: 'read',
  },
  {
    label: 'Write',
    value: 'write',
  },
  {
    label: 'Execute',
    value: 'execute',
  },
];

export default function CheckboxGroupExample() {
  const [value, setValue] = React.useState<string[]>([]);

  return (
    <CheckboxGroup
      value={value}
      onValueChange={setValue}
      aria-labelledby="permissions-label"
      allValues={permissions.map((p) => p.value)}
    >
      <CheckboxGroupLabel id="permissions-label">
        Permissions
      </CheckboxGroupLabel>
      <Label>
        <Checkbox parent name="user-permissions" />
        User Permissions
      </Label>
      {permissions.map((permission) => (
        <Label key={permission.value} className="pl-4">
          <Checkbox value={permission.value} />
          {permission.label}
        </Label>
      ))}
    </CheckboxGroup>
  );
}
