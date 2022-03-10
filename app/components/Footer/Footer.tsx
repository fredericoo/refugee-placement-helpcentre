import { Box, Container, HStack, Text } from '@chakra-ui/react';

const Navbar: React.VFC = () => {
  return (
    <Box py={4} borderTop="1px solid" borderColor="gray.4">
      <HStack as={Container} maxW="container.xl" fontSize="sm" color="gray.10">
        <Text>You may redistribute any content within this page.</Text>
      </HStack>
    </Box>
  );
};

export default Navbar;
