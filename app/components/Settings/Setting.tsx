import { FormControl, HStack, Text } from '@chakra-ui/react';

const Setting: React.FC<{ label?: string; htmlFor?: string }> = ({ children, label, htmlFor }) => {
  return (
    <FormControl
      fontSize="sm"
      as="li"
      display="flex"
      bg="gray.3"
      py={2}
      px={4}
      alignItems="center"
      minH="4rem"
      justifyContent="space-between"
    >
      <Text as="label" color="gray.12" htmlFor={htmlFor} pr={4} flexGrow={1} flexBasis={0}>
        {label}
      </Text>
      <HStack color="gray.11" flexGrow={1} justifyContent="flex-end">
        {children}
      </HStack>
    </FormControl>
  );
};

export default Setting;
