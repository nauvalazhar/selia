import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import { useState } from 'react';

export default function ButtonProgressExample() {
  const [pending, setPending] = useState(false);

  return (
    <div className="flex flex-col items-start justify-center text-center gap-2">
      <Button
        variant="danger"
        progress={pending}
        onClick={() => {
          setPending(true);
          setTimeout(() => setPending(false), 2000);
        }}
        className="mx-auto"
      >
        Delete Chat
      </Button>
      <Text className="text-sm">(Click the button to see the loading)</Text>
    </div>
  );
}
