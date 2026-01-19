import { Button } from "components/selia/button";
import { IconBox } from "components/selia/icon-box";
import { Item, ItemAction, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "components/selia/item";
import { ArrowRightIcon, CalculatorIcon, GlobeIcon, MessageCircleCodeIcon, MessageCircleMoreIcon } from "lucide-react";

export function Greeting() {
  return (
    <div className="w-10/12 mx-auto 2xl:mt-40 mt-20">
      <div className="font-light text-3xl text-muted">Hello, there!</div>
      <h1 className="text-4xl font-light">What can I do for you today?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 *:cursor-pointer">
        <Item render={<button />}>
          <ItemMedia>
            <IconBox>
              <MessageCircleMoreIcon />
            </IconBox>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              General Questions
            </ItemTitle>
            <ItemDescription>
              Ask me anything about the general topics.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <ArrowRightIcon />
          </ItemAction>
        </Item>
        <Item render={<button />}>
          <ItemMedia>
            <IconBox variant="danger">
              <CalculatorIcon />
            </IconBox>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              Solve Math Problems
            </ItemTitle>
            <ItemDescription>
              Solve math problems with detailed steps.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <ArrowRightIcon />
          </ItemAction>
        </Item>
        <Item render={<button />}>
          <ItemMedia>
            <IconBox variant="success">
              <MessageCircleCodeIcon />
            </IconBox>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              Generate Code
            </ItemTitle>
            <ItemDescription>
              Generate code for your application.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <ArrowRightIcon />
          </ItemAction>
        </Item>
        <Item render={<button />}>
          <ItemMedia>
            <IconBox variant="info">
              <GlobeIcon />
            </IconBox>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>
              Deep Research
            </ItemTitle>
            <ItemDescription>
              Deep research on any topic you want.
            </ItemDescription>
          </ItemContent>
          <ItemAction>
            <ArrowRightIcon />
          </ItemAction>
        </Item>
      </div>
      <div className="text-center mt-6">
        <Button variant="secondary" pill size="xs" className="text-sm">
          Explore More
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
}