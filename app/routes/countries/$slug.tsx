import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { PrismicRichText, PrismicText } from '@prismicio/react';
import { DataFunctionArgs } from '@remix-run/server-runtime';
import { formatRelative } from 'date-fns';
import { MetaFunction, RouteComponent, useLoaderData } from 'remix';
import { getCountryDataByUID } from '~/lib/country.server';

export const loader = async ({ params: { slug } }: DataFunctionArgs) => {
  if (!slug) return null;
  return await getCountryDataByUID(slug);
};

export const meta: MetaFunction = ({ data: document }: { data: Awaited<ReturnType<typeof loader>> }) => {
  const pageTitle = document?.data.country_name;
  const title = (PrismicText({ field: pageTitle }) as string | null) || 'Country';

  return {
    title,
    description: 'Country',
  };
};

const Slug: RouteComponent = () => {
  const country = useLoaderData<Awaited<ReturnType<typeof loader>>>();

  return (
    <Box>
      <Box as="header" p={8}>
        <Heading as="h1">
          <PrismicText field={country?.data.country_name} />
        </Heading>
        {country?.last_publication_date && (
          <Text color="gray.10" fontSize="sm">
            Last updated {formatRelative(new Date(country.last_publication_date), new Date())}
          </Text>
        )}
      </Box>
      {country?.data.body.map((slice, index) => {
        switch (slice.slice_type) {
          case 'faq_group':
            return (
              <Box key={index}>
                {slice.primary.group_name && (
                  <Heading as="h2" size="lg">
                    <PrismicText field={slice.primary.group_name} />
                  </Heading>
                )}
                {slice.items.map((item, index) => (
                  <Stack key={index} p={8} borderTop="1px solid" borderColor="gray.3" color="gray.11">
                    {item.question && (
                      <Heading as="h3" size="md" color="gray.12">
                        <PrismicText field={item.question} />
                      </Heading>
                    )}
                    <PrismicRichText field={item.answer} />
                  </Stack>
                ))}
              </Box>
            );
          default:
            return null;
        }
      })}
    </Box>
  );
};

export default Slug;
