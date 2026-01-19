import { ScrollArea } from "components/selia/scroll-area";
import { Editor } from "./editor";
import { Layout } from "./layout";
import { Greeting } from "./greeting";

export default function AiChat() {
  return (
    <Layout>
      <ScrollArea className="flex-1">
        <div className="w-full max-w-3xl mx-auto">
          <Greeting />
        </div>
      </ScrollArea>
      <div className="shrink-0 w-full max-w-3xl mx-auto py-4 px-4 lg:px-0">
        <Editor />
      </div>
    </Layout >
  );
}
