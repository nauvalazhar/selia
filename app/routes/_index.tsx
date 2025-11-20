import { Button } from 'components/selia/button';
import { Text } from 'components/selia/text';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router';

export default function Index() {
  return (
    <>
      <title>Selia – User interface for humans</title>

      <div className="container mx-auto py-14 max-sm:px-4 flex items-center justify-center h-dvh">
        <div className="w-full lg:w-4/12 mx-auto md:grid grid-cols-[auto_1fr] gap-x-6 gap-y-1.5">
          <img
            src="/selia.png"
            alt="Selia"
            className="size-14 row-span-2 mb-4"
          />
          <h1 className="text-2xl font-medium tracking-tight">
            A user interface for humans and computers
          </h1>
          <div className="col-start-2 mt-2 lg:mt-0">
            <Text className="text-muted mb-4 lg:w-10/12">
              Built with Tailwind CSS and Base UI Components. Still in early
              development.
            </Text>
            <Button
              variant="primary"
              pill
              render={<Link to="/docs/installation" />}
            >
              Get started
              <ArrowRightIcon />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
