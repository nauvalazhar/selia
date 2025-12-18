import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import {
  Tooltip,
  TooltipPopup,
  TooltipTrigger,
} from 'components/selia/tooltip';
import { ArrowRightIcon, BoxIcon, TerminalIcon, ZapIcon } from 'lucide-react';
import { Link } from 'react-router';
import { lazy, Suspense } from 'react';

const HomeDemo = lazy(() =>
  import('components/home-demo').then((m) => ({ default: m.HomeDemo })),
);

export default function Index() {
  return (
    <>
      <title>Interfaces That Feel Right, Out of the Box – Selia</title>

      <main>
        <div className="container mx-auto">
          <div className="flex md:px-2.5">
            <div className="w-full xl:w-5/12 shrink-0 sticky top-16 self-start pt-20 lg:pt-34 text-center xl:text-left">
              <Button
                size="xs"
                pill
                variant="outline"
                className="mb-6"
                render={<Link to="/docs/introduction" />}
              >
                <span className="text-sm font-medium">Learn about Selia</span>
                <ArrowRightIcon className="w-4" />
              </Button>
              <h1 className="text-6xl/12 font-semibold tracking-tight bg-linear-to-b from-foreground to-foreground/60 bg-clip-text text-transparent 2xl:w-11/12 pb-2">
                Interfaces That Feel Right, Out of the Box
              </h1>
              <Text className="text-dimmed font-light text-2xl/7 mb-4 lg:w-9/12 mt-4 mx-auto xl:mx-0">
                Selia is a collection of components designed for visual
                cohesion. Built to work beautifully together with minimal
                configuration.
              </Text>
              <Button
                variant="primary"
                pill
                render={<Link to="/docs/installation" />}
                className="mt-4"
                size="lg"
              >
                Get Started
                <ArrowRightIcon />
              </Button>
              <Button
                size="lg"
                variant="plain"
                pill
                className="ml-2.5"
                render={<Link to="/docs/alert" />}
              >
                <BoxIcon />
                Components
              </Button>
              <Text className="mt-12 uppercase text-sm font-medium tracking-wide text-dimmed">
                Built with
              </Text>
              <div className="flex items-center justify-center xl:justify-start mt-4 **:[svg]:w-8 gap-3 dark:**:[svg]:grayscale">
                <Tooltip>
                  <TooltipTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-11.5 -10.23174 23 20.46348"
                    >
                      <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                      <g stroke="#61dafb" stroke-width="1" fill="none">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                  </TooltipTrigger>
                  <TooltipPopup>React.js</TooltipPopup>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <svg
                      width="17"
                      height="24"
                      viewBox="0 0 17 24"
                      fill="currentcolor"
                    >
                      <path d="M9.5001 7.01537C9.2245 6.99837 9 7.22385 9 7.49999V23C13.4183 23 17 19.4183 17 15C17 10.7497 13.6854 7.27351 9.5001 7.01537Z"></path>
                      <path d="M8 9.8V12V23C3.58172 23 0 19.0601 0 14.2V12V1C4.41828 1 8 4.93989 8 9.8Z"></path>
                    </svg>
                  </TooltipTrigger>
                  <TooltipPopup>Base UI</TooltipPopup>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 54 33"
                    >
                      <g clip-path="url(#prefix__clip0)">
                        <path
                          fill="#38bdf8"
                          fill-rule="evenodd"
                          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
                          clip-rule="evenodd"
                        />
                      </g>
                      <defs>
                        <clipPath id="prefix__clip0">
                          <path fill="#fff" d="M0 0h54v32.4H0z" />
                        </clipPath>
                      </defs>
                    </svg>
                  </TooltipTrigger>
                  <TooltipPopup>Tailwind CSS</TooltipPopup>
                </Tooltip>
              </div>
            </div>
            <div className="w-full h-full hidden xl:block">
              <Suspense>
                <HomeDemo />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
