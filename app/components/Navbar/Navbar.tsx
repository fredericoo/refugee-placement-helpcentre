import { Box, Container, HStack, Text } from '@chakra-ui/react';
import { Link } from '@remix-run/react';

const Navbar: React.VFC = () => {
  return (
    <Box
      py={4}
      w="100%"
      zIndex="docked"
      position="sticky"
      top={0}
      transition="background .6s ease-out"
      bg="rgba(255, 255, 255, 0.85)"
      backdropFilter="saturate(180%) blur(20px)"
      boxShadow="0 1px 0 0 rgba(0, 0, 0, 0.1)"
    >
      <HStack as={Container} maxW="container.xl">
        <Link to="/">
          <HStack as="a" color="gray.10">
            <Text fontSize="sm" letterSpacing="tight">
              <Text as="span" fontWeight="bold" color="primary.12">
                SaltPay
              </Text>{' '}
              / Guidance for Ukranian Refugees
            </Text>
          </HStack>
        </Link>

        <HStack justify="flex-end" flexGrow="1">
          Sign in
        </HStack>
      </HStack>
    </Box>
  );
};

export default Navbar;
