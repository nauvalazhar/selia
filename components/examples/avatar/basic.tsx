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
        <AvatarImage
          src="https://pbs.twimg.com/profile_images/1881314507865411584/aXlN8o5e_400x400.jpg"
          alt="Avatar"
        />
        <AvatarFallback>RF</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage
          src="https://pbs.twimg.com/profile_images/1460906228389867522/WxSzgWSs_400x400.jpg"
          alt="Avatar"
        />
        <AvatarFallback>NA</AvatarFallback>
        <AvatarIndicator className="bg-green-500 outline outline-background" />
      </Avatar>
      <Avatar>NA</Avatar>
    </>
  );
}
