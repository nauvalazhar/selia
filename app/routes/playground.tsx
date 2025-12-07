import { ScrollArea } from 'components/selia/scroll-area';

export default function Playground() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ScrollArea className="w-40 h-72 border">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className="w-72 h-40 bg-linear-to-r from-primary to-primary/0 mb-4"
          ></div>
        ))}
      </ScrollArea>
    </div>
  );
}
