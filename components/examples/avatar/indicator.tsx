import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
} from 'components/selia/avatar';
import { VerifiedIcon } from 'lucide-react';

export default function AvatarInitialExample() {
  return (
    <>
      <Avatar size="md">
        <AvatarImage src="/avatar01.png" alt="Avatar" />
        <AvatarFallback>BS</AvatarFallback>
        <AvatarIndicator
          position="bottom"
          className="bg-green-500 outline outline-background"
          size="sm"
        />
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="/avatar02.png" alt="Avatar" />
        <AvatarFallback>BS</AvatarFallback>
        <AvatarIndicator position="top" className="bg-red-500" size="lg">
          3
        </AvatarIndicator>
      </Avatar>
      <Avatar size="md">
        <AvatarImage src="/avatar03.png" alt="Avatar" />
        <AvatarFallback>BS</AvatarFallback>
        <AvatarIndicator position="bottom" className="bg-blue-500" size="lg">
          <VerifiedIcon />
        </AvatarIndicator>
      </Avatar>
    </>
  );
}
