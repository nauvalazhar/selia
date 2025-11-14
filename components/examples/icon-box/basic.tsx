import { IconBox } from 'components/selia/icon-box';
import { InfoIcon, SettingsIcon, Trash2Icon } from 'lucide-react';

export default function IconBoxExample() {
  return (
    <>
      <IconBox>
        <SettingsIcon />
      </IconBox>
      <IconBox variant="info">
        <InfoIcon />
      </IconBox>
      <IconBox variant="destructive">
        <Trash2Icon />
      </IconBox>
    </>
  );
}
