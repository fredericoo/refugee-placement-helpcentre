import { Box, Container, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { PrismicText } from '@prismicio/react';
import { Link, useLoaderData } from 'remix';
import BG from '~/components/BG';
import { listCountries } from '~/lib/country.server';

export const loader = async () => {
  return await listCountries();
};

export default function Index() {
  const countries = useLoaderData<Awaited<ReturnType<typeof loader>>>();

  return (
    <>
      <Stack minH="50vh" justify="center" bg="gray.2" borderBottom="1px solid" borderColor="gray.4">
        <Container maxW="container.xl" position="relative">
          <Stack as="header" py={8} maxW="container.md" zIndex="1" position="relative">
            <Heading as="h1" size="2xl" letterSpacing="tight" mb={4} color="primary.11">
              If you are a Ukranian refugee and are seeking to emigrate to one of these countries, here are some tips to
              ease your journey
            </Heading>
            <Text color="gray.11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
            </Text>
          </Stack>
          <BG
            zIndex="0"
            position="absolute"
            h="100%"
            right="0"
            bottom="0"
            color={{ base: 'primary.5', md: 'primary.8' }}
          />
        </Container>
      </Stack>
      <Container maxW="container.xl" py={8}>
        <Text fontWeight="bold" fontSize="lg" mb={4}>
          I'm looking to emigrate to:
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
