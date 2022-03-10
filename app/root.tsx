import { PrismicProvider } from '@prismicio/react';
import { Link, Links, LiveReload, Meta, MetaFunction, Outlet, Scripts, ScrollRestoration } from 'remix';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ThemeProvider from './theme/Provider';

export const meta: MetaFunction = () => {
  return { title: 'Refugee placement help centre' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <PrismicProvider
          internalLinkComponent={({ href, children, ...props }) => (
            <Link to={href}>
              <a {...props}>{children}</a>
            </Link>
          )}
        >
          <ThemeProvider>
            <Navbar />
            <Outlet />
            <Footer />
          </ThemeProvider>
        </PrismicProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
