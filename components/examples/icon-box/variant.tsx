import { IconBox } from 'components/selia/icon-box';
import {
  InfoIcon,
  PlayIcon,
  SettingsIcon,
  Trash2Icon,
  TriangleAlertIcon,
  CheckCircle2Icon,
} from 'lucide-react';

export default function IconBoxVariantExample() {
  return (
    <>
      <IconBox>
        <PlayIcon />
      </IconBox>
      <IconBox variant="primary">
        <SettingsIcon />
      </IconBox>
      <IconBox variant="secondary">
        <SettingsIcon />
      </IconBox>
      <IconBox variant="tertiary">
        <SettingsIcon />
      </IconBox>
      <IconBox variant="info">
        <InfoIcon />
      </IconBox>
      <IconBox variant="success">
        <CheckCircle2Icon />
      </IconBox>
      <IconBox variant="warning">
        <TriangleAlertIcon />
      </IconBox>
      <IconBox variant="danger">
        <Trash2Icon />
      </IconBox>
    </>
  );
}
