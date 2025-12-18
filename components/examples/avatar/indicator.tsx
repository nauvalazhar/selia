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
        <AvatarImage
          src="https://pbs.twimg.com/profile_images/1881314507865411584/aXlN8o5e_400x400.jpg"
          alt="Avatar"
        />
        <AvatarFallback>RF</AvatarFallback>
        <AvatarIndicator
          position="bottom"
          className="bg-green-500 outline outline-background"
          size="sm"
        />
      </Avatar>
      <Avatar size="md">
        <AvatarImage
          src="https://pbs.twimg.com/profile_images/1460906228389867522/WxSzgWSs_400x400.jpg"
          alt="Avatar"
        />
        <AvatarFallback>NA</AvatarFallback>
        <AvatarIndicator
          position="top"
          className="bg-red-500 text-white"
          size="lg"
        >
          3
        </AvatarIndicator>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>BS</AvatarFallback>
        <AvatarIndicator
          position="bottom"
          className="bg-blue-500 text-white"
          size="lg"
        >
          <VerifiedIcon />
        </AvatarIndicator>
      </Avatar>
    </>
  );
}
