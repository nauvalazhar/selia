import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
} from 'components/selia/avatar';

export default function AvatarExample() {
  return (
    <>
      <Avatar>
        <AvatarImage src="/avatar01.png" alt="Avatar" />
        <AvatarFallback>BS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="/avatar02.png" alt="Avatar" />
        <AvatarFallback>BS</AvatarFallback>
        <AvatarIndicator className="bg-green-500 outline outline-background" />
      </Avatar>
      <Avatar>NA</Avatar>
    </>
  );
}
