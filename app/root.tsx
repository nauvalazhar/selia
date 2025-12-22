import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import { Toast } from 'components/selia/toast';
import { getSidebarMenu } from './lib/sidebar';
import { Cmdk } from 'components/cmdk';
import { blocks } from 'components/blocks';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap',
  },
  {
    rel: 'icon',
    href: '/selia.png',
  },
];

export async function loader({ request }: Route.LoaderArgs) {
  const sidebarMenu = await getSidebarMenu();
  const menu = sidebarMenu.map((m) => ({
    value: m.title,
    label: m.title,
    items: m.items.map((i) => ({
      value: i.path,
      label: i.name,
      meta: 'Documentation',
    })),
  }));

  const blocksItems = [
    {
      value: 'Blocks',
      label: 'Blocks',
      items: Object.entries(blocks).map(([key, { name }]) => ({
        value: `/blocks#${key}`,
        label: name,
        meta: 'Block',
      })),
    },
  ];

  const items = [
    ...menu,
    ...blocksItems,
    {
      value: 'Pages',
      label: 'Pages',
      items: [
        {
          value: '/blocks',
          label: 'Blocks',
          meta: 'Page',
        },
      ],
    },
  ];

  return { items };
}

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>('root');

  let items = [] as any[];

  if (data && 'items' in data) {
    items = data.items;
  }

  return (
    <html lang="en" suppressHydrationWarning className="scroll-pt-20">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              const localTheme = localStorage.theme ? JSON.parse(localStorage.theme)?.state?.theme : undefined;

              document.documentElement.classList.toggle("dark", 
                localTheme === 'dark' ||
                  ((!('theme' in localStorage) || localTheme === 'system') && window.matchMedia("(prefers-color-scheme: dark)").matches)
              );
            `,
          }}
        />
      </head>
      <body className="bg-background">
        <div className="root">{children}</div>
        <Toast />
        <Cmdk items={items} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error';
    details =
      error.status === 404
        ? 'The requested page could not be found.'
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
