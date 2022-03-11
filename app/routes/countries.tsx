import { Container } from '@chakra-ui/react';
import { PrismicText } from '@prismicio/react';
import { Outlet, useLoaderData } from 'remix';
import { SidebarLink, SidebarMenu, SidebarWrapper } from '~/components/Sidebar';
import SidebarContent from '~/components/Sidebar/SidebarContent';
import SidebarDivider from '~/components/Sidebar/SidebarDivider';
import { listCountries } from '~/lib/country.server';

export const loader = async () => {
  return await listCountries();
};

export default function Index() {
  const countries = useLoaderData<Awaited<ReturnType<typeof loader>>>();

  return (
    <Container maxW="container.xl" minH="calc(100vh - 64px)">
      <SidebarWrapper>
        <SidebarMenu ml={{ md: -4 }}>
          <SidebarDivider label="Countries" />
          {countries.map(country => (
            <SidebarLink to={`/countries/${country.uid}`} key={country.uid}>
              <PrismicText field={country.data.country_name} />
            </SidebarLink>
          ))}
        </SidebarMenu>
        <SidebarContent>
          <Outlet />
        </SidebarContent>
      </SidebarWrapper>
    </Container>
  );
}
