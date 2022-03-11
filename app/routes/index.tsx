import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import { Link, useLoaderData } from 'remix';
import BG from '~/components/BG';
import { getHomePage, listCountries } from '~/lib/country.server';

export const loader = async () => {
  return {
    homePage: await getHomePage(),
    countries: await listCountries(),
  };
};

export default function Index() {
  const { countries, homePage } = useLoaderData<Awaited<ReturnType<typeof loader>>>();

  return (
    <>
      <Box bg="gray.2" borderBottom="1px solid" borderColor="gray.4">
        <Stack minH="50vh" px={4} justify="center" maxW="container.xl" position="relative" mx="auto">
          <Stack as="header" py={8} maxW="container.md" zIndex="1" position="relative">
            {homePage.data.page_title && (
              <Heading as="h1" size="2xl" letterSpacing="tight" mb={4} color="primary.11">
                <PrismicText field={homePage.data.page_title} />
              </Heading>
            )}
            {homePage.data.introduction && (
              <Text as={PrismicRichText} field={homePage.data.introduction} color="gray.11" />
            )}
          </Stack>
          <BG
            p={8}
            zIndex="0"
            position="absolute"
            h="100%"
            right="0"
            bottom="0"
            color={{ base: 'primary.5', md: 'primary.8' }}
          />
        </Stack>
      </Box>
      <Container maxW="container.xl" py={8}>
        <Text fontWeight="bold" fontSize="lg" mb={4}>
          <PrismicText field={homePage.data.emigrate} />
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={4}>
          {countries.map(country => (
            <Box
              as={Link}
              key={country.uid}
              to={`/countries/${country.uid}`}
              p={4}
              borderRadius="lg"
              bg="primary.3"
              color="primary.10"
              _hover={{ bg: 'primary.4' }}
              _active={{ bg: 'primary.5' }}
              w="100%"
            >
              <PrismicText field={country.data.country_name} />
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
