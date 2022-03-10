import { Box, Container, HStack } from '@chakra-ui/react';
import { PrismicRichText } from '@prismicio/react';
import { useLoaderData } from 'remix';
import { getFooter } from '~/lib/country.server';

export const loader = async () => {
  return await getFooter();
};

const Navbar: React.VFC = () => {
  const homePage = useLoaderData<Awaited<ReturnType<typeof loader>>>();

  return (
    <Box py={4} borderTop="1px solid" borderColor="gray.4">
      <HStack as={Container} maxW="container.xl" fontSize="sm" color="gray.10">
        <PrismicRichText field={homePage?.data?.disclaimer} />
      </HStack>
    </Box>
  );
};

export default Navbar;
