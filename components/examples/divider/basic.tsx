import { Divider, DividerText } from 'components/selia/divider';
import { Text } from 'components/selia/text';

export default function DividerExample() {
  return (
    <div className="w-6/12">
      <Text>This is some text above the divider.</Text>
      <Divider className="my-4" />
      <Text>This is some text below the divider.</Text>
    </div>
  );
}
