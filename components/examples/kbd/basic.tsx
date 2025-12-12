import { Kbd } from 'components/selia/kbd';

export default function KbdBasicExample() {
  return (
    <>
      <Kbd>Alt + F4</Kbd>
      <Kbd variant="outline">Ctrl + V</Kbd>
      <Kbd variant="plain">Ctrl + C</Kbd>
    </>
  );
}
