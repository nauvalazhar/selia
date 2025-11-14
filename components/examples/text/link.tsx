import { Text, TextLink } from 'components/selia/text';

export default function TextLinkExample() {
  return (
    <Text>
      You can also add{' '}
      <TextLink href="https://seliaui.com" target="_blank">
        links
      </TextLink>{' '}
      to your text.
    </Text>
  );
}
