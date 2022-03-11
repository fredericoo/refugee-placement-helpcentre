import { Box, Container, HStack } from '@chakra-ui/react';
import { PrismicRichText } from '@prismicio/react';
import { RichTextField } from '@prismicio/types';

const Navbar: React.VFC<{ text?: RichTextField }> = ({ text }) => {
  return (
    <Box py={4} borderTop="1px solid" borderColor="gray.4">
      <HStack as={Container} maxW="container.xl" fontSize="sm" color="gray.10">
        <PrismicRichText field={text} />
      </HStack>
    </Box>
  );
};

export default Navbar;
