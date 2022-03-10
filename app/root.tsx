import { Icon, Text } from '@chakra-ui/react';
import { LinkProps, PrismicProvider } from '@prismicio/react';
import { VscLinkExternal } from 'react-icons/vsc';
import { Link, Links, LiveReload, Meta, MetaFunction, Outlet, Scripts, ScrollRestoration } from 'remix';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ThemeProvider from './theme/Provider';

export const meta: MetaFunction = () => {
  return { title: 'Refugee placement help centre' };
};

const ExternalLinkComponent: React.FC<LinkProps> = ({ href, children, ...props }) => (
  <Text as="a" href={href} color="primary.10" target="_blank" referrerPolicy="no-referrer" {...props}>
    {children} <Icon as={VscLinkExternal} verticalAlign="-.1em" />
  </Text>
);
const InternalLinkComponent: React.FC<LinkProps> = ({ href, children, ...props }) => (
  <Text as={Link} to={href} color="primary.10">
    <a {...props}>{children}</a>
  </Text>
);

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
        <PrismicProvider externalLinkComponent={ExternalLinkComponent} internalLinkComponent={InternalLinkComponent}>
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
